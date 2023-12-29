import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { useState } from 'react';
import { desktop, laptop, mobile, tablet } from '../responsive';

const Container = styled.div`
	widht: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
	text-wrap: balance;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #f5fafd;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	background-color: #${(props) => props.bg};
	${mobile({
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '30px',
	})}
`;

const ImgContainer = styled.div`
	height: 100%;
	flex: 1;
	${mobile({ height: '50%' })}
	${tablet({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	})}
	${laptop({
		height: '100%',
		flex: 1,
	})}
`;

const Image = styled.img`
	height: 90%;
	${mobile({ height: '100%' })}
	${tablet({
		height: '70%',
	})}
	${laptop({ height: '90%' })}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
	${mobile({ padding: '20px', textAlign: 'center' })}
	${desktop({ textAlign: 'center' })}
`;

const Title = styled.h1`
	font-size: 70px;
	${mobile({ fontSize: '30px' })}
	${tablet({ fontSize: '40px' })}
	${laptop({ fontSize: '60px' })}
	${desktop({ fontSize: '70px' })}
`;

const Desc = styled.p`
	margin: 50px 0px;
	font-weight: 500;
	font-size: 20px;
	letter-spacing: 3px;
	${mobile({ fontSize: '16px', margin: '20px 0px' })}
	${tablet({ fontSize: '16px', margin: '20px 0px' })}
	${laptop({ fontSize: '20px', margin: '50px 0px', letterSpacing: '3px' })}
	${desktop({ fontSize: '40px' })}
`;

const Button = styled.button`
	padding: 15px;
	color: white;
	font-size: 20px;
	background-color: teal;
	border: none;
	border-radius: 20px;
	transition: opacity 0.5s ease;
	cursor: pointer;
	${desktop({ padding: '30px', fontSize: '40px' })}

	&:hover {
		opacity: 0.7;
	}
`;

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const interval = setInterval(run, 3000);

	function run() {
		handleClick();
		restInterval();
	}

	function restInterval() {
		clearInterval(interval);
	}

	const handleClick = (direction) => {
		if (direction === 'left') {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};
	return (
		<Container>
			<Arrow
				direction='left'
				onClick={() => handleClick('left')}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide
						key={item.id}
						bg={item.bg}>
						<ImgContainer>
							<Image src={item.img} />
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>SHOW NOW</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow
				direction='right'
				onClick={() => handleClick('right')}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;

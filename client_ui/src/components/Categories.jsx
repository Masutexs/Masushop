import styled from 'styled-components';
import { categories } from '../data';
import { desktop, mobile, tablet } from '../responsive';

const Container = styled.div`
	${mobile({ padding: '0px', flexDirection: 'column' })};
`;

const Wrapper = styled.div`
	flex: 1;
	margin: 5px;
	height: 70vh;
	position: relative;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${mobile({ height: '60vh' })}
`;
const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	color: #082541;
	margin-bottom: 20px;
	font-weight: 900;
	${mobile({ fontSize: '24px' })}
	${tablet({ fontSize: '22px' })}
	${desktop({ fontSize: '50px' })}
`;

const Button = styled.button`
	border: none;
	padding: 10px;
	background-color: teal;
	color: white;
	cursor: pointer;
	font-weight: 600;
	transition: opacity 0.5s ease;
	${desktop({ fontSize: '30px' })}
	&:hover {
		opacity: 0.7;
	}
`;

const CategoriesItem = ({ title, img }) => (
	<Wrapper>
		<Image src={img} />
		<Info>
			<Title>{title}</Title>
			<Button>SHOP NOW</Button>
		</Info>
	</Wrapper>
);

const Categories = () => {
	return (
		<Container
			style={{
				display: 'flex',
				paddin: 20,
				justifyContent: 'space-between',
				//textWrap: 'balance',
			}}>
			{categories.map((categories) => (
				<CategoriesItem
					key={categories.id}
					categories={categories}
					{...categories}
				/>
			))}
		</Container>
	);
};

export default Categories;

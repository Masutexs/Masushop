import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(124, 108, 5, 0.93), rgba(124, 108, 5, 0.93));
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	background: transparent;
	border: 2px solid rgb(145, 126, 5);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 20px;
	${mobile({ width: '65%', padding: '15px' })}
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 400;
	${mobile({ fontSize: '20px' })}
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	${mobile({ display: 'block' })}
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
	${mobile({ width: '100%', marginBottom: '8px' })}
`;

const Agreement = styled.span`
	font-size: 14px;
	text-wrap: balance;
	margin: 10px 0px;
	${mobile({ margin: '10px 0px', display: 'block' })}
`;

const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: #695c05;
	color: white;
	cursor: pointer;
	transition: background-color 0.5s ease;
	${mobile({ margin: '10px 0px' })}

	&:hover {
		background-color: #423a03;
	}
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder='Name' />
					<Input placeholder='Last Name' />
					<Input placeholder='Username' />
					<Input placeholder='Email' />
					<Input placeholder='Password' />
					<Input placeholder='Confirm Password' />
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;

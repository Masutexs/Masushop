import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(124, 108, 5, 0.93), rgba(124, 108, 5, 0.93));
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 25%;
	background: transparent;
	border: 2px solid rgb(145, 126, 5);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	// backdrop-filter: blur(15px);
	padding: 30px 40px;
`;

const Title = styled.h1`
	font-size: 30px;
	font-weight: 700;
	text-align: center;
	color: #dbdada;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0px;
	padding: 10px;
`;

const Button = styled.button`
	width: 100%;
	border: none;
	padding: 15px 20px;
	margin: 10px 0px;
	background-color: #695c05;
	color: white;
	cursor: pointer;
	transition: background-color 0.5s ease;

	&:hover {
		background-color: #423a03;
	}
`;

const LinkForget = styled.a`
	margin: 5px;
	text-align: right;
	font-size: 14px;
	text-decoration: underline;
	cursor: pointer;
	color: #0c0a91;
`;

const Link = styled.a`
	margin: 10px;
	text-align: center;
	font-size: 14px;
	text-decoration: underline;
	cursor: pointer;
	color: #dbdada;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Login</Title>
				<Form>
					<Input placeholder='Username' />
					<Input placeholder='Password' />
					<LinkForget>Forget Password?</LinkForget>
					<Button>LOGIN</Button>
					<Link>Don't have an account? Create new account</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;

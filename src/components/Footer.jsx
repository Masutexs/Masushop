import styled from '@emotion/styled';
import {
	Facebook,
	Instagram,
	MailOutline,
	PhoneAndroid,
	Pinterest,
	Room,
	Twitter,
	WhatsApp,
} from '@mui/icons-material';

const Container = styled.div`
	display: flex;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
	margin: 20px 0px;
`;
const SocialContainer = styled.div`
	display: flex;
`;

const SocailIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
`;

const Center = styled.div`
	flex: 1;
	padding: 20px;
`;

const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

const ContactItem = styled.div`
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;
const Payment = styled.img`
	width: 50%;
`;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>MASUSHOP.</Logo>
				<Desc>
					There are many variations of passeges of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which dont look even slightly believable.
				</Desc>
				<SocialContainer>
					<SocailIcon color='365088'>
						<Facebook />
					</SocailIcon>

					<SocailIcon color='e63858'>
						<Instagram />
					</SocailIcon>

					<SocailIcon color='55acee'>
						<Twitter />
					</SocailIcon>

					<SocailIcon color='e60023'>
						<Pinterest />
					</SocailIcon>

					<SocailIcon color='2bdf7c'>
						<WhatsApp />
					</SocailIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{ marginRight: '10px' }} /> 324 Victoria Island, Lagos
				</ContactItem>
				<ContactItem>
					<PhoneAndroid style={{ marginRight: '10px' }} /> +234 803 910 2360
				</ContactItem>
				<ContactItem>
					<MailOutline style={{ marginRight: '10px' }} /> masutexs@gmail.com
				</ContactItem>
				<Payment src='http://i.ibb.co/Qfvn4z6/payment.png' />
			</Right>
		</Container>
	);
};

export default Footer;

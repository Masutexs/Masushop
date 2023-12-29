import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { desktop, mobile } from '../responsive';
import styled from 'styled-components';

const Container = styled.div`
	height: 60px;
	${mobile({ height: '40px' })}
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	${desktop({ paddingLeft: '10%' })}
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
	border: 1px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
	${mobile({ width: '40px' })}
`;

const Logo = styled.h1`
	font-weight: bold;
	${mobile({ fontSize: '20px' })}
	${desktop({ fontSize: '40px' })}
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
	${mobile({ marginLeft: '10px', flex: 2, justifyContent: 'center' })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ justifyContent: 'center' })}
	${desktop({ paddingRight: '10%' })}
`;

const MenuItem = styled.div`
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ display: 'none' })}
`;

const Cart = styled.div`
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	margin-left: 25px;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder='Search' />
						<Search style={{ color: 'gray', fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>MASUSHOP.</Logo>
				</Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<Cart type='show'>
						<Badge
							badgeContent={4}
							color='primary'>
							<ShoppingCartOutlined />
						</Badge>
					</Cart>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;

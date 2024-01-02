import styled from 'styled-components';
import { products } from '../data';
import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@mui/icons-material';

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease;
	cursor: pointer;
`;

const Container = styled.div`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	background-color: white;
	position: absolute;
	border-radius: 50%;
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;

	&:hover {
		background-color: #f5fbfd;
		transform: scale(1.1);
	}
`;

const ProductItem = ({ img }) => (
	<Container>
		<Circle />
		<Image src={img} />
		<Info>
			<Icon>
				<ShoppingCartOutlined />
			</Icon>
			<Icon>
				<SearchOutlined />
			</Icon>
			<Icon>
				<FavoriteBorderOutlined />
			</Icon>
		</Info>
	</Container>
);

const Product = () => {
	return (
		<div
			style={{
				display: 'flex',
				paddin: 20,
				flexWrap: 'wrap',
				justifyContent: 'space-between',
			}}>
			{products.map((product) => (
				<ProductItem
					key={product.id}
					product={product}
					{...product}
				/>
			))}
		</div>
	);
};

export default Product;

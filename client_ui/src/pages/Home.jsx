import {
	Announcement,
	Categories,
	Footer,
	Navbar,
	Newsletter,
	Product,
	Slider,
} from '../components';
import { SpeedInsights } from '@vercel/speed-insights/react';

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<Slider />
			<Categories />
			<Product />
			<Newsletter />
			<Footer />
			<SpeedInsights />
		</div>
	);
};

export default Home;

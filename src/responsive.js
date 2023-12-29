import { css } from 'styled-components';

const mobile = (props) => {
	return css`
		@media only screen and (max-width: 480px) {
			${props}
		}
	`;
};

const tablet = (props) => {
	return css`
		@media only screen and (min-width: 768px) {
			${props}
		}
	`;
};

const laptop = (props) => {
	return css`
		@media only screen and (min-width: 1024px) {
			${props}
		}
	`;
};

const desktop = (props) => {
	return css`
		@media only screen and (min-width: 1920px) {
			${props}
		}
	`;
};

export { mobile, tablet, laptop, desktop };

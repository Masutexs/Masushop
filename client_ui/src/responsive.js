import { css } from 'styled-components';

const mobile = (props) => {
	return css`
		@media (max-width: 480px) {
			${props}
		}
	`;
};

const tablet = (props) => {
	return css`
		@media (min-width: 768px) {
			${props}
		}
	`;
};

const laptop = (props) => {
	return css`
		@media (min-width: 1024px) {
			${props}
		}
	`;
};

const desktop = (props) => {
	return css`
		@media (min-width: 1920px) {
			${props}
		}
	`;
};

export { mobile, tablet, laptop, desktop };

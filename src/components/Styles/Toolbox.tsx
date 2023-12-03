import styled from 'styled-components';

export const Toolbox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	padding: 1rem;
	max-width: 90vw;
	background-color: #ddd;
	margin: 5px auto;
	border-radius: 5px;
	transition: box-shadow 0.3s, border-width 0.3s; /* Add transition for smoother effect */

	/* Initial styles */
	box-shadow: none;
	border: 1px solid transparent;

	&:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		border: 2px solid #bbb;
	}
`;

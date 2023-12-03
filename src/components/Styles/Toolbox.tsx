import styled from 'styled-components';

export const Toolbox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem;
	width: 90vw;
	background-color: #eed;
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

export const ToolboxRow = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    justify-content: space-between;
    padding: 0 10px;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    border: 1px solid #aaa;
    border-radius: 5px;
    padding: 10px;

    div {
        margin: 3px 10px;
        line-height: 2;
        text-align: left;
    }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    width: 66%;
    border: 1px solid #aaa;
    text-align: left;
    border-radius: 5px;
    h3 {
        margin: 20px 0 0 30px;
        font-size: 18px;
    }
`;
import { animated, useSpring } from '@react-spring/web'
import './NoPage.css';
import styled from 'styled-components';

const LinkButton = styled.a`
  color: #0f0f0f;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  padding: 10px;

  &:hover {
    color: black; 
  }
`;

const NoPage = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
    });

    return (
        <animated.div style={props}>
            <div className="not-found-container">
                <h1>404 - Not Found</h1>
                <p>Sorry, the page you are looking for might be in another castle.</p>
                <LinkButton href="./home">Back to Home</LinkButton>
            </div>
        </animated.div>
    );
};

export default NoPage;

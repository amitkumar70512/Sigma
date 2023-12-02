import { animated, useSpring } from '@react-spring/web'
import './NoPage.css';

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
            </div>
        </animated.div>
    );
};

export default NoPage;

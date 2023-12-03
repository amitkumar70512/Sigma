import Navbar from "../Navbar/Navbar";
import { ContainerBox } from "../Styles/ContainerBox";
import Spinner from "../plugins/Spinner/Spinner";

const Home = () => {
    return (
        <>
            <Navbar />
            <ContainerBox>
                <Spinner />
            </ContainerBox>
        </>
    );
};

export default Home;
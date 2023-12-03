import Navbar from "../Navbar/Navbar";
import SearchField from "../SearchField/SearchField";
import { ContainerBox } from "../Styles/ContainerBox";
import Spinner from "../plugins/Spinner/Spinner";

const Home = () => {
    return (
        <>
            <Navbar />

            <ContainerBox>
                <SearchField />
            </ContainerBox>
        </>
    );
};

export default Home;
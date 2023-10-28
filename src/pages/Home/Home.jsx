
import Footer from "../../shared/Footer/Footer";
import Banner from "./Banner";
import Services from "./services/Services";



const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
                <Services></Services>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import NavBar from "../NavBar";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-sub-container">
                <div className="content-container">
                    <h1 className="auction-heading">Auctions</h1>
                    <p className="greeting-bidder">Hello Bidder Welcome !!!</p>
                    <p className="bidder-message">Here we are serving different types of auctions <br /> to see that magic please click the below button.</p>
                    <Link to='/auctiontypes'>
                        <button className="btn btn-primary">Take me to auctions types</button>
                    </Link>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665225742/online-internet-auction-international-trade-concept-vector-illustration_106788-3035_vuqbhp.jpg"
                        alt='banner' className="side-image" />
                </div>
            </div>
        </div>
    )
}

export default Home;
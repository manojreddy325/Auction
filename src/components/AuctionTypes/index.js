import { Link } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuctionTypes = () => {
    return (
        <div className='auction-types-container'>
            <h1 className='heading'>You Can Select the catgory or else you can click the below sector which you want</h1>
            <div className='first-container'>
                <div className='second-container'>
                    <div className="image-container">
                    <Link to='/bankauctions' className='link-style'>
                        <img src='https://res.cloudinary.com/dqsporrgm/image/upload/v1663147996/240_F_201699667_dDLfrKmAkpOqJ4u0LK1sykUpeE84aAf3_v0sh0s.jpg'
                            alt='bank auction' className="bank-logo" />
                        <h1 className="bank-heading">Bank Auctions</h1></Link>
                    </div>
                    <div className="image-container">
                    <Link to='/policeauctions' className='link-style'>
                        <img src='https://res.cloudinary.com/dqsporrgm/image/upload/v1663147963/240_F_96985980_84yHLyPShbi3QI9iClMmBFMUW36KVFWU_be6rog.jpg'
                            alt='bank auction' className="police-logo" />
                        <h1 className="bank-heading">Police Auctions</h1></Link>
                    </div>
                </div>
                <div className='second-container'>
                    <div className="image-container">
                    <Link to='/paintingauctions' className='link-style'>
                        <img src='https://res.cloudinary.com/dqsporrgm/image/upload/v1663148083/240_F_263787605_1J2qS8PcG4LREd539HKnVICgnc986tHy_i21gyh.jpg'
                            alt='bank auction' className="painting-logo" />
                        <h1 className="bank-heading">Painting Auctions</h1></Link>
                    </div>
                    <div className="image-container">
                    <Link to='/rentalauctions' className='link-style'>
                        <img src='https://res.cloudinary.com/dqsporrgm/image/upload/v1663148085/240_F_408511812_8UGTuX8BieG571jrbmz0PYsqLv1xPrjO_yhgrad.jpg'
                            alt='bank auction' className="rent-cars-logo" />
                        <h1 className="bank-heading">Rental Cars Auctions</h1></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuctionTypes;
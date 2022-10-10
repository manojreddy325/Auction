import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const BankAuctions = () => {
    return (
        <div className="banks-auction-container">
            <div class="d-flex flex-row justify-content-center">
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1663147963/240_F_65444581_E3Ter0oOm5kuGIOZmPLqEOshZEAEDITH_hnfa1y.jpg"
                     alt="Car" class="auction-card-image" />
                    <h1 class="auction-card-name"> Car Auction </h1>
                    <p class="auction-card-price"> RS 136999 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1662806003/bmw-vehicle-ride-bike-104842_tpixgf.jpg" 
                    alt="Bike" class="auction-card-image" />
                    <h1 class="auction-card-name"> Bike Auctions </h1>
                    <p class="auction-card-price"> RS 150000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665329363/tuk-tuk-taxi-white-background_1308-91042_zr6eg0.webp" 
                    alt="Auto" class="auction-card-image" />
                    <h1 class="auction-card-name"> Auto Auction </h1>
                    <p class="auction-card-price"> RS 1369000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665329363/farm-tractor-illustration-solid-color_232942-37_nbs0yd.webp" 
                    alt="Tractor" class="auction-card-image" />
                    <h1 class="auction-card-name"> Tractor Auctions </h1>
                    <p class="auction-card-price"> RS 150000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-center">
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665329363/concrete-mixing-truck-white-background_1308-109837_a7gmuj.webp" 
                    alt="Concrete lorry" class="auction-card-image" />
                    <h1 class="auction-card-name"> Concrete Mixer Auction </h1>
                    <p class="auction-card-price"> RS 136999</p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665329363/bus-driver-concept-illustration_114360-6330_gksji9.webp" 
                    alt="Bus" class="auction-card-image" />
                    <h1 class="auction-card-name"> Bus Auctions </h1>
                    <p class="auction-card-price"> RS 150000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665329363/excavator-vehicle-working_1308-41657_bbhrcd.webp" 
                    alt="Jcb" class="auction-card-image" />
                    <h1 class="auction-card-name"> Jcb Auction </h1>
                    <p class="auction-card-price"> RS 136999</p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665329363/hand-drawn-transport-truck_23-2149161394_g1utfb.webp" 
                    alt="Lorry" class="auction-card-image" />
                    <h1 class="auction-card-name"> Lorry Auctions </h1>
                    <p class="auction-card-price"> RS 150000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-center">
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1662806004/pexels-photo-1475938_bijjvr.jpg" 
                    alt="Independent house" class="auction-card-image" />
                    <h1 class="auction-card-name"> Independent House Auction </h1>
                    <p class="auction-card-price"> RS 136999</p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1662806003/istockphoto-1322575582-612x612_dfffxy.jpg" 
                    alt="Flat" class="auction-card-image" />
                    <h1 class="auction-card-name"> Flat Auctions </h1>
                    <p class="auction-card-price"> RS 150000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1662806003/pexels-photo-388415_pw0nmd.jpg" 
                    alt="open plot" class="auction-card-image" />
                    <h1 class="auction-card-name"> Open Plot Auction </h1>
                    <p class="auction-card-price"> RS 136999</p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}
export default BankAuctions;
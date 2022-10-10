const CarRentalAuctions = () => {
    return(
        <div className="bank-auction-container">
            <div class="d-flex flex-row justify-content-center">
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665381809/back-view-man-sitting-car_23-2149668080_d2k4yf.webp"
                        alt="drivezy" class="auction-card-image" />
                    <h1 class="auction-card-name"> Drivezy Cars Auction </h1>
                    <p class="auction-card-price"> RS 136999 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665381809/generic-black-suv_2227-847_y8xlvy.webp"
                        alt="Zoomcar" class="auction-card-image" />
                    <h1 class="auction-card-name">   Zoomcars Auction  </h1>
                    <p class="auction-card-price"> RS 150000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665381809/generic-brandless-modern-sport-car-with-fire-smoke_110488-1759_nw0pab.webp"
                        alt="Rev" class="auction-card-image" />
                    <h1 class="auction-card-name">  Rev Cars Auction  </h1>
                    <p class="auction-card-price"> RS 1369000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1665381809/taxi-poster-with-realistic-yellow-public-service-car-with-reflection_1284-5444_bdq5fd.webp"
                        alt="taxi" class="auction-card-image" />
                    <h1 class="auction-card-name"> Taxi Auction  </h1>
                    <p class="auction-card-price"> RS 150000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default CarRentalAuctions;
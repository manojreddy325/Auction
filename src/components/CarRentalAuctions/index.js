const CarRentalAuctions = () => {
    return(
        <div className="bank-auction-container">
            <div class="d-flex flex-row justify-content-center">
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1662806004/pexels-photo-2372978_k1xta4.jpg"
                        alt="painting" class="auction-card-image" />
                    <h1 class="auction-card-name"> Painting Auction </h1>
                    <p class="auction-card-price"> RS 136999 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1662806004/pexels-photo-2123337_cfi38q.jpg"
                        alt="painting1" class="auction-card-image" />
                    <h1 class="auction-card-name">   Painting Auction  </h1>
                    <p class="auction-card-price"> RS 150000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1662806003/pexels-photo-375882_jyksfk.jpg"
                        alt="painting2" class="auction-card-image" />
                    <h1 class="auction-card-name">  Painting Auction  </h1>
                    <p class="auction-card-price"> RS 1369000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
                <div class="auction-card-item">
                    <img src="https://res.cloudinary.com/dqsporrgm/image/upload/v1663147963/240_F_56344579_jFYrpO7Lvaryj5BDvU7L2TVDd7CJCqKm_gqw4du.jpg"
                        alt="painting3" class="auction-card-image" />
                    <h1 class="auction-card-name">  Painting Auction  </h1>
                    <p class="auction-card-price"> RS 150000 </p>
                    <button className='see-more-btn'>See more</button>
                    <button className='buy-btn'>Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default CarRentalAuctions;
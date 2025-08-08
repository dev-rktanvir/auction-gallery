import React from 'react';
import bannerImg from '../../assets/banner.png';

const Banner = () => {
    return (
        <div
            className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-no-repeat flex items-center"
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                        Bid on Unique Items from Around the World
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl font-light text-white mt-5 mb-8 max-w-2xl mx-auto md:mx-0">
                        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                    </p>
                    <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl cursor-pointer font-medium bg-white">
                        Explore Auctions
                    </button>
                </div>
                <div className="flex-1 mt-8 md:mt-0">
            
                </div>
            </div>
        </div>
    );
};

export default Banner;

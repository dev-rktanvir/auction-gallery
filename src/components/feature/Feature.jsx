import React, { Suspense } from 'react';
import Table from './Table';
import { FaRegHeart } from 'react-icons/fa';

const fetchBids = async () => {
    const res = await fetch('bidData.json');
    return res.json();
}

const Feature = () => {
    const bidPromiss = fetchBids();

    return (
        <div className='bg-[#EBF0F5] py-12 lg:py-24'>
            <div className='container mx-auto px-4'>
                <h2 className='text-2xl font-semibold mb-5 text-center lg:text-left'>Active Auctions</h2>
                <p className='text-xl mb-8 text-center lg:text-left'>Discover and bid on extraordinary items</p>
            </div>

            <div className='container mx-auto flex flex-col lg:flex-row gap-5 items-start px-4'>
                {/* left side */}
                <div className='w-full lg:w-[70%] bg-white rounded-3xl'>
                    <Suspense fallback={<p className='p-5'>Bids are loading...</p>}>
                        <Table bidPromiss={bidPromiss}></Table>
                    </Suspense>
                </div>

                {/* right side */}
                <div className='w-full lg:w-[30%] bg-white rounded-3xl'>
                    <div className='flex gap-4 items-center justify-center p-8'>
                        <FaRegHeart className='ml-5' size={24} />
                        <p className='font-medium text-2xl'>Favorite Items</p>
                    </div>

                    <div className='text-center border-y border-[#DCE5F3] py-12'>
                        <h2 className='text-2xl'>No favorites yet</h2>
                        <p className='text-lg mt-6 px-4 sm:px-20'>
                            Click the heart icon on any item to add it to your favorites
                        </p>
                    </div>

                    <div className='flex items-center justify-between p-8 text-2xl'>
                        <p>Total bids Amount</p>
                        <p>$0000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;

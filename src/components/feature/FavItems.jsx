import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const FavItems = ({ favItems, amount, handleCrossIcon }) => {
    return (
        <div className='w-full lg:w-[28%] bg-white rounded-3xl'>
            {/* Top part */}
            <div className='flex gap-4 items-center justify-center p-8'>
                <FaRegHeart className='ml-5' size={24} />
                <p className='font-medium text-2xl'>Favorite Items</p>
            </div>

            {/* Middle Part */}
            {
                favItems.length > 0 ?
                    <div className='text-center border-y border-[#DCE5F3] pt-6'>
                        {
                            favItems.map(item => <div key={item.id} className='flex gap-6 px-6 mb-6'>
                                <div>
                                    <img className='w-24 h-24 object-cover' src={item.image} alt="" />
                                </div>
                                <div className='text-base text-left'>
                                    <h3>{item.title}</h3>
                                    <div className='flex justify-between'>
                                        <div className='flex gap-6'>
                                            <p>${item.currentBidPrice}</p>
                                            <p>Bids: {item.bidsCount}</p>
                                        </div>
                                        <div>
                                            <RxCross1 onClick={()=> handleCrossIcon(item)} className='cursor-pointer' size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div> :
                    <div className='text-center border-y border-[#DCE5F3] py-12'>
                        <h2 className='text-2xl'>No favorites yet</h2>
                        <p className='text-lg mt-6 sm:px-20'>
                            Click the heart icon on any item to add it to your favorites
                        </p>
                    </div>
            }

            {/* Bottom Part */}
            <div className='flex items-center justify-between p-8 text-2xl'>
                <p>Total bids Amount</p>
                <p>${amount}</p>
            </div>
        </div>
    );
};

export default FavItems;
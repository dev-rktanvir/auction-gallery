import React, { use } from 'react';
import { FaRegHeart } from 'react-icons/fa';

const Table = ({ bidPromiss }) => {
    const bids = use(bidPromiss);

    return (
        <div className="overflow-x-auto rounded-3xl">
            {/* Desktop Table View */}
            <table className="hidden md:table min-w-full">
                <thead className="text-left">
                    <tr>
                        <th className="p-8 text-xl font-medium">Items</th>
                        <th className="p-8 text-xl font-medium">Current Bid</th>
                        <th className="p-8 text-xl font-medium">Time Left</th>
                        <th className="p-8 text-xl font-medium">Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    {bids.map((bid) => (
                        <tr key={bid.id} className="hover:bg-gray-50 border-t border-[#DCE5F3]">
                            {/* Items */}
                            <td className="p-8 flex items-center gap-4">
                                <img
                                    src={bid.image}
                                    alt={bid.title}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div>
                                    <h2 className="font-semibold">{bid.title}</h2>
                                </div>
                            </td>

                            {/* Current Bid */}
                            <td className="p-3 font-medium">
                                ${bid.currentBidPrice.toLocaleString()}
                            </td>

                            {/* Time Left */}
                            <td className="p-3">{bid.timeLeft}</td>

                            {/* Bid Now */}
                            <td className="p-3">
                                <button>
                                    <FaRegHeart className='ml-5' size={24} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
                {bids.map((bid) => (
                    <div
                        key={bid.id}
                        className="rounded-lg p-4 border border-[#DCE5F3]"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <img
                                src={bid.image}
                                alt={bid.title}
                                className="w-16 h-16 object-cover rounded"
                            />
                            <h2 className="font-semibold">{bid.title}</h2>
                        </div>

                        <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium">Current Bid:</span>
                            <span>${bid.currentBidPrice.toLocaleString()}</span>
                        </div>

                        <div className="flex justify-between text-sm mb-2">
                            <span className="font-medium">Time Left:</span>
                            <span>{bid.timeLeft}</span>
                        </div>

                        <div className="flex justify-end">
                            <button>
                                <FaRegHeart size={24} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;

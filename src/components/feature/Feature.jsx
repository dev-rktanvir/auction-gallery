import React, { Suspense, useEffect, useState } from 'react';
import Table from './Table';
import FavItems from './FavItems';
import { toast } from 'react-toastify';

const Feature = () => {
    const [bids, setBids] = useState([]);
    const [favItems, setFavItems] = useState([]);
    const [amount, setAmount] = useState(0);
    const [loveClr, setLoveClr] = useState([]);

    useEffect(() => {
        const loadBids = async () => {
            const res = await fetch('bidData.json');
            const data = await res.json();
            setBids(data);
        };
        loadBids();
    }, [])

    const handleLoveIcon = (bid) => {
        const newFavItems = [...favItems, bid];
        setFavItems(newFavItems);
        handleBidsAmount(bid.currentBidPrice);
        const newLoveClr = [...loveClr, bid.id];
        setLoveClr(newLoveClr);

        // Show toast
        toast.success(`${bid.title} added to favorites!`, {
            position: 'top-right',
            autoClose: 2000,
        });
    }

    const handleCrossIcon = (item) => {
        const remainingItems = favItems.filter(fav => fav.id !== item.id);
        setFavItems(remainingItems);

        // Update total amount
        setAmount(amount - item.currentBidPrice);

        // Remove from loveClr list as well
        setLoveClr(loveClr.filter(id => id !== item.id));

        // Toast message
        toast.error(`${item.title} removed from favorites`, {
            position: 'top-right',
            autoClose: 2000,
        });
    };

    const handleBidsAmount = (amt) => {
        const newAmount = amount + amt;
        setAmount(newAmount);
    }

    return (
        <div className='bg-[#EBF0F5] py-12 lg:py-24'>
            <div className='container mx-auto px-4'>
                <h2 className='text-2xl font-semibold mb-5 text-center lg:text-left'>Active Auctions</h2>
                <p className='text-xl mb-8 text-center lg:text-left'>Discover and bid on extraordinary items</p>
            </div>

            <div className='container mx-auto flex flex-col lg:flex-row gap-5 items-start px-4'>
                {/* left side */}
                <div className='w-full lg:w-[72%] bg-white rounded-3xl'>
                    <Table bids={bids}
                        handleLoveIcon={handleLoveIcon}
                        loveClr={loveClr}
                    >
                    </Table>
                </div>

                {/* right side */}
                <FavItems favItems={favItems} amount={amount} handleCrossIcon={handleCrossIcon}></FavItems>
            </div>
        </div>
    );
};

export default Feature;

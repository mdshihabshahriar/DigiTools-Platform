import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0) 
    const handlePayment = ()=>{
        setCarts([])
        toast.success(`Payment successful! Total: $${totalPrice}`)  
    } 
    const handleDelete = (item)=>{
        const newCarts = carts.filter(cartItem => cartItem.id !== item.id)
        setCarts(newCarts)
        toast.success(`${item.name} removed from cart!`) 
    }
    return (
        <div className='mt-10 p-10 max-w-7xl mx-auto border border-gray-200 rounded-lg shadow-sm'>
            <h1 className='text-2xl font-bold'>Your Cart</h1>
            {
                carts.length === 0 ?<div className='flex flex-col items-center'> <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/649/649931.png" alt="" /> <p className='text-center text-2xl p-5 text-gray-500'>Your Cart is empty</p> </div>:
                <>
                    <div className='space-y-5 mt-4'>
                {
                    carts.map(item => <div className='flex items-center justify-between shadow-sm rounded-lg p-3 bg-gray-100' key={item.id}>
                        <div className='flex items-center gap-2'>
                            <div>
                                <img className='border rounded-full border-gray-100 p-2 bg-white' src={item.icon} alt="" />
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-xl font-semibold'>{item.name}</h2>
                                <p className='text-[12px] md:text-[16px] font-medium'>${item.price}/month</p>
                            </div>
                        </div>
                        <div className='flex items-center md:gap-10'>
                            <button onClick={()=>handleDelete(item)} className='btn text-red-500 text-[16px] font-bold'>Remove</button>
                        </div>
                    </div>
                )}
                </div>
                <div className='flex justify-between p-5 mt-5 rounded-lg text-[16px]'>
                    <div className='text-[#627382]'>Total</div>
                    <div className='font-bold text-2xl text-[#101727]'>${totalPrice}</div>
                </div>
                <button onClick={handlePayment} className='btn w-full bg-linear-to-r from-[#4F39F6]  to-[#9514FA] mt-5 rounded-3xl text-[16px] font-bold text-white py-6'>Proceed to Checkout</button>
                </>
            }
                
        </div>
    );
};

export default Cart;
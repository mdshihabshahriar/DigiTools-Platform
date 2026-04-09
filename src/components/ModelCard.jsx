import React from 'react';
import { TiTick } from 'react-icons/ti';

const ModelCard = ({ model }) => {
    return (
        <div className='border border-gray-100 rounded-xl shadow-sm p-6 space-y-4 relative'>
             <span className={`absolute top-4 right-4 text-[14px] px-3 py-1 rounded-full font-medium
                ${model.tag === 'Popular' ? 'bg-purple-100 text-purple-600' : 
                model.tag === 'New' ? 'bg-green-100 text-green-600' :
                model.tag === 'Best Seller' ? 'bg-yellow-100 text-yellow-600' :
                'bg-gray-100 text-gray-600'}`}>
                {model.tag}
            </span>
            <img className='border border-gray-100 rounded-full p-2' src={model.icon} alt={model.name} />
            <h1 className='font-bold text-2xl'>{model.name}</h1>
            <p className='text-[16px]/5 text-[#627382]'>{model.description}</p>
            <p className='font-bold text-2xl'>${model.price}<span className='text-[16px] text-[#627382] font-light'>/{model.period}</span></p>
            <ul>
                {model.features.map((feature, index) => (
                    <li key={index} className='flex items-center font-medium text-[#627382] text-[16px]'>
                        <TiTick className='text-green-500 mr-2' />
                        {feature}
                    </li>
                ))}
            </ul>
            <button className='btn bg-linear-to-r from-[#4F39F6]  to-[#9514FA] text-white w-full rounded-xl'>Buy Now</button>
        </div>
    );
};

export default ModelCard;
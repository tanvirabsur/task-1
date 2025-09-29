import { ArrowRight } from 'lucide-react';
import React from 'react';

const Box = () => {
    //
    return (
        <div className='flex justify-center flex-col items-center gap-5 bg-[#0058FF] p-10 rounded-xl lg:w-[80%] md:w-[90%] w-[95%] mx-auto'>
            <p className='text-2xl font-bold text-white'>Get In Touch</p>
            <p className='w-2/3 text-center text-white'>Contact us now to enquire our plumbing services, whether you have a commercial project that requires support, or a domestic plumbing task that needs the attention of a trusted professional.</p>
            <button className='btn block'><span className='flex gap-2'>Book a Professional Plumber<ArrowRight /></span></button>
        </div>
    );
};

export default Box;
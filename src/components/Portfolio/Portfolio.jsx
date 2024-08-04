import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio(){

    return <>
     <div className="portfolio p-10 w-100 min-h-svh text-gray-800 flex flex-col justify-center items-center z-10">
            <h1 className="font-bold text-5xl mb-6">PORTFOLIO COMPENENT</h1>
            <div className="flex items-center justify-center mb-4"><div className="line me-3 w-20 h-1 bg-gray-800" /><FontAwesomeIcon icon={faStar} /><div className="line ms-3 w-20 h-1 bg-gray-800" /></div>
            
            <div className="mx-15 mb-10">
            <div className="flex flex-wrap gap-7 justify-center">
                <div className='relative md:w-1/4 rounded-lg overflow-hidden cursor-pointer'>
                <img className='w-full' src={image1} alt="" />
                <div className='absolute hover:opacity-80 opacity-0 duration-500 top-0 start-0 end-0 bottom-0 bg-emerald-600 flex justify-center items-center text-white text-6xl'><FontAwesomeIcon icon={faPlus}/></div>
                </div>
                <div className='relative md:w-1/4 rounded-lg overflow-hidden cursor-pointer'>
                <img className='w-full' src={image2} alt="" />
                <div className='absolute hover:opacity-80 opacity-0 duration-500 top-0 start-0 end-0 bottom-0 bg-emerald-600 flex justify-center items-center text-white text-6xl'><FontAwesomeIcon icon={faPlus}/></div>
                </div>
                <div className='relative md:w-1/4 rounded-lg overflow-hidden cursor-pointer'>
                <img className='w-full' src={image3} alt="" />
                <div className='absolute hover:opacity-80 opacity-0 duration-500 top-0 start-0 end-0 bottom-0 bg-emerald-600 flex justify-center items-center text-white text-6xl'><FontAwesomeIcon icon={faPlus}/></div>
                </div>
                <div className='relative md:w-1/4 rounded-lg overflow-hidden cursor-pointer'>
                <img className='w-full' src={image1} alt="" />
                <div className='absolute hover:opacity-80 opacity-0 duration-500 top-0 start-0 end-0 bottom-0 bg-emerald-600 flex justify-center items-center text-white text-6xl'><FontAwesomeIcon icon={faPlus}/></div>
                </div>
                <div className='relative md:w-1/4 rounded-lg overflow-hidden cursor-pointer'>
                <img className='w-full' src={image2} alt="" />
                <div className='absolute hover:opacity-80 opacity-0 duration-500 top-0 start-0 end-0 bottom-0 bg-emerald-600 flex justify-center items-center text-white text-6xl'><FontAwesomeIcon icon={faPlus}/></div>
                </div>
                <div className='relative md:w-1/4 rounded-lg overflow-hidden cursor-pointer'>
                <img className='w-full' src={image3} alt="" />
                <div className='absolute hover:opacity-80 opacity-0 duration-500 top-0 start-0 end-0 bottom-0 bg-emerald-600 flex justify-center items-center text-white text-6xl'><FontAwesomeIcon icon={faPlus}/></div>
                </div>
               
            </div>
            </div>
            
        </div>
    </>
       
}
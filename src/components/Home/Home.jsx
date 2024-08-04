import myImage from '../../assets/home-avatar.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons';

export default function Home(){

    return (
        <div className="home w-100 h-svh bg-emerald-400 flex flex-col justify-center items-center text-white z-10">
            <img src={myImage} alt="" width="250px"/>
            <h1 className="font-bold mb-6">START FRAMEWORK</h1>
            <div className="flex items-center justify-center mb-4"><div className="line me-3 w-20 h-1" style={{backgroundColor: 'white'}} /><FontAwesomeIcon icon={faStar} /><div className="line ms-3 w-20 h-1" style={{backgroundColor: 'white'}} /></div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    )
}
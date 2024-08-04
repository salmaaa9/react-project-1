
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStar } from '@fortawesome/free-solid-svg-icons';

export default function About(){

    return (
        <div className="home h-svh bg-emerald-400 flex flex-col justify-center items-center text-white z-10">
            <h1 className="font-bold mb-6">ABOUT COMPONENT</h1>
            <div className="flex mb-10 items-center justify-center"><div className="line me-3 w-20 h-1" style={{backgroundColor: 'white'}} /><FontAwesomeIcon icon={faStar} /><div className="line ms-3 w-20 h-1" style={{backgroundColor: 'white'}} /></div>
            <div className="flex gap-5 justify-center items-center">
                <div className="w-1/3 text-start "><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                <div className="w-1/3 text-start "><p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
            </div>
        </div>
    )
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faEarth} from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    return <>
    <footer className="footer bg-gray-800 text-white p-20">
        <div className="flex items-start">
            <div className="w-full md:w-4/12 mb-6 md:mb-0 flex flex-col">
            <h3 className="mb-5 text-2xl">Location</h3>
            <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>

            <div className="w-full md:w-4/12 mb-6 md:mb-0 flex flex-col">
            <h3 className="mb-5 text-2xl">AROUND THE WEB</h3>
            
            <div  className="icons flex justify-center items-center gap-3">
                <div className="circle flex justify-center items-center w-10 h-10 rounded-full  border-2 border-white"><FontAwesomeIcon className='mx-3 ' icon = {faFacebookF}/></div>
                <div className="circle flex justify-center items-center w-10 h-10 rounded-full  border-2 border-white"><FontAwesomeIcon className='mx-3 ' icon = {faTwitter}/></div>
                <div className="circle flex justify-center items-center w-10 h-10 rounded-full  border-2 border-white"><FontAwesomeIcon className='mx-3 ' icon = {faLinkedin}/></div>
                <div className="circle flex justify-center items-center w-10 h-10 rounded-full  border-2 border-white"><FontAwesomeIcon className='mx-3 ' icon = {faEarth}/></div>
            </div>

            </div>

            <div className="w-full md:w-4/12 mb-6 md:mb-0 flex flex-col">
            <h3 className="mb-5 text-2xl">ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>   
    </footer>
    <div className="p-10 bg-gray-900 text-white">
            <p>Copyright © Your Website 2021</p>
        </div>
    </>
}
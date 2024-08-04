import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {useFormik } from "formik"

export default function Contact(){
    // const formik = useFormik({
    //     initialValues: {
    //         name: "",
    //         age:"",
    //         email: '',
    //         password:""
    //     },
    // })
        
    return <>

    <div className="container contact h-svh">
        <h1 className="font-bold text-5xl pt-7 mb-6">Contact Section</h1>
        <div className="flex mb-10 items-center justify-center"><div className="line me-3 w-20 h-1 bg-gray-800"/><FontAwesomeIcon icon={faStar} /><div className="line ms-3 w-20 h-1 bg-gray-800"  /></div>
    
        <form className="contact mt-20 w-1/2 m-auto flex flex-col justify-center items-start gap-5">
           <div className="name flex flex-col relative w-full">
           <label htmlFor="name" className="text-emerald-600 absolute start-0 top-2 -z-10">User Name :</label>
           <input id="name" className="w-full rounded border-0 border-b-2 border-b-gray-500 shadow" type="text" name="name" placeholder="User Name"/>
           </div>
            <input className="w-full rounded border-0 border-b-2 border-b-gray-500 shadow" type="text" name="name" placeholder="User Age"/>
            <input className="w-full rounded border-0 border-b-2 border-b-gray-500 shadow" type="text" name="name" placeholder="User Email"/>
            <input className="w-full rounded border-0 border-b-2 border-b-gray-500 shadow" type="text" name="name" placeholder="User Password"/>

            <button className="bg-emerald-500 text-white px-5 py-2 rounded mt-7">Send Message</button>
        </form>
    
    </div>
     
    </>
}
import React from "react";
import logo from './../images/Mylogo.jpg'
import {MdEmail} from "react-icons/md"
import {RiWhatsappFill} from "react-icons/ri"
import {AiOutlineCopyright} from "react-icons/ai"
const Footer = () => {
    return(
        <div className=" bg-[#594545] items-center
        shadow-lg
         flex justify-around pt-4 italic pb-2 font-light text-[#fff8ea] h-[200px]">
            
            <div> 
              <h1>Designed by Webmyn</h1>
              <h1 className="flex items-center gap-x-1"><span>Copyright 2022</span><AiOutlineCopyright/></h1>
               <h1 className="pt-2 flex items-center gap-x-1"> <span><MdEmail/></span>Bellomuhyideen0001@gmail.com</h1>
               <h1 className="pt-1 flex  items-center gap-x-1"> <span><RiWhatsappFill/></span>08139116879</h1>
               <h1 className="pt-1 flex  items-center gap-x-1"> <span><RiWhatsappFill/></span>08033269810</h1> 
            </div>   
            
            <div>
                <img src={logo} alt="logo" className="h-[70px] w-[70px] rounded-br-2xl rounded-tl-2xl rounded-bl-lg rounded-tr-lg" />
             </div> 

        </div>
    )
}

export default Footer
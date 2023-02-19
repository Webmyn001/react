import React from "react";
import Footer from "./Footer";
import {MdEmail} from "react-icons/md"
import {RiWhatsappFill} from "react-icons/ri"
import Back from "./Back";
function About () {
  return(
  <div className="shadow-lg bg-gradient-to-tr from-[#815b5b] to-[#9e7676]">
    <div className="p-4  pt-[100px] h-[1000px] flex flex-col items-center justify-center">
        <div className="border-2 rounded-lg md:w-[600px]  border-[#594545] text-xl font-light
         text-[#fff8ea] p-5">
          <h1 className="text-2xl underline text-[#fff8ea] font-bold border-[#594545] pb-3 text-center">About</h1>
          <p> 
            I am Bello Muhyideen , A Front-End Developer and also a student of Obafemi  Awolowo University, 
             I enjoy developing modern Websites and Applications, I have 3 years of experience working with Javascript and React.js.
          </p>
          <p className="pt-4 text-align"> I noticed majority of students especially freshers in Tertiary Institutions find it difficult and stressful
             to compute their Grade point average (G.P.A) after each semester, I tried to ease and solve the problem
             by developing this Calculator with the basic knowledge 
             I have as a Front-End Developer using React.js.
             
          </p>
          <p className="pt-1 text-center italic ">I hope you will find the calculator usefull and friendly.</p>    


        </div>
        
        <div className="font-semibold pt-5 text-[#fff8ea] ">
          <h1 className="text-align px-2 italic font-bold text-xl">For more information or suggestions you can contact </h1>
          <p className=" px-2 pt-2 flex items-center gap-x-1 "> <span><MdEmail/></span>Bellomuhyideen0001@gmail.com</p>
          <p className=" px-2 flex items-center gap-x-1 "> <span><RiWhatsappFill/></span>08139116879</p>
          <p className=" px-2 flex items-center gap-x-1 "> <span><RiWhatsappFill/></span>08033269810</p>
        </div>
       
</div>
      <Back/>
      {/* footer */}
      <Footer/>
</div>
  )
}

 export default About
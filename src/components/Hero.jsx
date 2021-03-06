import react, { Fragment } from 'react';
import office1 from './../Assets/office1.jpg';
import office2 from './../Assets/office2.jpg';
import office3 from './../Assets/office3.jpg';
import office4 from './../Assets/office4.jpg';





 
const Hero=(Hero)=>{
    return(
        <Fragment>
        <div className="flex flex-row">
        <div className="flex flex-col justify-center  w-screen md:w-1/2 items-center border-2 p-5 border-gray-200">
      <div className="relative w-full">
                <img src={office1} className=""/>
                <span>LOREM</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, cumque id provident dolore voluptates saepe nihil reprehenderit asperiores ipsam, porro beatae inventore repudiandae nostrum ipsa eligendi. Repellat sit quaerat doloremque?</span>
                </div>
                </div>

                <div className="flex flex-col justify-center  w-screen md:w-1/2 items-center border-2 p-5 border-gray-200">
      <div className="relative w-full">
                <img src={office2} className=""/>
                <span>LOREM</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, cumque id provident dolore voluptates saepe nihil reprehenderit asperiores ipsam, porro beatae inventore repudiandae nostrum ipsa eligendi. Repellat sit quaerat doloremque?</span>
                </div>
                </div>  

                <div className="flex flex-col justify-center  w-screen md:w-1/2 items-center border-2 p-5 border-gray-200">
      <div className="relative w-full">
                <img src={office3} className=""/>
                <span>LOREM</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, cumque id provident dolore voluptates saepe nihil reprehenderit asperiores ipsam, porro beatae inventore repudiandae nostrum ipsa eligendi. Repellat sit quaerat doloremque?</span>
                </div>
                </div>  

                <div className="flex flex-col justify-center  w-screen md:w-1/2 items-center border-2 p-5 border-gray-200">
      <div className="relative w-full">
                <img src={office4} className=""/>
                <span>LOREM</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, cumque id provident dolore voluptates saepe nihil reprehenderit asperiores ipsam, porro beatae inventore repudiandae nostrum ipsa eligendi. Repellat sit quaerat doloremque?</span>
                </div>
                </div>  
          </div>
       </Fragment>
    )
    
    }
    
export default Hero;    

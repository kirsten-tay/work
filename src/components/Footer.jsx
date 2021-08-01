import react,{Fragment} from 'react';


const Footer =()=>{
    return(
    <Fragment>
    
        <div className="flex flex-row ..flow-root bg-blue-600 ...">
        <div className="flex flex-col justify-center m-5  items-center ">
            <span>VISIT US IN KENYA</span>
                 <span>Nairobi,Kenya.</span> 
        <span>Belgravia Centre,14 Riverside drive,</span> 
          <span>4th floor, Off Riverside Drive.</span>
           <span>Hanover Centre, 14 Riverside Drive,</span>
           <span> 6th floor, Off Riverside Drive </span>

         </div>
         <div className=" flex flex-col justify-center m-5 items-center">
         <span ></span>
         <span>Accra, Ghana.</span>
          <span>
            One Airport Square,Airport City</span>
        <span>  8th floor..
         </span>
         </div>
         <div className="flex flex-col justify-center m-5  items-center">
         <span >VISIT US IN NIGERIA</span>
          <span> Lagos,Nigeria.</span>

         <span> Sterling Bank Building.</span>
         </div>
        </div>
 </Fragment>
    )
}


export default Footer;
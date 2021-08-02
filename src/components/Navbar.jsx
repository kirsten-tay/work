import react from 'react';
import logo from './../Assets/logo.jpg'


const Navbar=() => {
    return (
     
          <div className=" flex flex-row flex justify-between items-center bg-transparent-600 px-10 border-b border-gray-200">
            <div className="flex flex-1 justify-start">
              <img src={logo} className="h-10 w-10" />
                          <div className="flex text-2xl py-5"><span></span></div>
            </div>

            <div className="flex flex-1 items-center justify-end ">
            <nav className="space-x-10 flex">
              <a >ABOUT US</a>
              
            </nav>
            
          </div>
        </div>
   

          

    )


}

export default Navbar;

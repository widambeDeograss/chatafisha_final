import React from 'react';
import { Text, Img, Button, NewsCarousel } from "components";
import { useNavigate } from 'react-router-dom';


function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate()

  return (
    <nav className="mt-3 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8  ">
    <div className="relative flex items-center justify-between h-16 ml-[10%]">
            <div className="flex-1 flex items-center justify-start ml-auto sm:items-stretch sm:justify-start">
                <Text
                    className="font-bold md:ml-[0] md:mt-0 mt-2.5 text-black_900 text-left w-auto"
                    as="h4"
                    variant="h4"
                >
                    CHATAFISHA
                </Text>
                <Img
                    src="images/img_mainlogo_black_901.svg"
                    className="h-8 md:ml-[13px] ml-[15px] md:mt-0 mt-[5px] w-auto "
                    alt="mainlogo"
                />
            </div>
            <div className="absolute inset-y-0 right-5 flex items-center mt-2 sm:block hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
   
        <div className={`flex flex-grow sm:${isOpen ? 'block' : 'hidden'}  lg:ml-[40%] md:ml-[15%]`}>
            <ul className={`flex flex-row list-none sm:absolute sm:left-3 sm:top-16 h-8 w-[100%] sm:ml-[0%]`}>
                <li className="flex items-center">
                    <Text
                        className="font-medium mt-[3px] text-black_900 text-left w-auto transform hover:scale-y-90 transition-transform"
                        variant="body2"
                        onClick={() => navigate("/")}
                    >
                        Home{" "}
                    </Text>
                </li>

                <li className="flex items-center">
                    <Text
                        className="common-pointer font-medium ml-[39px] mt-1 text-black_900 text-left w-auto  transform hover:scale-x-90 transition-transform"
                        variant="body2"
                        onClick={() => navigate("/loginpage")}
                    >
                        Login
                    </Text>
                </li>

                <li className="flex items-center">
                    <Text
                        className="bg-bluegray_100 font-medium h-[22px] ml-[37px] px-[9px] py-[3px] rounded-[11px] text-black_900 text-left text-shadow-ts1 w-[104px]  transform hover:scale-x-90 transition-transform"
                        variant="body2"
                    >
                        connect wallet
                    </Text>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}

export default NavBar
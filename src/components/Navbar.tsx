import {useState} from 'react';
import {FiMenu} from 'react-icons/fi';

export const Navbar = (): JSX.Element =>
{

  const [toggle, setToggle] = useState<boolean>(false);

  const handleMobileMenu = (): void =>
  {
    
  }

  return (
    <>
      <div 
      className="w-full pt-8 px-4"
      >
        <div 
        className="w-full flex justify-between "
        >
          <p 
          className="text-4xl w-[75px] text-left xl:w-[350px] font-bold"
          >
            ISABELLA'S BALLET SCHOOL
          </p>
          <FiMenu 
          className="text-4xl cursor-pointer xl:hidden"
          />
        </div>
        <p 
        className="text-md text-left mt-4"
        >
          Home of the Alborada Spanish Dance Theatre
        </p>
        <hr
        className="bg-black h-[2px]" 
        />
      </div>
      
    </>
  )
}
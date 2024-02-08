import { useState } from "react"
import Gericht from "../assets/gericht.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true)
  return (
    <nav className='flex items-center justify-between  w-full max-w-[105rem] mx-auto  py-[32px] px-8 md:px-16'>
      <Logo />
      <Links setToggleMenu={setToggleMenu} />
      <Buttons />
      <SmallDeviceLinks toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </nav>
  )
}

export default Navbar

function Logo() {
  return (
    <div>
      <img src={Gericht} alt='logo' className='w-[6rem] lg:w-[10rem]' />
    </div>
  )
}

function Links({ setToggleMenu }) {
  return (
    <ul className='hidden lg:flex items-center gap-4'>
      <LinksHref setToggleMenu={setToggleMenu} />
    </ul>
  )
}

function SmallDeviceLinks({ toggleMenu, setToggleMenu }) {
  return (
    <div className='lg:hidden  text-greyColor'>
      {toggleMenu ? (
        <GiHamburgerMenu
          className='cursor-pointer'
          onClick={() => setToggleMenu(false)}
        />
      ) : (
        <ul
          className={
            !toggleMenu &&
            "w-full  h-[100dvh] animate-toggle bg-blackColor flex items-center justify-center flex-col gap-8 absolute top-0 left-0"
          }
        >
          <LinksHref />
          <MdOutlineRestaurantMenu
            className='absolute top-8 right-8 cursor-pointer'
            onClick={() => setToggleMenu(true)}
          />
        </ul>
      )}
    </div>
  )
}

function LinksHref({ setToggleMenu }) {
  return (
    <>
      <li
        className='text-greyColor hover:text-goldenColor transition-all duration-300'
        onClick={() => setToggleMenu(true)}
      >
        <a href='#home'>Home</a>
      </li>
      <li
        className='text-greyColor hover:text-goldenColor transition-all duration-300'
        onClick={() => setToggleMenu(false)}
      >
        <a href='#about'>About</a>
      </li>
      <li className='text-greyColor hover:text-goldenColor transition-all duration-300 '>
        <a href='#menu'>Menu</a>
      </li>
      <li className='text-greyColor hover:text-goldenColor transition-all duration-300 '>
        <a href='#award'>Awards</a>
      </li>
      <li className='text-greyColor  hover:text-goldenColor transition-all duration-300 '>
        <a href='#contact'>Contact</a>
      </li>
    </>
  )
}

function Buttons() {
  return (
    <div className='hidden md:flex items-center gap-3 text-whiteColor font-medium '>
      <button className='hover:text-goldenColor transition-color duration-300'>
        Login / Rigistration
      </button>
      <div className='w-0.5 h-8 bg-greyColor'></div>
      <button className='hover:text-goldenColor transition-color duration-300'>
        Book Table
      </button>
    </div>
  )
}

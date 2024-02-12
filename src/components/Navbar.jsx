import { useState } from "react"
import Gericht from "../assets/gericht.png"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(true)
  return (
    <nav className='flex items-center justify-between  w-full   py-[32px] px-8 md:px-16'>
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
            "w-full  h-[100dvh] animate-toggle  bg-blackColor flex items-center justify-center flex-col gap-8 fixed inset-0 z-[10000]"
          }
        >
          <LinksHref SetToggleMenu={setToggleMenu} />
          <MdOutlineRestaurantMenu
            className='absolute top-8 right-8 cursor-pointer'
            onClick={() => setToggleMenu(true)}
          />
        </ul>
      )}
    </div>
  )
}

function LinksHref({ SetToggleMenu }) {
  return (
    <>
      <li className='text-greyColor hover:text-goldenColor transition-all duration-300'>
        <a href='#home' onClick={() => SetToggleMenu(true)}>
          Home
        </a>
      </li>
      <li className='text-greyColor hover:text-goldenColor transition-all duration-300'>
        <a href='#about' onClick={() => SetToggleMenu(true)}>
          About
        </a>
      </li>
      <li className='text-greyColor hover:text-goldenColor transition-all duration-300 '>
        <a href='#menu' onClick={() => SetToggleMenu(true)}>
          Menu
        </a>
      </li>
      <li className='text-greyColor hover:text-goldenColor transition-all duration-300 '>
        <a href='#award' onClick={() => SetToggleMenu(true)}>
          Awards
        </a>
      </li>
      <li className='text-greyColor  hover:text-goldenColor transition-all duration-300 '>
        <a href='#contact' onClick={() => SetToggleMenu(true)}>
          Contact
        </a>
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

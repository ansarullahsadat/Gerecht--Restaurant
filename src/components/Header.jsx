import spoon from "../assets/spoon.png"
import headerImage from "../assets/welcome.png"

const Header = () => {
  return (
    <header
      className='grid md:grid-cols-2 gap-12 items-center container mx-auto bg-blackColor  pt-12 pb-24 px-8 md:px-16'
      id='home'
    >
      <HeaderInfo />
      <HeaderImage />
    </header>
  )
}

export default Header

function HeaderInfo() {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-whiteColor font-[cormorant]'>Chase the new Flavour</p>
      <img src={spoon} alt='spoon' className='w-8 object-cover' />
      <h1 className='text-5xl lg:text-7xl text-goldenColor leading-[4rem] lg:leading-[6rem] font-cormorant'>
        The Key To Fine Dining
      </h1>

      <p className='text-sm leading-relaxed mt-6'>
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus.
      </p>

      <button className='py-2 px-3 rounded-md font-medium bg-goldenColor text-blackColor w-44 mt-4 shadow-xl hover:shadow-goldenColor/30 hover:scale-95 transition-all duration-300'>
        Expolore More
      </button>
    </div>
  )
}

function HeaderImage() {
  return (
    <div>
      <img src={headerImage} alt='welcome' className='w-full h-full' />
    </div>
  )
}

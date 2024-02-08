import spoon from "../assets/spoon.png"
import gallery1 from "../assets/gallery01.png"
import gallery2 from "../assets/gallery02.png"
import gallery3 from "../assets/gallery03.png"
import gallery4 from "../assets/gallery04.png"
import { FiInstagram } from "react-icons/fi"

// test
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

function Gallery() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 2000, min: 1700 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 1000 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1000, min: 100 },
      items: 1,
    },
  }
  return (
    <section className='grid   container  md:grid-cols-2 lg:grid-cols-3 items-center bg-blackColor py-24 px-8 md:px-16 md:mx-auto gap-8'>
      <GalleryInfo />
      <GalleryImg Responsive={responsive} />
    </section>
  )
}

export default Gallery

function GalleryInfo() {
  return (
    <div className='flex flex-col gap-2 '>
      <p className='text-whiteColor font-cormorant '>Chase the new Flavour</p>
      <img src={spoon} alt='spoon' className='w-8 object-cover' />
      <h2 className='text-5xl  text-goldenColor font-cormorant  mt-2'>
        Photo Gallery
      </h2>

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

function GalleryImg({ Responsive }) {
  return (
    <div className='lg:col-span-2  relative h-[447px] overflow-x-scroll '>
      <Carousel responsive={Responsive}>
        <div className='w-full md:w-[290px] h-[447px] relative cursor-pointer group'>
          <img
            src={gallery1}
            alt='gallery'
            className='w-full h-full object-cover mr-2 '
          />
          <div className='w-full h-full bg-blackColor/20 absolute inset-0 flex items-center justify-center text-4xl scale-0 group-hover:scale-100 transition-all duration-300 '>
            <FiInstagram color='#fff' />
          </div>
        </div>
        <div className='w-full md:w-[290px] h-[447px] relative group'>
          <img
            src={gallery2}
            alt='gallery'
            className=' w-full h-full object-cover mr-2 '
          />
          <div className='w-full h-full bg-blackColor/20 absolute inset-0 flex items-center justify-center text-4xl scale-0 group-hover:scale-100 transition-all duration-300 '>
            <FiInstagram color='#fff' />
          </div>
        </div>
        <div className='w-full md:w-[290px] h-[447px] relative group'>
          <img
            src={gallery3}
            alt='gallery'
            className='w-full h-full object-cover mr-2 '
          />
          <div className='w-full h-full bg-blackColor/20 absolute inset-0 flex items-center justify-center text-4xl scale-0 group-hover:scale-100 transition-all duration-300 '>
            <FiInstagram color='#fff' />
          </div>
        </div>
        <div className='w-full md:w-[290px] h-[447px] relative cursor-pointer group'>
          <img
            src={gallery1}
            alt='gallery'
            className='w-full h-full object-cover mr-2 '
          />
          <div className='w-full h-full bg-blackColor/20 absolute inset-0 flex items-center justify-center text-4xl scale-0 group-hover:scale-100 transition-all duration-300 '>
            <FiInstagram color='#fff' />
          </div>
        </div>
        <div className='w-full md:w-[290px] h-[447px] relative group'>
          <img
            src={gallery4}
            alt='gallery'
            className='w-full h-full object-cover mr-2 '
          />

          <div className='w-full h-full bg-blackColor/20 absolute inset-0 flex items-center justify-center text-4xl scale-0 group-hover:scale-100 transition-all duration-300 '>
            <FiInstagram color='#fff' />
          </div>
        </div>
      </Carousel>
    </div>
  )
}

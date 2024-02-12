import bgAbout from "../assets/bg.png"
import gImage from "../assets/G.png"
import spoon from "../assets/spoon.png"
import knife from "../assets/knife.png"

const About = () => {
  return (
    <section className='bg-blackColor py-24  sm:px-16 px-8' id='about'>
      <Backgrounds />
    </section>
  )
}

export default About

function Backgrounds() {
  return (
    <div className='w-full h-full relative flex items-center justify-center'>
      <KnifeBg />
      <AboutInfo />
    </div>
  )
}

function KnifeBg() {
  return (
    <>
      <img src={gImage} alt='g' className='absolute  w-[16rem] h-[16rem]' />
      <img src={knife} alt='knife' className='absolute w-[3rem]' />
    </>
  )
}

function AboutInfo() {
  return (
    <div className='grid md:grid-cols-2 z-10 px-8 gap-[30rem] md:gap-56'>
      <div className='flex flex-col gap-2   mx-auto md:mx-0 md:items-end md:ml-auto'>
        <h2 className='text-5xl  text-goldenColor leading-[4rem] lg:leading-[6rem] font-cormorant'>
          About Us
        </h2>
        <img src={spoon} alt='spoon' className='w-8 object-cover' />
        <p className='md:text-end'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere <br /> tristique. In sed odio
          nec aliquet eu proin mauris et.
        </p>
        <button className='py-2 px-3 rounded-md font-medium bg-goldenColor text-blackColor w-44 mt-4 shadow-xl hover:shadow-goldenColor/30 hover:scale-95 transition-all duration-300'>
          Expolore More
        </button>
      </div>

      <div className='flex flex-col gap-2  md:mx-0'>
        <h2 className='text-5xl  text-goldenColor leading-[4rem] lg:leading-[6rem] font-cormorant'>
          Our History
        </h2>
        <img src={spoon} alt='spoon' className='w-8 object-cover' />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere <br /> tristique. In sed odio
          nec aliquet eu proin mauris et.
        </p>
        <button className='py-2 px-3 rounded-md font-medium bg-goldenColor text-blackColor w-44 mt-4 shadow-xl hover:shadow-goldenColor/30 hover:scale-95 transition-all duration-300'>
          Expolore More
        </button>
      </div>
    </div>
  )
}

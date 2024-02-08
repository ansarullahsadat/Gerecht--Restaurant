import spoon from "../assets/spoon.png"
import findus from "../assets/findus.png"

const Cta = () => {
  return (
    <section
      className='py-24 px-8 container mx-auto bg-blackColor sm:px-16 grid gap-8 md:grid-cols-2 items-center'
      id='contact'
    >
      <CtaInf />
      <CtaImg />
    </section>
  )
}

export default Cta

function CtaInf() {
  return (
    <div>
      <p className='font-cormorant'>Contact</p>
      <img src={spoon} alt='spoon' className='w-8 object-cover' />
      <h2 className='text-5xl mb-6  text-goldenColor leading-[4rem] lg:leading-[6rem] font-cormorant'>
        Find Us
      </h2>

      <p className='text-sm leading-relaxed'>
        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
      </p>

      <div className='flex flex-col gap-2'>
        <h4 className='text-goldenColor text-lg mt-6 mb-2 font-cormorant'>
          Opening Hours
        </h4>
        <span>Mon - Fri: 10:00 am - 02:00 am</span>
        <span>Sat - Sun: 10:00 am - 03:00 am</span>
        <button className='py-2 px-3 rounded-md font-medium bg-goldenColor text-blackColor w-32 mt-4 shadow-xl hover:shadow-goldenColor/30 hover:scale-95 transition-all duration-300'>
          Visit Us
        </button>
      </div>
    </div>
  )
}

function CtaImg() {
  return (
    <div>
      <img src={findus} alt='chef' className='lg:h-[40rem]' />
    </div>
  )
}

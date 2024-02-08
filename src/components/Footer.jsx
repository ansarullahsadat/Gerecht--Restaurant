import FooterBg from "../assets/bg.png"
import spoon from "../assets/spoon.png"
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

const Footer = () => {
  return (
    <footer>
      <FooterContainer />
    </footer>
  )
}

export default Footer

function FooterContainer() {
  return (
    <div className='relative w-full h-full pb-16  md:pb-24  px-8 md:px-16 '>
      <Background />
      <Subscribe />

      <div className='flex flex-wrap md:flex-nowrap  items-center justify-between gap-12 z-10 text-center container mx-auto'>
        <div className='flex flex-col items-center justify-center  w-full md:w-fit gap-4 text-sm lg:text-base'>
          <h3 className='text-lg font-medium'>Contact Us</h3>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <span>+1 212-344-1230 </span>
          <span>+1 212-555-1230</span>
        </div>

        <div className='flex flex-col items-center gap-4 w-full md:w-fit text-sm lg:text-base'>
          <h3 className='text-5xl font-medium text-goldenColor mb-2 font-cormorant'>
            Gerícht
          </h3>
          <p>
            The best way to find yourself is to lose yourself in the <br />
            service of others.”
          </p>
          <img src={spoon} alt='spoon' className='w-8 object-cover' />
          <div className='flex items-center gap-2 text-lg'>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className='flex flex-col items-center gap-4 w-full md:w-fit text-sm lg:text-base'>
          <h3 className='text-lg font-medium'>Contact Us</h3>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <span>+1 212-344-1230 </span>
          <span>+1 212-555-1230</span>
        </div>
      </div>

      <p className='text-center mt-16 text-sm text-greyColor'>
        2021 Gerícht. All Rights reserved.
      </p>
    </div>
  )
}

function Background() {
  return (
    <div className='absolute inset-0 -z-10 '>
      <img src={FooterBg} alt='awrdbg' className='w-full h-full' />
    </div>
  )
}

function Subscribe() {
  return (
    <div className='flex flex-col container mx-auto items-center py-12 px-4 gap-4 mb-32 bg-lightDark'>
      <p className='font-cormorant'>Newsletter</p>
      <img src={spoon} alt='spoon' className='w-8 object-cover' />
      <h2 className='text-5xl text-center  text-goldenColor font-cormorant '>
        Subscribe to Our Newsletter
      </h2>

      <p className='text-sm leading-relaxed mt-6'>
        And never miss latest Updates!
      </p>

      <div className='flex flex-col md:flex-row items-center gap-4 max-w-[635px] w-full mx-auto mt-6'>
        <input
          type='email'
          id='email'
          className='border border-greyColor bg-blackColor  w-full h-[44px] p-3 outline-none focus:border-goldenColor text-sm'
          placeholder='Email Address'
        />

        <button className='py-2 px-3 rounded-md font-medium bg-goldenColor text-blackColor  shadow-xl hover:shadow-goldenColor/30 hover:scale-95 transition-all duration-300 w-[120px] h-[44px]'>
          Subscribe
        </button>
      </div>
    </div>
  )
}

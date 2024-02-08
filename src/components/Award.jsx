import awardBg from "../assets/bg.png"
import logo from "../assets/logo.png"
import spoon from "../assets/spoon.png"
import laurels from "../assets/laurels.png"
import award1 from "../assets/award01.png"
import award2 from "../assets/award02.png"
import award3 from "../assets/award03.png"
import award5 from "../assets/award05.png"

const Award = () => {
  return (
    <section id='award'>
      <AwardContainer />
    </section>
  )
}

export default Award

function AwardContainer() {
  return (
    <div className='relative  py-32 md:py-24  px-8 md:px-16 '>
      <Background />
      <AwardGridContainer />
    </div>
  )
}

function AwardGridContainer() {
  return (
    <div className='grid md:grid-cols-2 gap-12 items-center container mx-auto z-10 '>
      <div>
        <p className='mb-2 font-cormorant'>Awards & recognition</p>
        <img src={spoon} alt='spoon' className='w-8 object-cover' />
        <h2 className='text-5xl  text-goldenColor leading-[4rem] lg:leading-[6rem] mb-12 font-cormorant'>
          Our Laurels
        </h2>

        <div className='flex flex-wrap gap-6'>
          <AwardContainerSmallComponent url={award2} title='Bib Gourmond' />
          <AwardContainerSmallComponent url={award1} title='Rising Star' />
          <AwardContainerSmallComponent url={award5} title='AA Hospitality ' />
          <AwardContainerSmallComponent url={award3} title='Outstanding Chef' />
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <img src={laurels} alt='laurels' className='lg:h-[40rem]' />
      </div>
    </div>
  )
}

function Background() {
  return (
    <div className='absolute inset-0 -z-10 '>
      <img src={awardBg} alt='awrdbg' className='w-full h-full' />
      <img
        src={logo}
        alt='logo'
        className='absolute top-6 left-6 w-12 lg:w-20'
      />
    </div>
  )
}

function AwardContainerSmallComponent({ url, title }) {
  return (
    <div className='flex items-center gap-6'>
      <div>
        <img src={url} alt='award' className='w-[70px]' />
      </div>

      <div className='flex flex-col gap-2'>
        <h4 className='text-goldenColor font-medium font-cormorant'>{title}</h4>
        <p className='text-greyColor'>
          Lorem ipsum dolor sit <br /> amet, consectetur.
        </p>
      </div>
    </div>
  )
}

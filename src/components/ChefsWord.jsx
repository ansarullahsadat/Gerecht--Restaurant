import chef from "../assets/chef.png"
import spoon from "../assets/spoon.png"
import quote from "../assets/quote.png"
import sign from "../assets/sign.png"

const ChefsWord = () => {
  return (
    <section className='py-24 px-8  sm:px-16 grid gap-8 md:grid-cols-2 items-center '>
      <ChefImage />
      <ChefInfo />
    </section>
  )
}

export default ChefsWord

function ChefImage() {
  return (
    <div>
      <img src={chef} alt='chef' className='lg:h-[40rem]' />
    </div>
  )
}

function ChefInfo() {
  return (
    <div>
      <p className='text-sm font-cormorant '>Chef’s Word</p>
      <img src={spoon} alt='spoon' className='w-8 object-cover' />
      <h2 className='text-5xl mb-6  text-goldenColor leading-[4rem] lg:leading-[6rem] font-cormorant'>
        What we believe in
      </h2>

      <div className='flex items-start gap-2'>
        <img src={quote} alt='qoute' className='w-6' />
        <p className='text-xs leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
          similique ut vero eius minima, perspiciatis aspernatur iusto iste
          modi, nobis assumenda perferendis praesentium iure voluptate quo quod,
          atque enim laudantium.
        </p>
      </div>

      <h4 className='text-goldenColor text-lg mt-12 mb-2 font-cormorant'>
        Kevin Luo
      </h4>
      <span>Chef & Founder</span>
      <img src={sign} alt='chef sign' className='w-44 my-5' />
    </div>
  )
}

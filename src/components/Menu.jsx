import spoon from "../assets/spoon.png"
import menu from "../assets/menu.png"

const Menu = () => {
  return (
    <section className='py-24 px-8 sm:px-16  ' id='menu'>
      <MenuTitle />
      <MenuContainer />
    </section>
  )
}

export default Menu

function MenuTitle() {
  return (
    <div className='flex flex-col items-center justify-center mb-12'>
      <p className='text-whiteColor text-sm mb-2 font-cormorant'>
        Menu that fits you palatte
      </p>
      <img src={spoon} alt='spoon' className='w-8 object-cover' />
      <h2 className='text-5xl text-center  text-goldenColor leading-[4rem] lg:leading-[6rem] font-cormorant'>
        Today’s Special
      </h2>
    </div>
  )
}

function MenuContainer() {
  return (
    <div className='flex items-center flex-col lg:flex-row gap-12 lg:gap-2 justify-between'>
      <MenuComponentLeft />
      <MenuImage />
      <MenuComponentRight />
    </div>
  )
}

function MenuComponentLeft() {
  return (
    <div className='flex flex-col items-center gap-12 '>
      <MenuContainertitle title='Wine & Beer' />
      <div className='flex flex-col  gap-6'>
        <MenuContainerinfo
          title='Chapel Hill Shiraz'
          size='AU | Bottle'
          prise='$56'
        />
        <MenuContainerinfo
          title='Catena Malbec'
          size='AR | Bottle'
          prise='$59'
        />
        <MenuContainerinfo
          title='La Vieille Rosé'
          size='FR | 750 ml'
          prise='$44'
        />
        <MenuContainerinfo
          title='Rhino Pale Ale'
          size='CA | 750 ml'
          prise='$31'
        />

        <MenuContainerinfo
          title='Irish Guinness'
          size='IE | 750 ml'
          prise='$26'
        />
      </div>
    </div>
  )
}

function MenuImage() {
  return (
    <div className='flex items-center justify-center'>
      <img
        src={menu}
        alt='menu'
        className='w-[250px] xl:w-[300px] object-cover'
      />
    </div>
  )
}

function MenuComponentRight() {
  return (
    <div className='flex flex-col items-center gap-12'>
      <MenuContainertitle title='Cocktails' />
      <div className='flex flex-col gap-6 '>
        <MenuContainerinfo
          title='Aperol Spritz'
          size='Aperol | Villa Marchesi prosecco | soda | 30ml'
          prise='$20'
        />
        <MenuContainerinfo
          title="Dark 'N' Stormy"
          size='Dark rum | Ginger beer | Slice of lime. '
          prise='$16'
        />
        <MenuContainerinfo
          title='Daiquiri'
          size='Rum | Citrus juice | Sugar'
          prise='$10'
        />
        <MenuContainerinfo
          title='Old Fashioned'
          size='Bourbon | Brown sugar | Angostura Bitters'
          prise='$31'
        />

        <MenuContainerinfo
          title='Negroni'
          size='Gin | Sweet Vermouth | Campari | Orange garnish'
          prise='$26'
        />
      </div>
    </div>
  )
}

function MenuContainertitle({ title }) {
  return <h3 className='text-3xl text-whiteColor font-cormorant'>{title}</h3>
}

function MenuContainerinfo({ title, size, prise }) {
  return (
    <div>
      <div className='flex items-center  justify-between gap-8 lg:gap-16'>
        <div className='flex flex-col '>
          <h4 className='text-goldenColor text-lg font-cormorant'>{title}</h4>
        </div>

        <div className='flex items-center gap-4'>
          <div className='w-20 h-0.5 bg-greyColor' />
          <span className='text-whiteColor font-medium'>{prise}</span>
        </div>
      </div>
      <p className='text-xs text-greyColor mt-2'>{size}</p>
    </div>
  )
}

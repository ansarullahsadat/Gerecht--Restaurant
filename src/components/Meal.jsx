import React, { useState } from "react"
import Mealvi from "../assets/meal.mp4"
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"

function Meal() {
  const [play, setplay] = useState(true)
  const vidRef = React.useRef()

  function doThetrict() {
    setplay((p) => setplay(!p))

    if (!play) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <section className='relative'>
      <video
        className='w-full h-full object-fit'
        src={Mealvi}
        ref={vidRef}
        controls={false}
        type='video/mp4'
        loop
        muted
      ></video>

      <div className='absolute w-full h-full bg-blackColor/30 inset-0 flex items-center justify-center'>
        <div
          className='w-16 h-16 md:w-32 md:h-32 rounded-full border-2 border-goldenColor flex items-center justify-center text-2xl md:text-5xl cursor-pointer hover:scale-95 hover:bg-goldenColor/20 transition-all duration-300'
          onClick={() => doThetrict()}
        >
          {play ? <BsFillPlayFill /> : <BsPauseFill />}
        </div>
      </div>
    </section>
  )
}

export default Meal

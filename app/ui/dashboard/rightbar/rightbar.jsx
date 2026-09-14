import Image from 'next/image'
import React from 'react'
import style from './rightber.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={style.container}>
      
      <div className={style.item}>
        {/* Background container */}
        <div className={style.bgContainer}>
          <Image src="/astronaut.jpg" alt='' fill className={style.bg} />
        </div>

        <div className={style.texts}>
          <span className={style.notification}>🔥 Avilable Now</span>

          <h3 className={style.title}>How to use the new version of the admin dashboard?</h3>

          <span className={style.subTitle}>Take 4 minutes to learn</span>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehanderit eius libero perspiciatis recusandae possimus.
          </p>

          <button className={style.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>


      <div className={style.item}>
        <div className={style.texts}>
          <span className={style.notification}>🔥 Avilable Now</span>

          <h3 className={style.title}>How to use the new version of the admin dashboard?</h3>

          <span className={style.subTitle}>Take 4 minutes to learn</span>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehanderit eius libero perspiciatis recusandae possimus.
          </p>

          <button className={style.button}>
            <MdReadMore/>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar

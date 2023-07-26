import './Blog.css'
import datas from '../../datas/blog-data'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


function Blog() {
  return (
    <section className='blog' id='blog'>
      <h2>BIZNING QILGAN ISHLARIMIZ</h2>
      <Swiper effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {datas.map((data,index) => (
          <SwiperSlide key={index} className='blog-slider'>
            <img src={data.image} alt="foto" />
            <p>{data.date}</p>
            <p>{data.disc}</p>
          </SwiperSlide>
        ))}
        
  
        
      </Swiper>
    </section>
  )
}

export default Blog
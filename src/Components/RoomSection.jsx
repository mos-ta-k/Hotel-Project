import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/room.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import {assets} from '../assets/assets'


const RoomSection = () => {

    

  return (
    <div className='roomSection'>
        <div className="top">
            <div className='headers'>
                <h3 className='sub_header'>Rooms</h3>
                <h1 className='header'>Our Rooms</h1>
            </div>
        <div className='paragraph'>
            <p>Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest. Each room features plush bedding, high-quality linens, and a selection of pillows to ensure a restful night's sleep.</p>
        </div>
        </div>

        <div className="bottom">
            <Swiper
            modules={[ Pagination, Autoplay ]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            >
                <SwiperSlide>
                    <img src={assets.roomImg1} alt="" />
                    <div className="overlay">
                    <h2>Four Seasons Hotels</h2>
                    <div className="info">
                        <span>🏠 35 sqm</span>
                        <span>👤 2 Person</span>
                    </div>
                    <h3>130$</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={assets.roomImg2}alt="slide2" />
                    <div className="overlay">
                    <h2>Four Seasons Hotels</h2>
                    <div className="info">
                        <span>🏠 35 sqm</span>
                        <span> 2 Person</span>
                    </div>
                    <h3 className='price'>130$</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={assets.roomImg3}alt="slide3" />
                    <div className="overlay">
                    <h2>Four Seasons Hotels</h2>
                    <div className="info">
                        <span>🏠 35 sqm</span>
                        <span> 2 Person</span>
                    </div>
                    <h3>130$</h3>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={assets.roomImg4}alt="slide3" />
                    <div className="overlay">
                    <h2>Four Seasons Hotels</h2>
                    <div className="info">
                        <span>🏠 35 sqm</span>
                        <span> 2 Person</span>
                    </div>
                    <h3>130$</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default RoomSection
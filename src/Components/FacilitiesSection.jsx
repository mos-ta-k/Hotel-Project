import { CgGym } from "react-icons/cg";
import { FaHotel, FaSwimmer } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import '../styles/facilities.min.css';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FacilitiesSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);
  

  return (
    <div className='facilitiesSection'>
      <div className="facilities">
        <h3 className="sub-heading">Facilities</h3>
      <h2 className="heading">Hotel Facilities</h2>
      <div className="cards">
        <div data-aos="fade-up" className="card">
          <FaHotel className="icon" size={40}/>
          <h3 >Rooms and Suites</h3>
          <p>Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.</p>
        </div>

        <div className='card' data-aos= "fade-up">
          <IoMdTimer className="icon" size={40} />
          <h3>24 Hour Security</h3>
          <p>On-site security personnel and best surveillance. from standard to luxury suites,Secure storage for valuables.</p>
        </div>

        <div className='card' data-aos="fade-up">
          <CgGym className="icon" size={40}/>
          <h3>Fitness Center</h3>
          <p>Equipped with exercise machines and weights.Offering massages, facials, and other treatments.</p>
        </div>

        <div className="card" data-aos="fade-up">
          <FaSwimmer className="icon" size={40} />
          <h3>Swimming pool</h3>
          <p>Indoor or outdoor pools for leisure or exercise.Offering massages, facials, and other treatments</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default FacilitiesSection
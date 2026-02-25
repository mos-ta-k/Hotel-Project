import { assets } from '../assets/assets'
import '../styles/about.min.css'

const AboutSection = () => {
  return (
    <div className='aboutSection'>  
         <div className="container">
            <div className="images">
              <div className="image">
                <img src={assets.roomImg1} alt="About Us" />
              </div>
              <div className='subImage'>
                <img src={assets.roomImg2} alt="Hotel Room" />
              </div>
            </div>
            <div className="content">
              <h4>About Us</h4>
              <h1>Welcome To Our <br/>Moonlit Hotel & Resort</h1>
              <p>Welcome to Bokinn, where luxury meets comfort in the heart of Canada. Since 1999, we have been dedicated to providing an exceptional stay for our guests, blending modern amenities with timeless elegance. Our beautifully designed rooms and suites offer stunning views and plush accommodations, ensuring a restful retreat whether you're here for business or leisure.</p>

              <button className='button'>Learn More</button>
            </div>
          </div> 
    </div>
  )
}

export default AboutSection
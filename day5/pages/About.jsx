import Navbar2 from "../components/navbar";
import image12  from "../assets/image12.jpg"
// import Comp from './temp';
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const About = () => {
  return (
    <div>
      <header>
        <Navbar2 />
      </header>
      {/* <main> */}
        <div>
          <div >
            <h2 style={{ color: "white", marginLeft: "2em", fontWeight: 800, fontStyle: "italic" }}>
              <img src={"https://e0.pxfuel.com/wallpapers/808/31/desktop-wallpaper-yoga.jpg"}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex:-1,opacity:"90%"}}
              ></img>
              <br></br>
        
            </h2>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="haku" style={{ flexDirection: 'row', display: 'flex', paddingRight: 100, paddingLeft: 50, flexWrap: 'wrap' }}>
          <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
            <div style={{ justifyContent: 'space-between', width: '100%', marginTop: '3em', height: '100%', textAlign: 'center' }}>
              <h2 style={{ color: "black" }}>Our Mission</h2>
              <br></br>
              <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '20px',color:"black" }}>Empowering Your Success Through Extraordinary Events

Our mission is clear: to elevate your brand through meticulously planned and seamlessly executed events. We strive to go beyond expectations, turning your vision into a reality that leaves a lasting impression.</p>
            </div>
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
            <div style={{ justifyContent: 'space-between', width: '100%', marginTop: '3em', height: '100%', textAlign: 'center' }} >
              <h2 style={{ color: "black" }}>Who We Are Shebly</h2>
              <br></br>
              <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '20px',color:"black" }}>
              
Certainly! When crafting an "About Us" page for a corporate event management company, it's essential to convey the company values, mission, expertise, and commitment to delivering exceptional events. Here a sample set of words for an About Us page:

Welcome to [Your Company Name]
At [Your Company Name], we are more than just event organizers  we are architects of unforgettable experiences. With a passion for precision and a flair for creativity, we redefine the landscape of corporate events.

Our Mission
Empowering Your Success Through Extraordinary Events

Our mission is clear: to elevate your brand through meticulously planned and seamlessly executed events. We strive to go beyond expectations, turning your vision into a reality that leaves a lasting impression.

Who We Are
Expertise in Every Detail
Backed by a team of seasoned event professionals, we bring years of collective experience to the table. From concept development to on-site management, we handle every detail with precision and finesse.

Innovation at the Core
In an ever-evolving industry, innovation is our heartbeat. We embrace the latest trends and technologies, ensuring your events are not only current but also ahead of the curve.

Client-Centric Approach
Your success is our success. We take the time to understand your unique goals, tailoring our services to align with your brand identity and business objectives.
              </p>
            </div>
          </div>
          <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
            <div style={{ justifyContent: 'space-between', width: '100%', marginTop: '3em', height: '100%', textAlign: 'center' }} >
              <h2 style={{ color: "black" }}>Why Choose Shelby Company Limited</h2>
              <br></br>
              <p style={{ textAlign: 'justify', fontWeight: 'bolder', fontSize: '20px' }}>
              Unparalleled Excellence
Our track record speaks for itself. We take pride in delivering events that surpass expectations, leaving a lasting impact on attendees and stakeholders alike.

Seamless Execution
From inception to execution, our team seamlessly manages every aspect of your event. We believe in creating stress-free experiences for our clients, allowing them to focus on what matters most – their guests.

Collaborative Partnership
We view our clients as partners on the journey to success. Open communication and collaboration are at the heart of our approach, ensuring a harmonious and productive relationship.
              </p>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div style={{ flexDirection: 'row', display: 'flex', backgroundColor: '#f2f2f2' }}>
          <div style={{ justifyContent: 'space-between', width: '50%', height: 500, }}>
            <img
              style={{ width: '90%', height: '100%' }}
              src={image12}
              alt='HAKUNAMA TATA'
            />
          </div>

          <div style={{ justifyContent: 'space-between', width: '50%', height: '100%', textAlign: 'center', marginRight: 20 }}>

            <h1 style={{ color: 'black', fontSize: 30, textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bolder' }}>VISION FOR THE FUTURE</h1>
            <br></br>
            <p style={{ fontSize: 20, textAlign: 'justify' }}>At Shelby Company Limited, we envision a future where innovation, integrity, and excellence converge to redefine industry standards. Our commitment is to be a global leader, pushing boundaries and unlocking new possibilities. We strive to continuously inspire and empower our team to deliver unparalleled solutions. With a relentless pursuit of quality and a forward-thinking mindset, we aim to shape a future where Shelby Company Limited is synonymous with transformative success. Together, we embark on a journey towards sustainable growth, unwavering integrity, and a legacy of impactful contributions to the world</p>
           
          </div>
        </div>
      <br>
      </br>
      <br></br>
    
  <h1 style={{textAlign:"center"}}>What people say about us</h1><br/><br/>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
    {/* <Comp Image={image12} name="Louis Hamilton" content="From concept to celebration, Time2Vibe exceeded my expectations, creating a personalized and enchanting birthday event."/> */}
    {/* <Comp Image={image12} name="Thomas Shelby" content="Grateful for Time2Vibe's dedication to making my birthday uniquely special  they truly know how to create joyful moments."/> */}
    {/* <Comp Image={image12} name="Peter De Paul" content="Professionalism, creativity, and a genuine love for what they do  Time2Vibe made my birthday a day to remember."/> */}
  </div>
<br></br>
<br></br>
<br></br>
        
<footer>
        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            {/* <li><a href="/about">About Us</a></li> */}
            <li><a href="/about">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contacts">Contact</a></li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3>Get in Touch</h3>
          <p>Follow us on social media for updates and more!</p>
          <div style={{display:'flex'}}>
          <a href="" style={{marginLeft:"5%"}}>< FaTwitter style={{fontSize:'30px'}}/></a><br></br>
          <a href="" style={{marginLeft:"5%"}}><FaInstagramSquare style={{fontSize:'30px'}} /></a><br></br>
          <a href="" style={{marginLeft:"5%"}}><FaFacebook style={{fontSize:'30px'}} /></a><br></br>
          <a href="" style={{marginLeft:"5%"}}><IoLogoWhatsapp style={{fontSize:'30px'}}/></a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div>
          <p>&copy; 2024 Time2Vibe. All rights reserved.</p>
        </div>
      </footer>
      {/* </main> */}
    </div>
  );
};

export default About;
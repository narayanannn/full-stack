import CustomNavBar from "../components/CustomNavBar";
import Footer from "../components/Footer/Footer";
// import CustomSideNav from "../components/CustomSideNav";
import { animated, useSpring } from 'react-spring';
import { Carousel } from "rsuite";
import Card5 from "../components/Card5";

function Home(){
  const imageUrl1 = 'https://c0.wallpaperflare.com/preview/685/967/619/healthy-lifestyle-meditating-nature.jpg';
  const imageUrl2 = 'https://c4.wallpaperflare.com/wallpaper/284/444/982/girl-pose-meditation-yoga-hd-wallpaper-preview.jpg';
  const imageUrl3 = 'https://c4.wallpaperflare.com/wallpaper/804/257/228/girl-pose-gymnastics-yoga-wallpaper-preview.jpg';

    const fadeInAnimation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 }, // Adjust duration as needed
      });
    

    return(
        <div >
            <header >
                <CustomNavBar/>
                <br></br>
            </header>
            <main>
            <div>
            <Carousel style={{height:"600px",borderRadius:"25px"}} autoplay  className="custom-slider">
            <img src={imageUrl1} alt="My Image" />
            <img src={imageUrl2} alt="My Image" />
            <img src={imageUrl3} alt="My Image" />
    {/* <img src={Image2}  />
    <img src={Image3}  /> */}
  </Carousel>
            </div>
              <div>
                <div style={{flexDirection:'row',display:'flex'}}>

                  <div style={{justifyContent: 'space-between',width: '50%',marginTop: '3em',height: '100%',textAlign:'center'}}>

                    <h1 style={{color:'blue',fontSize:30,textAlign:'center',textTransform:'uppercase'}}>MAKE YOGA SPECIAL!</h1>
                    <br></br>
                    <p style={{fontSize:20,textAlign:'justify',marginLeft:60}}><b>MAKE YOGA </b> is a professional yoga teaching center – NCR offering complete event planning services for a birthday. Our team of professionals will analyze your requirements and provide best yoga methods to suit your needs and budget. Either your birthday party budget is small or big, we handle all kinds of party works for all budgets. Let us handle the yoga and you just enjoy your memorable moments, make your guests surprise by your best yoga methods in the town. We have made many parents happy with our yoga methods.</p>
                    {/* <p style={{fontSize:20,textAlign:'justify',marginLeft:60}}>We have a privilege of organizing birthday parties of celebrity kids and prominent businessman of India.</p> */}

                  </div>
                  <div style={{justifyContent: 'space-between',width: '40%',marginTop: '3em',marginLeft:'5em',height: '100%',}}>
                 <img
                  style={{ width: '100%', height: '50%' }}
                  src='https://c1.wallpaperflare.com/preview/984/419/754/meditation-view-sunrise-sky.jpg'
                  alt='Car and coins'
                />
                </div>
                </div>
                <br></br>
                <div style={{flexDirection:'row',display:'flex',backgroundColor:"#dedede"}}>
                  <animated.div style={fadeInAnimation}>
                    <h1 style={{marginLeft:'3em',fontFamily:'Kaushan Script',textTransform: 'capitalize',fontWeight:'bolder'}}>Plan  A YOGA EVERYDAY!</h1>
                  </animated.div >
                  <animated.div style={fadeInAnimation}>
                    <h1 style={{marginLeft:'8em',fontFamily:'Kaushan Script',textTransform: 'capitalize',fontWeight:'bolder'}}>Stress-Free!</h1>
                    </animated.div>
                </div>
                </div>
                <br></br>
                <br></br>
                <h1 style={{textAlign:'center',color:'black'}}>WHY MAKE MY EVENT</h1>

                <br></br>
                <br></br>

                <div style={{ flexDirection: 'row', display: 'flex',marginLeft:30 }}>
          <div style={{ marginLeft: 50 }}>
            <Card5  name='APPROACH' content='We take an inclusive approach to helping our clients succeed, we work with clients over cumulative ideas and will shape thoughts into the unforgettable plan and event. Providing effective and creative designs and solid executions of events.' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card5 name='QUALITY' content='We are focused on addressing our clients needs & necessities and devoted to ceaselessly enhancing the viability of our nature of Events. We are proactive, dependable accomplices with our clients, their fulfilment is imperative to our prosperity.' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card5 name='EXCELLENCE' content='We are focused on addressing our clients needs & necessities and devoted to ceaselessly enhancing the viability of our nature of Events. We are proactive, dependable accomplices with our clients, their fulfilment is imperative to our prosperity.' />
          </div>
          <div style={{ marginLeft: 50 }}>
            <Card5 name='COST-EFFECTIVE' content='Your money is important to you as well as for us. We ensure cost-effective service, accountability and flexibility. Most of all, we treat your event like it is ours. Whatever your budget, we have solutions you will not find elsewhere.' />
          </div>
        </div>


            </main>
            <br></br>
            <br></br>
            <br></br>
            <footer>
              <Footer/>
            </footer>
        </div>
    )
}
export default Home;
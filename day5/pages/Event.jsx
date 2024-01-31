import Navbar2 from "../components/navbar";
import { Carousel } from 'rsuite';
import { Panel } from 'rsuite';
 import Footer from "./footer"

const Event = () => {
  return ( 
    <>
    
    <div className="homepage">
      <Navbar2></Navbar2>
      
      <div style={{display:'flex',height: "700px"}}>
        <img
          src="https://media1.popsugar-assets.com/files/thumbor/Eas0K3TmCbsMa0IdQdjhiOTbEy4=/1x496:5000x3120/fit-in/5000x3333/top/filters:format_auto():quality(85):upscale()/2023/01/11/872/n/1922729/7d7dcc8963bf148fa66541.00739793_.jpg"
         
          style={{ margin: "20px" ,marginLeft:'20px',width:'100%'}}
        />
  
      </div>
      
        
        
       
         <h1>UPCOMING EVENT</h1>
         

      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300, marginTop: '30px', marginLeft: '30px' }}>
          <img src="https://img.freepik.com/premium-photo/wallpapers-meditation-clolorful-illustrations-yoga-4k-high-quality_727523-1717.jpg" height="240" alt="Porsche Car Launching Event" />
          <Panel header="Porsche Car Launching Event">
            <p>
              <small>
                Innovation that moves. Design that captivates. Welcome to the future of driving excellence with the all-new Porsche [Model].
              </small>
            </p>
          </Panel>
        </Panel>

        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300, marginTop: '30px', marginLeft: '30px' }}>
          <img src="data:image/jpeg;base64,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" height="240" alt="Christmas Celebrations" />
          <Panel header="Christmas Celebrations">
            <p>
              <small>
                Christmas is a day of meaning and traditions, a special day spent in the warm circle of family and friends - Margaret Thatcher
              </small>
            </p>
          </Panel>
        </Panel>

        <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300, marginTop: '30px', marginLeft: '30px' }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHyaacr74QMGcAAfO4Q6b_junn-mkzup_jmGvA0QH0cggZn6C-QU7l6FIprqbRo60SAE&usqp=CAU" height="240" alt="Sports Event" />
          <Panel header="Sports Event">
            <p>
              <small>
                Victory is in having done your best. If you done your best, you won - Billy Bowerman
              </small>
            </p>
          </Panel>
        </Panel>
      </div>

      <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDWA4uGPS3Q8NfsRlLifA2yl1V7y_rGypTZRMGp29KmSBXxeBHZCHA2CrplpULD0IuOU&usqp=CAU" height="240" />
    <Panel header="New Year">
      <p>
        <small>
        Tomorrow is the first blank page of a 365-page book. Write a good one. - Brad Paisley
        </small>
      </p>
    </Panel>
  </Panel>

  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaAlNb1PhHwPgGfu93wolD4VZ3KyU0YRwCA&usqp=CAU" height="240" />
    <Panel header="Shelby Company Success Meet">
      <p>
        <small>
        As the smoke clears, the echoes of victory resonate through the halls of Shelby Company Limited. Our success is a symphony, composed with the notes of resilience and strategy.
        </small>
      </p>
    </Panel>
  </Panel>

  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1KZ3JGFeUNQn7VUtq2Dd74aOf1de1HpvzdIDDUuayQ40LksldwkEsUyZefw&s" height="240" />
    <Panel header="Spotify Sponsored Events">
      <p>
        <small>
        At Spotify Sponsored Events, we do not just create events; we compose experiences that resonate. Join us as we hit the perfect note between celebration and innovation
        </small>
      </p>
    </Panel>
  </Panel>
  </div>

  <div style={{display:"flex",justifyContent:"space-evenly"}}>
  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT074SgQreQuVlpsT2mzjq8_5oujxVyrJ67u_Wn7FxIa7ar1JCRYvqbyBY3Og&s" height="240" />
    <Panel header="Shelby Company freshers Party">
      <p>
        <small>
        n the dimly lit halls, where secrets are shared and alliances forged, welcome to the Shelby Company Limited. Tonight, we celebrate the beginning of your own saga.
        </small>
      </p>
    </Panel>
  </Panel>

  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="data:image/jpeg;base64,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" height="240" />
    <Panel header="Apple Iphone15 Pro Max Launch Event">
      <p>
        <small>
        Innovation beyond imagination. Today, we redefine the future with the unveiling of the extraordinary iPhone 15 Pro Max.
        </small>
      </p>
    </Panel>
  </Panel>

  <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 300 ,marginTop:'30px',marginLeft:'30px'}}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTw2JMZUIBR--KOuUsWaMbXqRsOCT1JbeMPA&usqp=CAU" height="240" />
    <Panel header="AWARDS WIN">
      <p>
        <small>
        I am truly honored and humbled to receive this award. Its a testament to the hard work and dedication of an incredible team.
        </small>
      </p>
    </Panel>
  </Panel>

  
  </div>
  
    </div>
    <Footer></Footer>
    </>
  );
};

export default Event;

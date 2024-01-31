// import CustomSideNav from "../components/CustomSideNav";

import Navbar2 from "../components/navbar";
import '../pages/dashboard.css'
// import '../assets/css/dashboard.css'; 
// import { Bar } from "react-chartjs-2";

const Dashboard = () => {
    const coursesPurchasedData = [10, 15, 8, 12, 20, 18, 25];
  const enquiriesData = [5, 8, 12, 10, 15, 7, 11];
  const revenueData = [500, 800, 1200, 1000, 1500, 700, 1100];
    const chartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
  return (
    <div>
{/* <CustomSideNav/> */}
<Navbar2/>
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h4 className="dashboard-courses">No of yogas asanams</h4>
        <br/>
        <br/>
        <p>84</p>
      </div>

      <div className="dashboard-card">
        <h4 className="dashboard-courses">No of Inrtstrutors</h4>
        <br/>
        <br/>
        <p>10</p>
      </div>

      <div className="dashboard-card">
        
        <h4 className="dashboard-courses">No of Users</h4>
        <br/>
        <br/>
        <p>100</p>
      </div>

      <div className="dashboard-card">
      <h4 className="dashboard-revenue">Revenue Generated</h4>
      <br/>
        {/* <br/> */}
        <p>Rs.8954752139.20</p>
      </div>

      {/* <div className="dashboard-card">
        <h2>No of Transactions</h2>
        <p>50</p>
      </div>

      <div className="dashboard-card">
        <h2>Recent Transactions</h2>
        <ul>
          <li>Transaction 1</li>
          <li>Transaction 2</li>
          <li>Transaction 3</li>
          
        </ul>
      </div> */}
      <br/>
      <div className="dahboard-image">

      <div className="image1-dash1">
        <img className="img-dash-1" src="https://cdn.statcdn.com/Infographic/images/normal/27653.jpeg"></img>
      </div>
      <div className="image2-dash1">
        <img className="img-dash-2" src="https://images.ctfassets.net/p0sybd6jir6r/5JjmzicoLwujrJQDfar540/e31ac16143bc792e953dcdc8fb9ed763/Screenshot_2017-02-01_at_7.32.32_PM-9f2d683bba69ae8e28661125944af9e3.png"></img>
      </div>
      </div>
      {/* <div><CourseChart/></div> */}
      {/* <div className="dashboard-graph">
        <h2>Courses Purchased (Monthly)</h2>
        <Bar data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], datasets: [{ data: coursesPurchasedData, backgroundColor: 'rgba(75,192,192,0.6)', borderColor: 'rgba(75,192,192,1)', borderWidth: 1 }] }} options={chartOptions} />
      </div> */}

      {/* <div className="dashboard-graph">
        <h2>Enquiries (Monthly)</h2>
        <Bar data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], datasets: [{ data: enquiriesData, backgroundColor: 'rgba(255,99,132,0.6)', borderColor: 'rgba(255,99,132,1)', borderWidth: 1 }] }} options={chartOptions} />
      </div>

      <div className="dashboard-graph">
        <h2>Revenue (Monthly)</h2>
        <Bar data={{ labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], datasets: [{ data: revenueData, backgroundColor: 'rgba(54, 162, 235, 0.6)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 1 }] }} options={chartOptions} />
      </div> */}
    </div>
    </div>
  );
};

export default Dashboard;
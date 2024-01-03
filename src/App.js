import './assets/css/App.css';
import logo from './assets/images/flowicon.png';

// Plant Data to be rendered - eventually will be dependent on what is saved for a user
const plantData = [
  {
    plantName:"Cactus",
    calendarImg:logo,
    alt:"Flow Logo",
    daysTilWater:40
  },
  {
    plantName:"Rose",
    calendarImg:logo,
    alt:"Flow Logo",
    daysTilWater:6
  },
  {
    plantName:"Willow",
    calendarImg:logo,
    alt:"Flow Logo",
    daysTilWater:0
  }
]

function App() {
  return (
    <div className="App">
      <h1>Flow</h1>
      <p>A Newcomers Guide to Gardening</p>
      {/* Navbar here for any other pages - for now just the main page  */}

      <section className="plants">
      {/* Each plant calendar component here, add plant button at the end */}
      {plantData.map(plant => <PlantCalendar plantObj={plant} key={plant.plantName} />)}
      </section>
    </div>
  );
}

function PlantCalendar(props){
  return (
  <div className="plant-card">
    <div className="plant-image">
      <img src={props.plantObj.calendarImg}  alt={props.plantObj.alt} />
    </div>
    <div className="plant-info">
      <h2>{props.plantObj.plantName}</h2>
      <p>{props.plantObj.daysTilWater}</p>
    </div>
  </div>
  );
}

export default App;
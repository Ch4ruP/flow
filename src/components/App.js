import React from 'react';
import '../assets/css/App.css';
import logo from '../assets/images/flowicon.png';
import PlantSearchBar from './SearchPlants';
import PlantCalendar from './PlantCalendar';

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

  /*const [formData, setFormData] = useState({
    // Initialize your form data state
    username: '',
    password: '',
    // Add other fields if needed
  });*/

  return (
    <div className="App">
      <h1>Flow</h1>
      <p>A Newcomers Guide to Gardening</p>
      {/* Navbar here for any other pages - for now just the main page  */}

      <section className="plants">
      {/* Each plant calendar component here, add plant button at the end */}
      {plantData.map(plant => <PlantCalendar plantObj={plant} key={plant.plantName} />)}
      </section>
      <PlantSearchBar></PlantSearchBar>
    </div>
  );
}



export default App;
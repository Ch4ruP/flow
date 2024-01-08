import WaterButton from "./WaterButton";

/**
 * 
 * @param {*} props This function takes different attributes for a specific plant and 
 * renders them for a user to see. These include the name of the plant, and how long 
 * until it next needs watering.
 * @returns a "plant card" - all the information visible to a user about a particular plant
 */
function PlantCalendar(props){
  // In the future, props will come from the user's saved plants, stored on a db
  return (
  <div className="plant-card">
    <div className="plant-image">
      <img src={props.plantObj.calendarImg}  alt={props.plantObj.alt} />
    </div>
    <div className="plant-info">
      <h2>{props.plantObj.plantName}</h2>
      <p>{props.plantObj.daysTilWater}</p>
    </div>
    <WaterButton daysTilWater={props.plantObj.daysTilWater}/>
  </div>
  );
  }

  export default PlantCalendar;
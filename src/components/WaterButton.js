/** 
 * A button that only shows when a plant needs watering so a user can
 * say that they've watered it.
 * At this point, daysTilWater should reset. (Currently not a function)
*/
function WaterButton(props){
    const handleClick = () => {
        console.log("Clicked");
        // Will set value in db back to waterFreq so need to pass through plantId as well
        // How to get it to rerender?
    }

    return (<>
        {props.daysTilWater <= 0 &&
            <button onClick={handleClick}>
                Watered
            </button>
        }
    </>);
}
  
export default WaterButton;
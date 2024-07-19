import getVehicle from "./godown.mjs";
import getInsurance from "./Insurance.mjs";
import registerVehicle from "./rto.mjs";


function getVehicleReady(){
    const details = getVehicle();
    getInsurance(details, registerVehicle, alertCustomer);
}

function alertCustomer(vehicleDetails, vehicle){
    console.log(`Your vehicle engine no: ${vehicleDetails.engine}, chassis no: ${vehicleDetails.chassis} has been registered as ${vehicleDetails.registration} with insurance no: ${vehicleDetails.insurance}.`)
}


// main callstack
getVehicleReady();
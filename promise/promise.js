function getVehicleReady(){
    const details = ;
    getInsurance(details, registerVehicle, alertCustomer);
}

function alertCustomer(vehicleDetails, vehicle){
    console.log(`Your vehicle engine no: ${vehicleDetails.engine}, chassis no: ${vehicleDetails.chassis} has been registered as ${vehicleDetails.registration} with insurance no: ${vehicleDetails.insurance}.`)
}

function getInsurance(vehicle, registerVehicle, alertCustomer){

    const insuranceNumber = Math.floor(Math.random()*100);
    console.log('Vehicle insured');

    // synchronous callback
    registerVehicle({...vehicle, insurance: insuranceNumber}, alertCustomer);
}

function registerVehicle(vehicle, alertCustomer){

    // asynchronous callback
    setTimeout(()=>{
        const registrationNo = `DL${Math.floor(Math.random()*10000)}`;
        alertCustomer({...vehicle, registration: registrationNo});
    }, 1000);

    console.log('RTO PROCESSING!');

}

//#############################################################################

// main callstack
const insurance = getInsurance()

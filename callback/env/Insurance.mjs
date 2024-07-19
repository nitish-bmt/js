export default function getInsurance(vehicle, registerVehicle, alertCustomer){

    const insuranceNumber = Math.floor(Math.random()*100);
    console.log('Vehicle insured');

    // synchronous callback
    registerVehicle({...vehicle, insurance: insuranceNumber}, alertCustomer);
}
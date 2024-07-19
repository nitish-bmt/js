export default function registerVehicle(vehicle, alertCustomer){

    // asynchronous callback
    setTimeout(()=>{
        const registrationNo = `DL${Math.floor(Math.random()*10000)}`;
        alertCustomer({...vehicle, registration: registrationNo});
    }, 1000);

    console.log('RTO PROCESSING!');

}
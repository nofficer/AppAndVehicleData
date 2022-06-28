const HOST = window.location.origin;

async function getVehicles() {
  console.log('hello')
  var vehicles = await fetch(HOST + '/vehicleData/getVehicles')
  var json = await vehicles.json();
  console.log('vehicles', json);
}

async function getGps() {
  var gps = await fetch(HOST + '/vehicleData/getGps');
  var json = await gps.json()
  console.log('gps', json);
}

async function getGpsByVehicle() {
  var gpsVehicleSpecific = {};
  var vehicleName = document.getElementById('getGpsByVehicleText').value;
  var points = await fetch(HOST + '/vehicleData/getGps');
  var json = await points.json()
  var vehiclePoints = json.data.filter((item) => {
    return item.data.vehicleName === vehicleName
  })
  console.log(vehiclePoints)

  console.log('gpsVehicleSpecific', gpsVehicleSpecific);
}

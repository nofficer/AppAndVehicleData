import {useState, useEffect, useRef} from 'react';

const HOST = window.location.origin;

async function findVehicleGps(vehicleNameString) {
  if (vehicleNameString && vehicleNameString != '') {
    const vehicleNameValue = encodeURIComponent(vehicleNameString);

    const gpsReq = await fetch(`/vehicleData/getGpsByVehicles?vehicleName=${vehicleNameValue}`, {
      headers: {
        accepts: 'application/json'
      }
    });

    const gps = await gpsReq.json();
    if (gps && 'data' in gps) {
      return gps.data.length;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

function App() {
  const [vehicleName, setVehicleName] = useState('');
  const [gpsPointCount, setGpsPointCount] = useState(0)



  return (
    <div className='App'>
      <header className='App-header'></header>

      <div>
        <h1>Query vehicle gps point: {gpsPointCount}</h1>
        <input type='text' value={vehicleName} onChange={(e) => setVehicleName(e.target.value)} />
        <button
          onClick={async () => {
            let count = await findVehicleGps(vehicleName)
            setGpsPointCount(count)
          }}>
          Query
        </button>
      </div>
    </div>
  );
}

export default App;

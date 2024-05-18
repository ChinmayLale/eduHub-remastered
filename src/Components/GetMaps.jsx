import React, { useState , useEffect  } from "react"
import { MapContainer } from 'react-leaflet'
import { TileLayer } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import axios from 'axios';
import * as L from 'leaflet';




function GetMaps() {
    // const map = useMap()
    const [getLocation, setLocation] = useState(null);
    // const [lat, setLat] = useState(0)
    // const [long , setLong] = useState(0)
    const [ center , setCenter] = useState([0,0]);


    const handleLocationChange = (e) => {
        const loc = e.target.value;
        setLocation(loc);
    }

    const  latLong = async() => {
        const loc = document.getElementById('location');
        const data = loc.value;
        if (data.length !== null) {
            await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${getLocation}&country=india`, {
                headers: {
                    'X-Api-Key': 'lLHBQHMjPVAddlu2PEH1Ug==zF4Ox2g6instKmFb'
                }
            }).then((data) => {
                const res = data.data[0];
                // setLat(res.latitude);
                // setLong(res.longitude);
                setCenter([res.latitude,res.longitude]);
                console.log(center);
            })
            
        }
        else {
            alert("Must Enter a value")
        }
    }
 

    function MyMapComponent() {
        const map = useMap()
        console.log('map center:', map.getCenter())
        useEffect(() => {
            map.setView(center, map.getZoom());
          }, [ map]);
        return (
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        )
    }

    const coordinates = [
        [18.531428, 73.8544541],
        [18.521428, 73.8544541],
        [18.541428, 73.8544541],
    ];
      
      const customIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [20, 30],
        iconAnchor: [25, 50],
      });

    return (
        <div className="mapsPage">
            <h1>Find Your Nearby Study Buddies </h1>
            <h2>Gather For Planed Group Studies</h2>
            <div className="getinfo">


                <input type="text" placeholder="Location" required value={getLocation} onChange={handleLocationChange} id="location" />

                <button onClick={latLong} id="getloc">
                    Get Buddies
                </button>
            </div>
            <div className="maps">
                <MapContainer center={center} zoom={13} scrollWheelZoom={true} style={{ height: "500px", width: "100%" }}>
                    <MyMapComponent />
                    {center && coordinates.map((e) => (
                        <Marker position={e} icon={customIcon}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}

export default GetMaps
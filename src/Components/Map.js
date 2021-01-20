import React from 'react';
import Pin from './Pin';
import GoogleMapReact from 'google-map-react';

const Map = (props) => {
    return (
        <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBMTv_BRygY9YedijQzc_byEaDvb_sCOPk' }}
            defaultCenter={{lat: props.latt, lng: props.long}}
            defaultZoom={11}
        >
            <Pin
            lat={props.latt}
            lng={props.long}
            />
        </GoogleMapReact>
    </div>

    );
}
 
export default Map;
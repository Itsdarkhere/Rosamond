'use client'
import GoogleMapReact from 'google-map-react';
import React from 'react';

export default function GoogleMap() {
   const center = {
        lat: 0,
        lng: 0
   };

   return (
    <div className=' relative h-5/6 rounded-3xl overflow-hidden -ml-12 z-10 w-5/6 flex justify-center items-center'>
        <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY! }}
        defaultCenter={center}
        defaultZoom={11}
        >
            {/* <div className=' w-10 h-10 bg-black rounded-full' {...center}></div> */}
        </GoogleMapReact>
    </div>
);
}
import React from 'react';
// import { URL, URLSearchParams } from 'url';
import querystring from 'querystring';
// import axios from 'axios';

export default function ControlledExpansionPanels(props) {
    // https://www.google.com/maps/embed/v1/streetview
    // ?key=YOUR_API_KEY
    // &location=46.414382,10.013988
    // &heading=210
    // &pitch=10
    // &fov=35
    var url = 'https://www.google.com/maps/embed/v1/streetview';

    var params = {
        // size: '400x400',
        location: props.params.lat+','+props.params.long,
        fov:80,
        heading:70,
        pitch:0,
        key:'AIzaSyB0OUUevHIAzgoXO_W_8EPOxMbPagtceZU'
    } // or:
    // var params = [['lat', '35.696233'], ['long', '139.570431']]

    url = url +'?'+ querystring.stringify(params);
    // let string = new URLSearchParams(params);

    console.log(url);
  return (
    <div>
        <iframe width="600" height="450" frameborder="0" style={{border:0}}
src={url} allowfullscreen></iframe> 
      
    </div>
  );
}
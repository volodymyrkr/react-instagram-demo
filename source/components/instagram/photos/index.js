import React from 'react';

import * as photosMap from '../../../theme/assets/images/photos';
import photosData from '../../../theme/assets/images/photos/data';


const Photo = (props) => {
    return (props.secured ? null : <div className="photo">
        <img className="photo" src={props.src} />
    </div>)
}

const Photos = function () {
    console.log(photosData);
    const photosJSX = photosData.map((photo) => {
        return <Photo key={photo.id}
            secured={photo.secured}
            src={photosMap[photo.name]} />
    })
    return <div className="photos">
        <div className="layout">
            {photosJSX}
        </div>
    </div>
}

export default Photos;
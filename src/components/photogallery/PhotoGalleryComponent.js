import React from 'react';

import { ChairPhotos } from './ChairPhotosComponent';
import { PillowPhotos } from './PillowPhotosComponent';

import './gallery.scss';

export const PhotoGallery = () => {
    return (
        <div className="gallery">
            <ChairPhotos />
            <PillowPhotos />
        </div>
    )
};

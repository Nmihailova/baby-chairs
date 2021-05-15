import React from 'react';
import CarouselLogic from './CarouselLogicComponent';

import {pillowPaths} from '../../data/imgPaths';

export const PillowPhotos = () => {
    return (
        <div className="gallery__block">
            <h2 className="gallery__block__title">Фотографии подушек</h2>
            <CarouselLogic imgPaths={pillowPaths} />
        </div>
    );
};

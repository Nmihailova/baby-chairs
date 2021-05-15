import React from 'react';
import CarouselLogic from './CarouselLogicComponent';

import {chairPaths} from '../../data/imgPaths';

export const ChairPhotos = () => {
    return (
        <div className="gallery__block">
            <h2 className="gallery__block__title">Фотографии стульев</h2>
            <CarouselLogic imgPaths={chairPaths} />
        </div>
    );
};

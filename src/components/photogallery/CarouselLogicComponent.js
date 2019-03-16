import React, { Component } from 'react';

export default class CarouselLogic extends Component {
    state = {
        currentPhotoPath: this.props.imgPaths[0],
        currentIndex: 0
    };

    prevPhoto = () => {
        if (this.state.currentIndex === 0) {
            let newCurrIndex = this.props.imgPaths.length - 1;
            this.setState(() => ({
                currentIndex: newCurrIndex,
                currentPhotoPath: this.props.imgPaths[newCurrIndex]
            }));
        } else {
            let newCurrIndex = this.state.currentIndex - 1;
            this.setState(() => ({
                currentIndex: newCurrIndex,
                currentPhotoPath: this.props.imgPaths[newCurrIndex]
            }));
        }
    };

    nextPhoto = () => {
        if (this.state.currentIndex === this.props.imgPaths.length - 1) {
            let newCurrIndex = 0;
            this.setState(() => ({
                currentIndex: newCurrIndex,
                currentPhotoPath: this.props.imgPaths[newCurrIndex]
            }));
        } else {
            let newCurrIndex = this.state.currentIndex + 1;
            this.setState(() => ({
                currentIndex: newCurrIndex,
                currentPhotoPath: this.props.imgPaths[newCurrIndex]
            }));
        }
    };
    render() {
        let path = this.state.currentPhotoPath;
        return (
            <div className="gallery__block__carousel">
                <img className="gallery__block__carousel__btn-prev" onClick={this.prevPhoto} src={require('../../img/left.png')} alt=""/>
                <div className="gallery__block__carousel__photo">
                    <img className="gallery__block__carousel__photo__img" src={require(`../../${path}`)} alt=""/>
                </div>
                <img className="gallery__block__carousel__btn-next" onClick={this.nextPhoto} src={require('../../img/right.png')} alt=""/>
            </div>
        )
    }
}
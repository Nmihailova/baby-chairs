import React from 'react';
import { connect } from 'react-redux';

import './note.scss';

const mapStateToProps = state => {
  return {
    orderStatus: state.makeOrderReducer.orderStatus
  }
};



const NoteComponent = ({ showNote, orderStatus }) => {
  return (
    <div>
      <div className="background" onClick={showNote}></div>
      {orderStatus == "success" &&
        <div className="note">
          <button className="note__close-btn" onClick={showNote}>X</button>

          <p className="note__text">
            Спасибо за заказ!
            <br />Мы перезвоним Вам в ближайшее время.
          </p>
        </div>}

      {orderStatus.toString().search(/error/i) !== -1 &&
        <div className="note">
          <button className="note__close-btn" onClick={showNote}>X</button>

          <p className="note__text">
            Что-то пошло не так :(
            <br />Приносим свои извинения.
          </p>
        </div>}


    </div >
  )
};

const Note = connect(mapStateToProps)(NoteComponent);

export default Note;
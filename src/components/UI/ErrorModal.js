import React from 'react';
import './ErrorModal.css';

const ErrorModal = (props) => {
  return (
    <div className="error-modal">
      <div className="modal-content">
        <header className="modal-header">
          <h2>{props.title}</h2>
        </header>
        <div className="modal-body">
          <p>{props.message}</p>
        </div>
        <footer className="modal-footer">
          <button onClick={props.onClose}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;

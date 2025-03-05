import React from 'react';
import { ReactComponent as Rules } from "../assets/rock-paper-scissors-master/images/image-rules.svg";
import './modal.css';

const RulesModal = ({ closeModal }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Regras do Jogo</h2>
                <Rules />
                <button className="close-button" onClick={closeModal}>Fechar</button>
            </div>
        </div>
    );
};

export default RulesModal;

import React from 'react';
import './Button.css';

export default props =>
    <button
    onClick={e => props.click && props.click(props.label)}
    // deixando classes dinâmicas;
    className={`
        button
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
        ${props.operation ? 'operation' : ''}
    `}>
        {/* definindo valor do botão com label; */}
        {props.label}
    </button>
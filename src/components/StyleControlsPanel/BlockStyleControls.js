import React, { useState } from 'react';
import { MDBIcon } from 'mdbreact';

export const BlockStyleConstrols = ({onToggleBlockStyleButtonClick}) => {
    const [selectedHeader, setSelectedHeader] = useState('unstyled');

    const handleOnSelectChange = (event) => {
        const style = event.target.value;

        setSelectedHeader(style);
        onToggleBlockStyleButtonClick(style);
    }
    return (
        <>
            <button onClick={() => onToggleBlockStyleButtonClick('RichEditor-blockquote')}><MDBIcon icon="quote-left" /></button>
            <select onChange={handleOnSelectChange} value={selectedHeader}>
                <option value={'unstyled'}>Normal</option>
                <option value={'header-one'}>h1</option>
                <option value={'header-two'}>h2</option>
                <option value={'header-three'}>h3</option>
                <option value={'header-four'}>h4</option>
                <option value={'header-five'}>h5</option>
                <option value={'header-six'}>h6</option>
            </select>
            <button onClick={() => onToggleBlockStyleButtonClick('unordered-list-item')}><MDBIcon icon="list-ul"/></button>
            <button onClick={() => onToggleBlockStyleButtonClick('ordered-list-item')}><MDBIcon icon="list-ol"/></button>
        </>
    )
}
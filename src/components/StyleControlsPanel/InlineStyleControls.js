import React from 'react';
import { MDBIcon } from 'mdbreact';

export const InlineStyleControls = ({onToggleInlineStyleButtonClick}) => {
    return(
        <>
            <button onClick={() => onToggleInlineStyleButtonClick('BOLD')}><MDBIcon icon="bold" /></button>
            <button onClick={() => onToggleInlineStyleButtonClick('ITALIC')}><MDBIcon icon="italic" /></button>
            <button onClick={() => onToggleInlineStyleButtonClick('UNDERLINE')}><MDBIcon icon="underline" /></button>
            <button onClick={() => onToggleInlineStyleButtonClick('STRIKETHROUGH')}><MDBIcon icon="strikethrough" /></button>
            <button onClick={() => onToggleInlineStyleButtonClick('CODE')}><MDBIcon icon="code" /></button>
        </>
    )
}
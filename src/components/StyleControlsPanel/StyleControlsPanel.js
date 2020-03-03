import React from 'react';
import './styleBlockPanel.css'
import { InlineStyleControls } from './InlineStyleControls';
import { BlockStyleConstrols } from './BlockStyleControls';

export const StyleControlsPanel = ({onToggleBlockStyleHandler, onToggleInlineStyleHandler, commandHandler}) => {
    return (
        <div className={'style-block-panel'}>
            <InlineStyleControls onToggleInlineStyleButtonClick={onToggleInlineStyleHandler} />
            <BlockStyleConstrols onToggleBlockStyleButtonClick={onToggleBlockStyleHandler} commandHandler={commandHandler} />
        </div>
    );
}
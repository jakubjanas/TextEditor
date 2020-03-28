import React from 'react';

const Image = ({ block, contentState }) => {
    const src = contentState.getEntity(block.getEntityAt(0)).getData();

    if(!!src) {
        return <img src={src} />
    }
}

export const imageBlockRenderer = (block, { getEditorState }) => {
    if(block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent();
        const entity = contentState.getEntity(block.getEntityAt(0));
        const type = entity.getType();

        if(type === 'image' || type === 'IMAGE') {
            return {
                component: Image,
                editable: false
            }
        }
    }

    return null;
}
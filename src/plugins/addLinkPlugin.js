import React from 'react';
import {
    RichUtils,
    KeyBindingUtil,
    EditorState,
  } from 'draft-js'

  export const LinkStrategy = (contentBlock, callback, contentState) => {
      contentBlock.findEntityRanges(character => {
        const entity = character.getEntity();
        return (
            entity !== null &&
            contentState.getEntity(entity).getType() === "LINK"
        )
      },
      callback
      );
  }

  export const Link = (props) => {
    const { contentState, entityKey } = props;
    const { url } = contentState.getEntity(entityKey).getData();

    return (<a href={url} target="_blank">{props.children}</a>);
  }

  export const addLinkPlugin = {
    keyBindingFn(event, { getEditorState }) {
        const editorState = getEditorState();
        const selection = editorState.getSelection();
        if (selection.isCollapsed()) {
          return;
        }
        if (KeyBindingUtil.hasCommandModifier(event) && event.which === 75) {
          return "add-link";
        }
      },

    handleKeyCommand(command, editorState, eventTimeStamp, {setEditorState}) {
        if (command !== 'add-link'){
            return 'not-handled';
        }
        
        const link = window.prompt('Paste link');
        const selection = editorState.getSelection();

        if (!link) {
            setEditorState(RichUtils.toggleLink(editorState, selection, null));
            return 'handled';
        }

        const content = editorState.getCurrentContent();
        const contentWithEntity = content.createEntity("LINK", "MUTABLE", {url: link});
        const newState = EditorState.push(editorState, contentWithEntity, 'create-entity');

        const entityKey = contentWithEntity.getLastCreatedEntityKey();
        setEditorState(RichUtils.toggleLink(newState, selection, entityKey));

        return 'handled';
    },

    decorators: [
        {
            strategy: LinkStrategy,
            component: Link,
        }
    ]
  }

  export default addLinkPlugin
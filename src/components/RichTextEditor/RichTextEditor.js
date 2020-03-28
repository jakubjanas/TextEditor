import React from 'react';
import './RichTextEditor.css';
import { EditorState, RichUtils, AtomicBlockUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import { StyleControlsPanel } from '../StyleControlsPanel/StyleControlsPanel';
import addLinkPlugin, { handleLinkCommand } from '../../plugins/addLinkPlugin';
import { imageBlockRenderer } from '../../plugins/addImagePlugin';

export const RichTextEditorComponent = () => {
   const [ editorState, setEditorState ] = React.useState(EditorState.createEmpty());
   const editor = React.useRef(null);
   const plugins = [addLinkPlugin];

   const focus = () => editor.current.focus();

   const onToggleInlineStyleHandler = (style) => {
     setEditorState(RichUtils.toggleInlineStyle(editorState, style));
   }

   const onToggleBlockStyleHandler = (style) => {
     setEditorState(RichUtils.toggleBlockType(editorState, style));
   }

   const onAddLink = () => {
     handleLinkCommand(editorState, setEditorState);
   }

   const handleCommand = command => {
     const newState = RichUtils.handleKeyCommand(editorState, command);

     if (newState) {
       setEditorState(newState);
       return 'handled';
     }

     return 'not-handled';
   }

   const onAddImage = (e) => {
     e.preventDefault();
     const src = window.prompt("Paste Image Link");
     const contentState = editorState.getCurrentContent();
     const contentStateWithEntity = contentState.createEntity(
       'image',
       'IMMUTABLE',
       src
     );

     const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
     const newState = EditorState.set(editorState, {currentContent: contentStateWithEntity },
      'create-entity'
      );
      setEditorState(
        AtomicBlockUtils.insertAtomicBlock(newState, entityKey, ' ')
    );
      // setTimeout(() => focus(), 0);
   };

   return (
     <div>
       <h1>Text Editor</h1>
       <StyleControlsPanel onToggleBlockStyleHandler={onToggleBlockStyleHandler} onToggleInlineStyleHandler={onToggleInlineStyleHandler} onAddLink={onAddLink} onAddImage={onAddImage} />
      <div className={'text-area'}>
        <Editor editorState={editorState} onChange={setEditorState} spellCheck={true} plugins={plugins} handleKeyCommand={handleCommand}  ref={editor} blockRendererFn={imageBlockRenderer}/>
      </div>
     </div>
  );
}
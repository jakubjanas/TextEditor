import React from 'react';
import './RichTextEditor.css';
import { EditorState, RichUtils } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import { StyleControlsPanel } from '../StyleControlsPanel/StyleControlsPanel';
import addLinkPlugin from '../../plugins/addLinkPlugin';

export const RichTextEditorComponent = () => {
   const [ editorState, setEditorState ] = React.useState(EditorState.createEmpty());
   const plugins = [addLinkPlugin];

   const onToggleInlineStyleHandler = (style) => {
     setEditorState(RichUtils.toggleInlineStyle(editorState, style));
   }

   const onToggleBlockStyleHandler = (style) => {
     console.log(style);
     setEditorState(RichUtils.toggleBlockType(editorState, style));
   }

   const handleCommand = command => {
     const newState = RichUtils.handleKeyCommand(editorState, command);
     
     if (newState) {
       setEditorState(newState);
       return 'handled';
     }

     return 'not-handled';
   }

   return (
     <div>
       <h1>Text Editor</h1>
       <StyleControlsPanel onToggleBlockStyleHandler={onToggleBlockStyleHandler} onToggleInlineStyleHandler={onToggleInlineStyleHandler} commandHandler={handleCommand}/>
      <div className={'text-area'}>
        <Editor editorState={editorState} onChange={setEditorState} spellCheck={true} plugins={plugins} handleKeyCommand={handleCommand} />
      </div>
     </div>
  );
}
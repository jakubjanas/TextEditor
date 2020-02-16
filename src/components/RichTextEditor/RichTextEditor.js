import React from 'react';
import './RichTextEditor.css';
import { EditorState, Editor, RichUtils } from 'draft-js';
import { StyleControlsPanel } from '../StyleControlsPanel/StyleControlsPanel';

export const RichTextEditorComponent = () => {
   const [ editorState, setEditorState ] = React.useState(EditorState.createEmpty());

   const onToggleInlineStyleHandler = (style) => {
     setEditorState(RichUtils.toggleInlineStyle(editorState, style));
   }

   const onToggleBlockStyleHandler = (style) => {
     console.log(style);
     setEditorState(RichUtils.toggleBlockType(editorState, style));
   }

   return (
     <div>
       <h1>Text Editor</h1>
       <StyleControlsPanel onToggleBlockStyleHandler={onToggleBlockStyleHandler} onToggleInlineStyleHandler={onToggleInlineStyleHandler} />
      <div className={'text-area'}>
        <Editor editorState={editorState} onChange={setEditorState} spellCheck={true} />
      </div>
     </div>
  );
}
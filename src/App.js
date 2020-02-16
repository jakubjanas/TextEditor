import React from 'react';
import './App.css';
import { RichTextEditorComponent } from './components/RichTextEditor/RichTextEditor';


function App() {
  return (
    <div className="App">
      <div className="card">
        <div>
          <RichTextEditorComponent />
        </div>
      </div>
    </div>
  );
}

export default App;

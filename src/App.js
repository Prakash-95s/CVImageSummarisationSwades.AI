import React, { useState } from 'react';
import './App.css';
import ImageUpload from './ImageUpload';
import SummaryList from './SummaryList';

const App = () => {
  const [summaries, setSummaries] = useState([]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Image Summarizer</h1>
      </header>
      <main>
        <ImageUpload setSummaries={setSummaries} />
        <SummaryList summaries={summaries} />
      </main>
    </div>
  );
};

export default App;

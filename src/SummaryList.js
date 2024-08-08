import React from 'react';

const SummaryList = ({ summaries }) => {
  return (
    <div className="summary-list">
      <h2>Summaries</h2>
      <ul>
        {summaries.map((summary, index) => (
          <li key={index}>
            <strong>{summary.filename}</strong>: {summary.summary}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryList;
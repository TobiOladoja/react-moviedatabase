import React from 'react';

import Result from './Result';

function Results({ results }) {
  return (
    <div>
      <section className='results'>
        {results.map((result) => (
          <Result result={result} />
        ))}
      </section>
    </div>
  );
}

export default Results;

// MyComponent.js

import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <div>
      {data ? (
        <div data-testid="data">{data}</div>
      ) : (
        <div data-testid="loading">Loading...</div>
      )}
    </div>
  );
}

export default MyComponent;
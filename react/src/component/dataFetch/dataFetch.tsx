import React, { useState, useEffect } from 'react';
import { useApi } from './useApi.hook';

export const  MyComponent = () =>  {
  const [data, setData] = useState();
  const {fetchData}  = useApi();
  useEffect(() => {
    const fetchInit = async ()=> {
        setData(await fetchData());
    };
    fetchInit();
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
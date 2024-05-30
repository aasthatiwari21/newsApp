import React from 'react';
import loading from './loading.gif';

function Spinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <img className="my-3" src={loading} alt='loading' />
    </div>
  );
}

export default Spinner;

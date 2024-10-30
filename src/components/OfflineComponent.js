import React from 'react';

const OfflineComponent = () => {
  return (
    <div className='offline maindiv'>
      <h2 className='offline-try'>Try</h2>
      <h1 className='offline-title'>No internet</h1>
      <ul className='offline-suggestions'>
        <li className='offline-suggestion'>Checking the network cables, modem, and router</li>
        <li className='offline-suggestion'>Reconnecting to Wi-Fi</li>
      </ul>
      <h3 className='offline-error'>ERR_INTERNET_DISCONNECTED</h3>
    </div>
  );
}

export default OfflineComponent;

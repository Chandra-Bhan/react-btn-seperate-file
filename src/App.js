import React from 'react';
import './style.css';
import Button from './component/button/Button';

// Q-1 Create a button in a separate file
export default function App() {
  return (
    <div>
      <h1>Create a button in a separate file</h1>
      <Button
        styl={{
          color: 'red',
          fontSize: '50px',
          borderRadius: '20px',
          padding: '20px',
          backgroundColor: 'yellow',
          fontWeight: 'bold',
        }}
        onClick={() => alert('Clicked')}
      >
        Click
      </Button>

      <Button
        styl={{
          color: 'black',
          fontSize: '50px',
          borderRadius: '20px',
          padding: '20px',
          backgroundColor: 'yellow',
          fontWeight: 'bold',
        }}
        onClick={() => alert('Clicked')}
      >
        Click
      </Button>
    </div>
  );
}

import React from 'react';

// Q-1 Create a button in a separate file
export default function Button(props) {
  return (
    <div>
      <button style={props.styl} onClick={props.onClick}>{props.children}</button>
    </div>
  );
}

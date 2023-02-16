import React from 'react';
import { track } from 'react-tracking';

function TextModule({
  text,
  id
}) {

  return (
    <div id={id}>
      <div>
        {text}
      </div>
    </div>
  );
}

export default track({
  component: 'text-module',
})(TextModule);

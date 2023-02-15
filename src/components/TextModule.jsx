import React from 'react';

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

export default TextModule;

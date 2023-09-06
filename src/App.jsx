import React, { useState } from 'react';

const App = () => {
  const colors = ['yellow', 'orange', 'blue', 'violet'];
  const [selectedColor, setSelectedColor] = useState('');

  const Color = ({ color }) => (
    <div
      className={`${color} ${selectedColor === color ? 'selected' : ''}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        {colors.map((color) => (
          <Color key={color} color={color} />
        ))}
      </div>
    </div>
  );
};

export default App;

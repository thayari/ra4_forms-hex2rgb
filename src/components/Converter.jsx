import React, { useState } from 'react';

function validate(value) {
  if (value.length !== 7) {
    return false;
  } else if (value.match(/[^\d^a-f^A-F^#]/)) {
    return false
  } else {
    return true;
  }
}

function hexToDec(hexString) {
  let arr = hexString.split('');
  let rgb = {};
  rgb.red = arr[0] + arr[1];
  rgb.green = arr[2] + arr[3];
  rgb.blue = arr[4] + arr[5];
  for (let color in rgb) {
    rgb[color] = parseInt(rgb[color], 16);
  }
  return `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`
}

function Converter() {
  const [value, setValue] = useState('#ffffff');
  const [bgcolor, setBgcolor] = useState('')
  const [rgb, setRgb] = useState('rgb(255, 255, 255)')

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value)
    if (!validate(value)) {
      setRgb('Ошибка!');
    } else {
      const colorHex = value.slice(1).toLowerCase();
      setRgb(hexToDec(colorHex));
      setBgcolor(hexToDec(colorHex));
    }
  }

  const bgstyle = {
    backgroundColor: bgcolor,
  }

  return (
    <div className="converter" style={bgstyle}>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} id="input" name="hex" placeholder={value}/>
      </form>
      <div className="rgb">{rgb}</div>
    </div>
  )
}

export default Converter

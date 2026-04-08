import React, { useEffect, useState } from 'react'

/**
 * RandomColor Component
 * 
 * A React component that generates and displays random colors in either HEX or RGB format.
 * The component provides an interactive interface to toggle between color formats and 
 * generate new random colors on demand.
 * 
 * @component
 * @returns {JSX.Element} A full-screen color display with control buttons and color information
 * 
 * @example
 * return <RandomColor />
 * 
 * Features:
 * - Toggle between HEX and RGB color formats
 * - Generate random colors in the selected format
 * - Display current color value on screen
 * - Full-screen background color display
 * 
 * State:
 * - typeOfColor (string): Current color format type ('hex' or 'rgb')
 * - color (string): Current color value in the selected format
 */
const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility (length){
    return Math.floor(Math.random()*length)
  }

  function handleCreateRandomHexColor() {
    const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = '#';


    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(() => {
    if(typeOfColor == 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      background: color,
      display: 'flex',
      justifyContent: 'center',
    }}>
      <div>
        <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </div>
  )
}

export default RandomColor

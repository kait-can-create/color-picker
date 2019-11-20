import React, { useState } from 'react'


const App = () => {


  const [hue, setHue] = useState(Math.floor(Math.random() * 360 + 1))
  const hueDisplay = (event) => {
    setHue(event.target.value)
  }

  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 101))
  const saturationDisplay = (event) => {
    setSaturation(event.target.value)
  }

  const [lightness, setLightness] = useState(Math.floor(Math.random() * 101))
  const lightnessDisplay = (event) => {
    setLightness(event.target.value)
  }

  const randomColor = () => {
    setHue(Math.floor(Math.random() * 360 + 1))
    setSaturation(Math.floor(Math.random() * 101))
    setLightness(Math.floor(Math.random() * 101))
  }

  return (
    <>
      <h2>Color Picker</h2>
      <div>
        <input type="range" name="color" value={hue}
          min="0" max="360" onChange={hueDisplay}></input>
        <span>{hue}: </span>
        <label>Hue</label>
      </div>
      <div>
        <input type="range" name="color" value={saturation}
          min="0" max="100" onChange={saturationDisplay}></input>
        <span>{saturation}%: </span>
        <label>Saturation</label>
      </div>
      <div>
        <input type="range" name="color" value={lightness}
          min="0" max="100" onChange={lightnessDisplay}></input>
        <span>{lightness}%: </span>
        <label>Lightness</label>
      </div>
      <section style={{ backgroundColor: 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)' }} className='displayColor'>
      </section>
      <button onClick={randomColor}>Pick Me!</button>
    </>
  )
}




export default App
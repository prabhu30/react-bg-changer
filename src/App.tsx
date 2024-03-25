import { useState } from 'react'
import './App.css'
import BgChangeButton from './components/BgChangeButton'

function App() {
  const [bgColor, setBgColor] = useState("black");

  return (
    <div className='w-full h-screen' style={{backgroundColor: bgColor}}>
      <div className='fixed bottom-12 flex flex-wrap justify-center gap-4 inset-x-4 p-2 rounded-xl bg-white'>
        <BgChangeButton bgColor='Red' textColor='white' setBgColor={setBgColor}/>
        <BgChangeButton bgColor='Green' textColor='white' setBgColor={setBgColor}/>
        <BgChangeButton bgColor='Blue' textColor='white' setBgColor={setBgColor}/>
        <BgChangeButton bgColor='Olive' textColor='white' setBgColor={setBgColor}/>
        <BgChangeButton bgColor='Gray' textColor='white' setBgColor={setBgColor}/>
        <BgChangeButton bgColor='Yellow' textColor='black' setBgColor={setBgColor}/>
        <BgChangeButton bgColor='Pink' textColor='black' setBgColor={setBgColor}/>
        <BgChangeButton bgColor='Purple' textColor='white' setBgColor={setBgColor}/>
        <BgChangeButton bgColor='Lavender' textColor='black' setBgColor={setBgColor}/>
        <BgChangeButton bgColor='White' textColor='black' setBgColor={setBgColor}/>
        <BgChangeButton bgColor='Black' textColor='White' setBgColor={setBgColor}/>
      </div>
    </div>
  )
}

export default App

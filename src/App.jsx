import { useState } from 'react'
import './App.css'
import ColourList from './components/ColourList'
import Form from './components/form'
import Values from 'values.js';


function App() {

  const [colors, setColors] = useState(new Values('#f15025').all(10));  // This gives 10 lighter and 10 darker colours
  
  return (
    <main>
      <Form />
      <ColourList colors={colors} />
    </main>
  )
}

export default App

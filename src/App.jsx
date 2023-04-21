import { useState } from 'react'
import './App.css'
import ColourList from './components/ColourList'
import Form from './components/form'
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';



function App() {

  const [colors, setColors] = useState(new Values('#f15025').all(10));  // This increments the values by 10

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
      toast.success('Success');
    } catch(error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColourList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  )
}

export default App

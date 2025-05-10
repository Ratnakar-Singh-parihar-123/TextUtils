import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light'); // dark mode is enabled or not 
  const [alert, setAlert] = useState(null); // objects hai ye 

  // setmethod
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() =>{
      setAlert(null);
    },1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#003092';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (

    <>

      <Navbar title="TextUtiils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} /> 
      <div className="container my-3">
        {/* <h2>Enter the text to analyze</h2> */}
        <TextForm mode={mode} heading="Enter the text here.." showAlert={showAlert} />
        {/* <About mode={mode}/> */}
      </div>
    </>
  );
}

export default App;
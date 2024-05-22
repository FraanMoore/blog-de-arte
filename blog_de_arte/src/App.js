import './App.css';
import axios from "axios";
import Canvas from './components/canvas';
import { useEffect, useState } from 'react';

const  API_URL = "http://localhost:3000/api/v1/canvas";

function getAPIData() {
  return axios.get(API_URL).then((response)=> response.data)
}

function App() {
  const [canvas, setCanvas] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setCanvas(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Canvas canvas={canvas} />
    </div>
  );
}

export default App;

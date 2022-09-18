import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import Axios from 'axios';
import './App.css';

function App() {
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    Axios.get('http://localhost:8080/api/get').then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <div className="App">
      s
      {/* {reviews.map((item) => (
        <div>item.name</div>
      ))} */}
    </div>
  );
}

export default App;

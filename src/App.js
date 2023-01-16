import './App.css';
import {useState} from "react";
import {img} from "./constants/img";

const images = img;
console.log(images)

function App() {
  const [current,setCurrent] = useState(0)

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

  return (
    <div className="App">
      <h1>Ukrainian hryvni</h1>
      <div className='slider'>
          {images.map((image,index)=>
            current === index && (
                  <div key={image} className='slider'>
                    <img src={image} alt='images'/>
                      <div className='nav'>
                      <div className='prev' onClick={prevSlide}>⮨</div>
                      <div className='next' onClick={nextSlide}>⮫</div>
                      </div>
                  </div>
                  )
          )}
      </div>
    </div>
  );
}

export default App;

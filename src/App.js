import './App.css';
import {useState} from "react";
import {img} from "./constants/img";
import money from './assets/icon/hrn.png';
import ukr from './assets/icon/ukr.png';
import famous from './assets/icon/famous.png';
import currency from './assets/icon/valuta.png';

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
        <header>
            <nav>
                <div className='nav_block'>
                <img className='icons' src={ukr}/>
                <div>Anthem of Ukraine</div>
                    <img className='icons' src={famous}/>
                <div>Famous Ukrainians</div>
                    <img className='icons' src={money}/>
                <div>About Ukraine</div>
                </div>
            </nav>
        </header>
     <img className='icon_currency' src={currency}/>
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

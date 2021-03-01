import { Converter } from "./Converter";
import { useState } from "react";


function Content() {
    const [mode, setMode] = useState(false);
    
    const toggleTheme = () => {   
        if(mode === false){
            document.querySelector('.header').style.backgroundColor = 'black';
            document.querySelector('.container').style.backgroundColor = '#08020d';
            document.querySelector('.text-area').style.textShadow = '#41c464 1px 1px 0, #41c464 -1px -1px 0';
            document.querySelector('.name').style.color = '#41c464'; 
            setMode(true);
          } else {
            document.querySelector('.header').style.backgroundColor = 'white';
            document.querySelector('.container').style.backgroundColor = 'white';
            document.querySelector('.text-area').style.textShadow = 'none';
            document.querySelector('.text-area').style.color = 'gray';
            document.querySelector('.name').style.color = 'gray';
            setMode(false);
          }
      }

    return (
        <div className='container'>
            <div className='header'>
                <div className='name'>Aderon's Lab</div>
                <input id="checkbox1" type="checkbox" onChange={toggleTheme}/>
                <label htmlFor="checkbox1">Mode switch</label>
            </div>
            <div className='text-area'>Simple converter</div>
            <Converter />
        </div>
    );
}

export {Content}
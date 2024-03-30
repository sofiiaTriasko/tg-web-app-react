import React, {useEffect} from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App (){

    useEffect(() => {
        return () => {
            tg.ready()
        };
    }, []);


    return (
      <div className="App">
      </div>
    );
}

export default App;

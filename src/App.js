import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";

function App (){
    const { onToggleButton, tg} = useTelegram()
    useEffect(() => {
        return () => {
            tg.ready()
        };
    }, []);


    return (
        <React.Fragment>
      <Header/>
        <div className="App">
            <button onClick={onToggleButton}>toggle</button>
        </div>
        </React.Fragment>
    );
}

export default App;

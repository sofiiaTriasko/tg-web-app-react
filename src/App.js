import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";
import { Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form"

function App (){
    const { tg } = useTelegram()
    useEffect(() => {
        return () => {
            tg.ready()
        };
    }, [tg]);


    return (
        <React.Fragment>
      `<Header/>
            <Routes>
                <Route index element={<ProductList/>}></Route>
                <Route path={'form'} element={<Form/>}></Route>
            </Routes>
        </React.Fragment>
    );
}

export default App;

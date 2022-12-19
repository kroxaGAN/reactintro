import React from 'react';
import './App.css';
import {Header} from "./Header";
import {BestSellers} from "./BestSellers";
import {Route, Routes } from 'react-router-dom';
import {Product} from "./Product";


function App() {
    return (
        <div className={'appContainer'}>
            <Header />
            <div className={'divider'}></div>
            <Routes>

                <Route path={'/'} element={<BestSellers/>}/>
                <Route path={'product/:productId'} element={<Product/>}/>
                <Route path={'*'} element={'error'}/>
            </Routes>

        </div>
    );
}

export default App;

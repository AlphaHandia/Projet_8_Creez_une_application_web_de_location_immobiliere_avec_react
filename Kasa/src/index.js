import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './Sass/main.css';
import Error from './components/Error/error';
import Header from './components/header/header';
import Footer from './components/Footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Router>
    <Header/>
    <Routes>
    <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer />
  </Router> 
  
</React.StrictMode>
);



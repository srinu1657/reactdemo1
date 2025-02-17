import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header/>
            <h1>Hi, I am react Content</h1>
            <h2>This is my code</h2>
            <Footer/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'))
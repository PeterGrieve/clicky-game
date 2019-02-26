import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';




class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

export default App;

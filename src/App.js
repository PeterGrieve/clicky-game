import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

// The App component encompasses the Header and Body components
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

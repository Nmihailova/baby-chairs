import React, {Component} from 'react';

import MainPage from './components/main/MainPageComponent';

import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MainPage />
            </div>
        );
    }
}

export default App;

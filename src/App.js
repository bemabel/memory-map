import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Main, UserPage, Welcome } from './pages';
import { ThemeProvider } from 'mineral-ui/themes';


class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="App">
          <BrowserRouter history={createBrowserHistory()} >
            <Switch>
              <Route path="/memorymap" exact component={Main} />
              <Route path="/profile" exact component={UserPage} />
              <Route path="/hellopage" exact component={Welcome} />
            </Switch>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
import { MuiThemeProvider } from "@material-ui/core/styles";
import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Main, UserPage, Welcome } from './pages';
import { ThemeProvider } from 'mineral-ui/themes';
import { theme } from "./config/var";


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <ThemeProvider>
        <div className="App">
          <BrowserRouter history={createBrowserHistory()} >
            <Switch>
              <Route path="/memorymap" exact component={Main} />
              <Route path="/profile" exact component={UserPage} />
              <Route path="/" exact component={Welcome} />
            </Switch>
          </BrowserRouter>
        </div>
      </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
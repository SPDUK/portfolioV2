import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Components/Layout/Navbar/Navbar';
import Jumbotron from './Components/Layout/Jumbotron/Jumbotron';
import Featured from './Components/Layout/Featured/Featured';
import Learned from './Components/Layout/Learned/Learned';
import Github from './Components/Layout/Github/Github';
import Footer from './Components/Layout/Footer/Footer';

import './styles/app.css';

// primary = monochrome - secondary - indigo
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#F3F3F3',
      main: '#FAFAFA',
      dark: '#B4B4B4',
      contrastText: '#212121'
    },
    secondary: {
      light: '#3F51B5',
      main: '#3F51B5',
      dark: '#192780',
      contrastText: '#F3F3F3'
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Jumbotron />
        <Featured />
        <Github />
        <Learned />
        <Footer />
      </MuiThemeProvider>
    );
  }
}

export default App;

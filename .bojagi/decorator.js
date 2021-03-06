import * as React from 'react';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import jssRtl from 'jss-rtl';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { create } from 'jss';

// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, jssRtl()],
  insertionPoint: process.browser ? document.querySelector('#insertion-point-jss') : null,
});

const theme = createMuiTheme({});

function addFontCssTag(url) {
  var fontCssLink = document.createElement('link');
  fontCssLink.setAttribute('rel', 'stylesheet');
  fontCssLink.setAttribute('type', 'text/css');
  fontCssLink.setAttribute('href', url);
  document.head.appendChild(fontCssLink);
}

addFontCssTag(
  'https://fonts.googleapis.com/css?family=Roboto:300,400,400italic,500,700&display=swap',
);
addFontCssTag('https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Two+Tone');

export default (Story) => (
  <StyledEngineProvider injectFirst>
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </MuiThemeProvider>
    </StylesProvider>
  </StyledEngineProvider>
);

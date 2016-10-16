import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default ({children}) => {
    return (
      <MuiThemeProvider>
        <div>
            <h1>my app haha</h1>
            {children}
        </div>
      </MuiThemeProvider>
    )
}
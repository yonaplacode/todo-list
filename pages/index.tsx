import React, { useState } from 'react'
import { App } from '../components/App/App';
import { AppContextProvider } from '../components/AppContext/AppContext';


const HomePage = () => {


  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
};

export default HomePage

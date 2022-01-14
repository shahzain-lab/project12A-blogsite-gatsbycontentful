import React from 'react';
import {ContextProvider} from './src/context/userContext';                                                                                                                                                                                                                                           

export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
)
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './projetReact/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./projetReact/store";
createRoot(document.getElementById('root')).render(
<Provider store={store}><BrowserRouter> <App/></BrowserRouter></Provider>  
)

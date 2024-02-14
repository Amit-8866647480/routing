import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home} from './Pages/Home';
import { About } from './Pages/About';
import { Pdfcatalog } from './Pages/Pdfcatalog';
import { Contact } from './Pages/Contact';


let router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/about-us',
    element:<About/>
  },
  {
    path:'/Pdfcatalog',
    element:<Pdfcatalog/>
  },
  {
    path:'/contact-us',
    element:<Contact/>
  },
  // {
  //   path:'/blogs',
  //   element:<Blogs/>
  // }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

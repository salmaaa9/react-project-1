
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';

import Layout from './components/Layout/Layout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import NotFound from './components/Not-Found/NotFound';

function App() {


  return (
    <>
    <RouterProvider router={createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Home />,
            },
            
            {
              path: 'about',
              element: <About />,
            },
            {
              path: 'portfolio',
              element: <Portfolio />,
            },
            {
              path: 'contact',
              element: <Contact />,
            },
            {
              path: '*',
              element: <NotFound />,
            },
          
          ]
      }
    ])} />
    </>
  )
}

export default App

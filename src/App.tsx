import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigator, { RouteType } from './navigators/Navigator';
import routesConfig from './config/routes-config.json'
import AllBooks from './pages/AllBooks';
import PrivateBooks from './pages/PrivateBooks';


const {always} = routesConfig;

function getRoutes(): RouteType[] {
  const res: RouteType[] = [];
  res.push(...always);
  return res;
}

const App: React.FC = () => {

  const routes = getRoutes();


  return <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navigator routes={routes}/>}>
          <Route path='all' element={<AllBooks/>}/>
          <Route path='private' element={<PrivateBooks/>}/>

        </Route>
  

    </Routes>
  
  </BrowserRouter>
}

export default App;

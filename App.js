// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PaginaLogin from './paginaLogin';
import PaginaOla from './paginaOla';

//definição das páginas/links
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaLogin />} />
        <Route path="/login" element={<PaginaLogin />} />
        <Route path="/ola/:data" element={<PaginaOla />} />
      </Routes>
    </Router>
  );
};

export default App;

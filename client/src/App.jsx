import {Routes, Route} from 'react-router-dom'
import Create from './pages/Create';
import AllProducts from './pages/AllProducts';
import Details from './pages/Details';


function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:product_id" element={<Details />} />
      </Routes>
    </fieldset>
  );
}

export default App;

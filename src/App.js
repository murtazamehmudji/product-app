import { Routes, Route } from 'react-router-dom';
import Category from './components/category/Category';
import Home from './components/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact path="/category" element={<Category />} />
    </Routes>
  );
}

export default App;

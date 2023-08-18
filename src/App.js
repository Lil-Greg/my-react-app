import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import ToDo from './components/To_Do';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter> {/*wrapper component - */}
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/todo' element={<ToDo/>}></Route>
          <Route path='*' element={<Home/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Users from './pages/Users';
import Add from './pages/Add';
import View from './pages/View';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path='/view/:id' element={<View/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';

import Create from './componet/Create';
import Read from './componet/Read';
import Edit from './componet/Edit';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route exact path='/'element={<Read/>}/>
        <Route exact path='/create'element={<Create/>}/>
        <Route exact path='/edit'element={<Edit/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
import { Route, Routes } from 'react-router-dom';
import WorksPage from './components/WorksPage/WorksPage';
import IndexPage from './components/IndexPage/IndexPage';
import CairoAbstractPage from './components/CairoAbstractPage/CairoAbstractPage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<IndexPage />} exact/>
      <Route path='/works' element={<WorksPage />} exact/>
      <Route path='/works/cairo-abstract' element={<CairoAbstractPage />} exact/>

    </Routes>
    </div>
  );
}

export default App;

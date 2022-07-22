import { Route, Routes } from 'react-router-dom';
import WorksPage from './components/WorksPage/WorksPage';
import IndexPage from './components/IndexPage/IndexPage';
import CairoAbstractPage from './components/CairoAbstractPage/CairoAbstractPage';
import SlideshowTest from './components/CairoAbstractPage/SlideshowTest';
import PowerStrugglesPage from './components/PowerStrugglesPage/PowerStrugglesPage';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<IndexPage />} exact/>
      <Route path='/works' element={<WorksPage />} exact/>
      <Route path='/works/cairo-abstracts' element={<CairoAbstractPage />} exact/>
      <Route path='/works/power-struggles' element={<PowerStrugglesPage />} exact/>
      <Route path='/slideshow' element={<SlideshowTest />} exact/>
    </Routes>
    </div>
  );
}

export default App;

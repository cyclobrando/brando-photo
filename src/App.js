import { Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage/IndexPage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<IndexPage />} exact/>


    </Routes>
    </div>
  );
}

export default App;

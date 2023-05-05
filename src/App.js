import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import { BrowserRouter, Route, Routes, Link, useNavigate} from 'react-router-dom';
import Project from './components/Project';

function App() {
  return (
    <BrowserRouter>
      <div className='blackBg'>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/member" element={<Member />} />
          <Route path="/indi/:name" element={<Individual />} />
  <Route path="/project" element={<Project />} />*/}
          <Route path="/projects" element={<Project/>}/>
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;

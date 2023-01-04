import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Search from './Pages/Search';
import ClassFilter from './Components/Filter/Class';
import QualityFilter from './Components/Filter/Quality';
import RaceFilter from './Components/Filter/Race';
import SetFilter from './Components/Filter/Set';
import TypeFilter from './Components/Filter/Type';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header/>
      <Routes>
        <Route path='/' element={
                <div className='h-full bg-amber-900'>
                main section my friend
              </div>
        } />
        <Route path='/search/*' element={<Search />}>
          <Route path='class' element={<ClassFilter/>}/>
          <Route path='quality' element={<QualityFilter/>}/>
          <Route path='race' element={<RaceFilter/>}/>
          <Route path='set' element={<SetFilter/>}/>
          <Route path='type' element={<TypeFilter/>}/>
        </Route>
        <Route path='/filter' element={<div>bro its a test bro</div>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

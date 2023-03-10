import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Search from './Pages/Search';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header/>
      <div className='flex flex-grow flex-col bg-stone-500'>
        <Routes>
          <Route path='/' element={
                  <div className='h-full bg-amber-900'>
                  main section my friend
                </div>
          } />
          <Route path='/search/:type' element={<Search />} />
          <Route path='/filter' element={<div>bro its a test bro</div>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

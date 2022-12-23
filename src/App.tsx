import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';

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
        <Route path='/filter' element={<div>bro its a test bro</div>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header/>
      <div className='h-full bg-amber-900'>
        main section my friend
      </div>
      <Footer/>
    </div>
  );
}

export default App;

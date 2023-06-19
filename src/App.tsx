import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow flex-col bg-stone-700">
        <AppRouter />
      </div>
      <Footer />
    </div>
  );
}

export default App;

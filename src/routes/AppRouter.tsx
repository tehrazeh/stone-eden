import { Route, Routes } from "react-router-dom";
import CardPage from "../Pages/CardPage";
import NotFound from "../Pages/NotFound";
import Search from "../Pages/Search";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<div className="bg-amber-900">main section my friend</div>}
      />
      <Route path="/search/:type" element={<Search />} />
      <Route path="/filter" element={<div>bro its a test bro</div>} />
      <Route path="*" element={<NotFound />} />
      <Route path="/card/:id" element={<CardPage />} />
    </Routes>
  );
};

export default AppRouter;

import { Route, Routes } from "react-router-dom";
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
    </Routes>
  );
};

export default AppRouter;

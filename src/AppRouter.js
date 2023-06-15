import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Error from "pages/Error";
import Layout from "components/Layout";
import Search from "pages/Search";
import Genre from "pages/Genre";

function AppRouter() {
  return (
    <ErrorBoundary fallback={<Error isErrorPage />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/genres/:genreId" element={<Genre />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default AppRouter;

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageFooter, PageHeader } from "./components";

// Lazy load the pages
const Home = lazy(async () => ({
  default: (await import(/* webpackChunkName: "route-home" */ "./pages")).Home,
}));
const Products = lazy(async () => ({
  default: (await import(/* webpackChunkName: "route-products" */ "./pages"))
    .Products,
}));

function App() {
  return (
    <>
      <PageHeader />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Suspense>
      </Router>
      <PageFooter />
    </>
  );
}

export default App;

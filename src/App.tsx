import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { Footer } from "./layout/components/footer";
import { Header } from "./layout/components/header";
import { PageLoader } from "./components/PageLoader";
import { routeConfig } from "./shared/config/routeConfig/routeConfig";

function App() {
  const routes = useRoutes(routeConfig);

  return (
    <Suspense fallback={<PageLoader />}>
      <Header />
      <main className="container">{routes}</main>
      <Footer />
    </Suspense>
  );
}

export default App;

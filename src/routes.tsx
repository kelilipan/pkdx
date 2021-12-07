import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "pages/home";
import PokemonDetail from "pages/pokemon-detail";
import MyPokemon from "pages/my-pokemon";
import NotFound from "pages/404";
import { useEffect } from "react";
import { useLocation } from "react-router";
import About from "pages/about";

const Routes = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== "/") {
      window.scroll(0, 0);
    }
  }, [location]);

  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
      <Route path="/my-pokemon" element={<MyPokemon />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;

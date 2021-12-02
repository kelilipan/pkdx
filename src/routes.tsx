import { Routes as ReactRoutes, Route } from "react-router-dom";
import Home from "pages/home";
import PokemonDetail from "pages/pokemon-detail";
import MyPokemon from "pages/my-pokemon";
import NotFound from "pages/404";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<PokemonDetail />} />
      <Route path="/my-pokemon" element={<MyPokemon />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;

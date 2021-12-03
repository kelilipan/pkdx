import { ThemeProvider } from "@emotion/react";
import NavigationMenu from "components/navigation-menu";
import Routes from "routes";
import { theme } from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <NavigationMenu />
    </ThemeProvider>
  );
}

export default App;

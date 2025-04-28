import "./App.css";
import { Header, MainContent } from "./components/index";
import { createTheme, ThemeProvider } from "@mui/material";
import { textSecondaryColor } from "./utils";

const theme = createTheme({
  typography: {
    p: {
      color: textSecondaryColor, // Set h2 text color to black
      fontSize: "1rem",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;

import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";
import { initialState, playerReducer } from "context/playerReducer";
import { PlayerContext, PlayerDispatchContext } from "context/playerContext";
import { theme } from "styles/Theme";
import Home from "pages/Home";
import { GlobalStyles } from "styles/Global";
import Header from "components/Header";
import Player from "components/Player";
import Search from "pages/Search";

// Import skeleton loader css
import "react-loading-skeleton/dist/skeleton.css";

// Import react tostify css
import "react-toastify/dist/ReactToastify.css";

// Import rc-slider css
import "rc-slider/assets/index.css";

function App() {
  const [state, dispatch] = useReducer(playerReducer, initialState);

  return (
    <PlayerContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={theme}>
          <SkeletonTheme
            baseColor={theme.colors.secondaryBlack}
            highlightColor={theme.colors.lightWhite}
          >
            <GlobalStyles />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
            </Routes>
            <Player />
            <ToastContainer
              position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </SkeletonTheme>
        </ThemeProvider>
      </PlayerDispatchContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;

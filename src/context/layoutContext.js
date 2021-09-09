import React, { useCallback, useEffect } from "react";
import { createContext, useState } from "react";

const LayoutContext = createContext({
  darkMode: true,
  setDarkTheme: isDark => {},
  isScrolled: false,
  setIsScrolled: (scrolled) => {},
  windowWidth: null
});

export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

export const LayoutContextProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [width, setWidth] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const setThemeHandler =useCallback(isDarkTheme => {
    setDarkTheme(isDarkTheme)
  }, []);

  const setIsScrolledHandler = useCallback((scrolled) => {
    setScrolled(scrolled);
  }, []);

  const context = {
    darkMode: darkTheme,
    setDarkTheme: setThemeHandler,
    isScrolled: scrolled,
    setIsScrolled: setIsScrolledHandler,
    windowWidth: width
  };

  return (
    <LayoutContext.Provider value={context}>{props.children}</LayoutContext.Provider>
  );
};

export default LayoutContext;

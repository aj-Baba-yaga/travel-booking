import { createContext, useContext } from "react";

const RegionContext = createContext({ region: "US" });

export function RegionProvider({ region, children }) {
  return (
    <RegionContext.Provider value={{ region }}>
      {children}
    </RegionContext.Provider>
  );
}

export function useRegion() {
  return useContext(RegionContext);
}

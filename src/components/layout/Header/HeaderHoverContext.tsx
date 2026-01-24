import { createContext, useContext, useState, type ReactNode } from "react";

interface HeaderHoverContextType {
  hoveredMenu: string | null;
  setHoveredMenu: (menu: string | null) => void;
}

const HeaderHoverContext = createContext<HeaderHoverContextType | undefined>(undefined);

export const HeaderHoverProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  return (
    <HeaderHoverContext.Provider value={{ hoveredMenu, setHoveredMenu }}>
      {children}
    </HeaderHoverContext.Provider>
  );
};

export const useHeaderHover = () => {
  const context = useContext(HeaderHoverContext);
  if (!context) throw new Error("useHeaderHover must be used within HeaderHoverProvider");
  return context;
};

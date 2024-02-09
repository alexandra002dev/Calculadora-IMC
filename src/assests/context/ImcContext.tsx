import { ReactNode, createContext, useState } from "react";
import { TypeLevels } from "../../helpers/imc";

type ImcContextType = {
  showItem: TypeLevels | null;
  setShowItem: React.Dispatch<React.SetStateAction<TypeLevels | null>>;
  altura: number | null;
  setAltura: React.Dispatch<React.SetStateAction<number | null>>;
  peso: number | null;
  setPeso: React.Dispatch<React.SetStateAction<number | null>>;
};

type Props = { children: ReactNode };

export const ImcContext = createContext<ImcContextType | null>(null);
export const ImcProvides = ({ children }: Props) => {
  const [showItem, setShowItem] = useState<TypeLevels | null>(null);
  const [altura, setAltura] = useState<number | null>(0);
  const [peso, setPeso] = useState<number | null>(0);
  return (
    <ImcContext.Provider
      value={{ setShowItem, showItem, altura, setAltura, peso, setPeso }}
    >
      {children}
    </ImcContext.Provider>
  );
};

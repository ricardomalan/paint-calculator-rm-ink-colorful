import { useState, createContext, useContext } from 'react';
import { QUANTIDADE_PAREDES } from './rules';

const dataContext = createContext();

export const NOVA_PAREDE = (id) => {
  return {
    id,
    tamanho: 0,
    tamanhoError: false,
    tamanhoDisponivel: 0,
    tamanhoDisError: false,
    comprimento: 0,
    altura: 0,
    alturaError: false,
    janelas: 0,
    janelasError: false,
    portas: 0,
    portasError: false,
    tinta: 0,
    ok: false,
  };
};

export default function Paredes({ children }) {
  const [totalParede, setTotalParede] = useState(0);
  const [paredes, setParedes] = useState([]);

  if (paredes.length < QUANTIDADE_PAREDES)
    setParedes((paredes) => [...paredes, NOVA_PAREDE(paredes.length)]);

  return (
    <dataContext.Provider
      value={{ paredes, setParedes, totalParede, setTotalParede }}
    >
      {children}
    </dataContext.Provider>
  );
}

export function useParedeData() {
  const contextParede = useContext(dataContext);
  if (!contextParede)
    throw new Error('useParedeData must be used within a Paredes provider');
  const { paredes, setParedes, totalParede, setTotalParede } = contextParede;
  return { paredes, setParedes, totalParede, setTotalParede };
}

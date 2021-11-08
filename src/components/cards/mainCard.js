/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParedeData } from '../../config/walls';
import {
  ALTURA_MINIMA_PAREDE,
  TAMANHO_MAXIMO_PAREDE,
  TAMANHO_JANELA,
  TAMANHO_PORTA,
} from '../../config/rules';
import Parede from './wall';
import Janela from './window';
import Porta from './door';

function Card({ paredeId }) {
  const { paredes, setParedes } = useParedeData();

  const quantidadeDeTintaPorParede =
    paredes[paredeId].tamanho -
    (paredes[paredeId].janelas * TAMANHO_JANELA +
      paredes[paredeId].portas * TAMANHO_PORTA);

  useEffect(() => {
    setParedes(
      [...paredes],
      (paredes[paredeId].tinta = quantidadeDeTintaPorParede)
    );
  }, [
    paredes[paredeId].tamanho,
    paredes[paredeId].tamanhoDisponivel,
    paredes[paredeId].janelas,
    paredes[paredeId].portas,
  ]);

  return (
    <div
      className={`card ${
        paredes[paredeId].tamanhoError && 'border border-danger'
      }`}
    >
      <div className="card-body">
        <h2 className="card-title">Wall {paredeId + 1}</h2>
        <h3>Size: {paredes[paredeId].tamanho.toFixed(2)}m²</h3>
        <br />
        <Parede paredeId={paredeId} />
        <br />
        {paredes[paredeId].tamanho >= ALTURA_MINIMA_PAREDE &&
        paredes[paredeId].tamanho <= TAMANHO_MAXIMO_PAREDE &&
        !paredes[paredeId].tamanhoError ? (
          <React.Fragment>
            <h4>Add</h4>
            <Janela paredeId={paredeId} />
            <Porta paredeId={paredeId} />
          </React.Fragment>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Card;

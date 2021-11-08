import React from 'react';
import { useParedeData } from '../../config/walls';
import {
  TAMANHO_MAXIMO_PAREDE,
  TAMANHO_MINIMO_PAREDE,
  ALTURA_MINIMA_PAREDE,
} from '../../config/rules';
import { InputAdornment, Input, Collapse } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

function Parede({ paredeId }) {
  const { paredes, setParedes } = useParedeData();

  function resetItens() {
    setParedes([...paredes], (paredes[paredeId].janelas = 0));
    setParedes([...paredes], (paredes[paredeId].portas = 0));
    setParedes([...paredes], (paredes[paredeId].janelasError = false));
    setParedes([...paredes], (paredes[paredeId].portasError = false));
  }

  function atualizarMetrosQuadrados() {
    const totalDeMetrosQuadrados =
      paredes[paredeId].comprimento * paredes[paredeId].altura;
    if (
      totalDeMetrosQuadrados <= TAMANHO_MAXIMO_PAREDE &&
      totalDeMetrosQuadrados >= TAMANHO_MINIMO_PAREDE
    ) {
      setParedes(
        [...paredes],
        (paredes[paredeId].tamanho = totalDeMetrosQuadrados)
      );
      setParedes(
        [...paredes],
        (paredes[paredeId].tamanhoDisponivel = totalDeMetrosQuadrados / 2)
      );
      setParedes([...paredes], (paredes[paredeId].tamanhoError = false));
    } else {
      setParedes([...paredes], (paredes[paredeId].tamanhoError = true));
    }
  }

  function adicionarAltura(tamanho) {
    resetItens();
    if (tamanho >= ALTURA_MINIMA_PAREDE) {
      setParedes(
        [...paredes],
        (paredes[paredeId].altura = parseFloat(tamanho))
      );
      setParedes([...paredes], (paredes[paredeId].alturaError = false));
    } else {
      setParedes([...paredes], (paredes[paredeId].alturaError = true));
    }
    atualizarMetrosQuadrados();
  }

  function adicionarComprimento(tamanho) {
    resetItens();
    setParedes(
      [...paredes],
      (paredes[paredeId].comprimento = parseFloat(tamanho))
    );
    atualizarMetrosQuadrados();
  }

  return (
    <React.Fragment>
      <Collapse in={paredes[paredeId].tamanhoError}>
        <Alert severity="error">
          Maximum size <strong>{TAMANHO_MAXIMO_PAREDE}m²</strong>
          <br />
          Minimum size <strong>{TAMANHO_MINIMO_PAREDE}m²</strong>
        </Alert>
      </Collapse>
      <div className="input-div">
        <Input
          id="standard-adornment-weight"
          onChange={(e) => adicionarAltura(e.target.value)}
          type="number"
          placeholder="Height"
          endAdornment={<InputAdornment position="end">M</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
            min: '0',
          }}
        />
        <Collapse className="colapse" in={paredes[paredeId].alturaError}>
          <span className="alert text-danger">
            Minimum height {ALTURA_MINIMA_PAREDE}
          </span>
        </Collapse>
        <Input
          id="standard-adornment-weight"
          onChange={(e) => adicionarComprimento(e.target.value)}
          type="number"
          placeholder="Length"
          min="0"
          endAdornment={<InputAdornment position="end">M</InputAdornment>}
          aria-describedby="standard-weight-helper-text"
          inputProps={{
            'aria-label': 'weight',
            min: '0',
          }}
        />
        <br />
      </div>
    </React.Fragment>
  );
}

export default Parede;

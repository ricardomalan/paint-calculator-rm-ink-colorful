import { useState } from 'react';
import { useParedeData } from '../../config/walls';
import { ALTURA_MINIMA_PAREDE, TAMANHO_PORTA } from '../../config/rules';
import { IconButton, Collapse } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';

function Porta({ paredeId }) {
  const [open, setOpen] = useState(false);
  const { paredes, setParedes } = useParedeData();

  function adicionarPorta() {
    if (
      paredes[paredeId].tamanhoDisponivel >= TAMANHO_PORTA &&
      paredes[paredeId].altura >= ALTURA_MINIMA_PAREDE
    ) {
      setParedes([...paredes], paredes[paredeId].portas++);
      setParedes(
        [...paredes],
        (paredes[paredeId].tamanhoDisponivel -= TAMANHO_PORTA)
      );
      setOpen(false);
    } else {
      setParedes([...paredes], (paredes[paredeId].portasError = true));
      setOpen(true);
    }
  }

  function removerPorta() {
    if (paredes[paredeId].portas !== 0) {
      setParedes([...paredes], paredes[paredeId].portas--);
      setParedes(
        [...paredes],
        (paredes[paredeId].tamanhoDisponivel += TAMANHO_PORTA)
      );
      setParedes([...paredes], (paredes[paredeId].portasError = false));
      setOpen(false);
    }
  }

  return (
    <div className="add-item">
      {
        <Collapse in={open}>
          <Alert
            severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Insufficient space!
          </Alert>
        </Collapse>
      }
      <IconButton size="medium">
        <RemoveCircleIcon
          fontSize="inherit"
          className="sub"
          onClick={() => removerPorta()}
        />
      </IconButton>
      <span className="item">
        {paredes[paredeId].portas > 0 ? 'Doors ' : 'Door '}[
        {paredes[paredeId].portas}]
      </span>
      <IconButton size="medium">
        <AddCircleIcon
          fontSize="inherit"
          className="add"
          onClick={() => adicionarPorta()}
        />
      </IconButton>
      <br />
      <h6 className="tamanho-porta">{TAMANHO_PORTA}m²</h6>
    </div>
  );
}

export default Porta;

import { useState } from 'react';
import { useParedeData } from '../../config/walls';
import { TAMANHO_JANELA, COMPRIMENTO_MINIMO } from '../../config/rules';
import { IconButton, Collapse } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';

function Janela({ paredeId }) {
  const [open, setOpen] = useState(false);
  const { paredes, setParedes } = useParedeData();

  function adicionarJanela() {
    if (
      paredes[paredeId].tamanhoDisponivel >= TAMANHO_JANELA &&
      paredes[paredeId].comprimento >= COMPRIMENTO_MINIMO
    ) {
      setParedes([...paredes], paredes[paredeId].janelas++);
      setParedes(
        [...paredes],
        (paredes[paredeId].tamanhoDisponivel -= TAMANHO_JANELA)
      );
      setParedes([...paredes], (paredes[paredeId].janelasError = false));
      setOpen(false);
    } else {
      setParedes([...paredes], (paredes[paredeId].janelasError = true));
      setOpen(true);
    }
  }

  function removerJanela() {
    if (paredes[paredeId].janelas !== 0) {
      setParedes([...paredes], paredes[paredeId].janelas--);
      setParedes(
        [...paredes],
        (paredes[paredeId].tamanhoDisponivel += TAMANHO_JANELA)
      );
      setParedes([...paredes], (paredes[paredeId].janelasError = false));
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
          onClick={() => removerJanela()}
        />
      </IconButton>
      <span className="item">
        {paredes[paredeId].janelas > 0 ? 'Windows ' : 'Window '}[
        {paredes[paredeId].janelas}]
      </span>
      <IconButton size="medium">
        <AddCircleIcon
          fontSize="inherit"
          className="add"
          onClick={() => adicionarJanela()}
        />
      </IconButton>
      <br />
      <h6 className="tamanho-janela">{TAMANHO_JANELA.toFixed(2)}m²</h6>
    </div>
  );
}

export default Janela;

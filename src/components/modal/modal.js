import React from 'react';
import { useParedeData } from '../../config/walls';
import { makeStyles } from '@material-ui/core/styles';
import { ALTURA_MINIMA_PAREDE, LITRO_TINTA, LATAS } from '../../config/rules';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import latatinta from '../../assets/lata-tinta.png';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const { paredes, setParedes, totalParede, setTotalParede } = useParedeData();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    let abrir = true;
    for (let i in paredes) {
      if (
        paredes[i].tamanho < ALTURA_MINIMA_PAREDE ||
        paredes[i].tamanhoError ||
        paredes[i].alturaError
      ) {
        setParedes([...paredes], (paredes[i].tamanhoError = true));
        abrir = false;
      }
    }
    if (abrir) {
      setOpen(true);
    }
    somartotalParede();
  };

  const handleClose = () => {
    setOpen(false);
  };

  function somartotalParede() {
    let paredesTotal = 0;

    for (let i in paredes) {
      paredesTotal += paredes[i].tinta;
      if (paredes[i].tamanho < ALTURA_MINIMA_PAREDE) {
        setParedes([...paredes], (paredes[i].tamanhoError = true));
      }
    }
    let totalTinta = paredesTotal / LITRO_TINTA;
    setTotalParede(totalTinta);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        className="btn btn-dark btn-lg btn-block"
      >
        Calculate
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper + ' modal-customization'}>
            <h2
              id="transition-modal-title"
              className="alert btn-light info"
              role="alert"
            >
              Total ink
            </h2>
            <p id="transition-modal-description" className="text-info-modal">
              You will need <strong>{totalParede.toFixed(2)} liters</strong> of
              paint to paint the room.
            </p>
            <ul className="list-group">
              <li className="list-group-item list-group-item-secondary">
                <h5 className="info">Can options</h5>
              </li>
              {LATAS.map((lata) => (
                <li key={lata.lata} className="list-group-item">
                  <h5>
                    <img
                      src={latatinta}
                      className="img-tinta"
                      alt="lata-de-tinta"
                      width="64px"
                      height="64px"
                    />
                    {totalParede / lata.quantidade >
                    Math.round(totalParede / lata.quantidade)
                      ? ` ${Math.round(totalParede / lata.quantidade) + 1} `
                      : ` ${Math.round(totalParede / lata.quantidade)} `}
                    {Math.round(totalParede / lata.quantidade) > 1
                      ? 'Cans '
                      : 'Tin '}
                    of {lata.quantidade} Liters.
                  </h5>
                </li>
              ))}
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

import { useParedeData } from '../../config/walls';
import Card from '../cards/mainCard';
import Modal from '../modal/modal';

function Body() {
  const { paredes } = useParedeData();

  return (
    <div className="body">
      {paredes.map((parede) => (
        <Card paredeId={parede.id} key={parede.id} />
      ))}
      <div className="div-modal">
        <Modal />
      </div>
    </div>
  );
}

export default Body;

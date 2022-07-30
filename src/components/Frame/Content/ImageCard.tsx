import EditButton from '../../UI/EditButton';
import './Content.css';

type Params = {
    data: any;
}

const ImageCard = (props: Params) => {
  return (
    <div className="image__card">
      <img className="image__card__content" src={props.data.filepath} alt={props.data.name}></img>
      <div className="image__card__name">{props.data.name}</div>
    </div>
  );
}

export default ImageCard;
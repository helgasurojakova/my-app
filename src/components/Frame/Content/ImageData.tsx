import ImageCard from './ImageCard';
import './Content.css';
import AddButton from '../../UI/AddButton';

type Params = {
  title: string;
  photos: any;
}

const ImageData = (props: Params) => {

    const images = props?.photos;

    return (
        <div className="images">
            <div className="images__title">
                <h2 className="images__title__text">{props.title}</h2>
            </div>
            <div className="images__cards">
                {images?.map((i:any) => <ImageCard key={i} data={i}/>)}
            </div>
            <AddButton/>
        </div>
  );
}

export default ImageData;
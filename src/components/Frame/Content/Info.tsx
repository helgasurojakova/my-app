import EditButton from '../../UI/EditButton';
import './Content.css';

type Params = {
  title: string;
  name: string;
  issue_date: Date;
  no: string;
  businessEntity: string;
  type: any;
}

const Info = (props: Params) => {

  const fields = [props.name, `${props.no} от ${props.issue_date}`, props.businessEntity, `${props.type}`];

  return (
    <div className="info">
      <div className="info__title">
        <h2 className="info__title__text">{props.title}</h2>
        <EditButton/>
      </div>
      <div className="info__properties">
        <div className="info__properties__names">
        {['Полное название', 'Договор', 'Форма', 'Тип'].map((i:string) => <div key={i}>{i}:</div>)}
        </div>
        <div className="info__properties__values">
        {fields.map((i:any) => <div key={i}>{i}</div>)}
        </div>
      </div>
    </div>
  );
}

export default Info;
import EditButton from '../../UI/EditButton';
import './Content.css';

type Params = {
  title: string;
  firstname: string;
  lastname: string;
  patronymic: string;
  phone: number;
  email: string;
}

const ContactData = (props: Params) => {

    const fields = [`${props.lastname} ${props.firstname} ${props.patronymic}`, `+${props.phone}`, `${props.email}`];

    return (
        <div className="contact">
        <div className="contact__title">
            <h2 className="contact__title__text">{props.title}</h2>
            <EditButton/>
        </div>
        <div className="contact__properties">
            <div className="contact__properties__names">
            {['ФИО', 'Телефон', 'Эл.почта'].map((i:string) => <div key={i}>{i}:</div>)}
            </div>
            <div className="contact__properties__values">
            {fields.map((i:any) => <div key={i}>{i}</div>)}
            </div>
        </div>
        </div>
  );
}

export default ContactData;
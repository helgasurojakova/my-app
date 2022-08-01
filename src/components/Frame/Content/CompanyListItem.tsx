import './Content.css';

type Params = {
    onClick: any;
}


function CompanyListItem(props:Params) {

    return (
        <div className="companies__item__wrapper" onClick={props.onClick}>
            <div className="companies__item">
              Перспективные захоронения
            </div>
      </div>
    );
  }
  
  export default CompanyListItem;
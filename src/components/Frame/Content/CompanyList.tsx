import CompanyListItem from './CompanyListItem';
import './Content.css';
import { useNavigate } from 'react-router-dom';

function CompanyList() {

  const navigate = useNavigate()

  const handleClick = (event:React.MouseEventHandler<HTMLDivElement>) => {
    navigate(`/companies/:${12}`)
  }
    return (
      <div className="companies">
        <CompanyListItem onClick={handleClick}/>
      </div>
    );
  }
  
  export default CompanyList;
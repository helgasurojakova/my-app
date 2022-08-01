import Frame from '../components/Frame/Frame';
import '../App.css';

function CompanyPage() {
    return (
        <Frame companyId={12} contactId={16} auth={localStorage.getItem('key')}/>
    );
}
  
  export default CompanyPage;
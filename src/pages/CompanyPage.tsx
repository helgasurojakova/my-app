import { useState } from 'react';
import CompanyList from '../components/Frame/Content/CompanyList';
import Frame from '../components/Frame/Frame';
import '../App.css';
import { API } from '../API/Service';


function CompanyPage() {
    return (
        <Frame companyId={12} contactId={16} auth={localStorage.getItem('key')}/>
    );
}
  
  export default CompanyPage;
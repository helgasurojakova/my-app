import './Frame.css';
import FrameToolbar from './FrameToolbar';
import Info from './Content/Info';
import EditButton from '../UI/EditButton';
import { API } from '../../API/Service';
import { useEffect, useState } from 'react';
import { AxiosResponse } from "axios";
import ContactData from './Content/ContactData';
import ImageData from './Content/ImageData';

type Params = {
  companyId: number;
  contactId: number;
  auth: any;
}

function Frame(props:Params) {

  const [companyData, setCompanyData] = useState<AxiosResponse<any, any> | any>([]);
  const [contactData, setContactData] = useState<AxiosResponse<any, any> | any>([]);

  async function companyInfo (id:number, auth:any) {
    try {
      const response = await API.getCompany(id, auth);
      setCompanyData(response?.data)
    } catch (e) {
      console.log(e);
    }
  };

  async function contactInfo (id:number, auth:any) {
    try {
      const response = await API.getContact(id, auth);
      setContactData(response?.data)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    companyInfo(props.companyId, props.auth)
    contactInfo(props.contactId, props.auth)
  }, [])

  return (
    <div className="frame">
      <FrameToolbar path={'/companies/company'} data={companyInfo}/>
      <div className="frame__main-block">
        <div className="frame__main-block__title">
          <h1 className="frame__main-block__title__text">Перспективные захоронения</h1>
          <EditButton/>
        </div>
          <Info 
          title={'ОБЩАЯ ИНФОРМАЦИЯ'} 
          name={companyData?.name} 
          issue_date={companyData?.contract?.issue_date}
          no={companyData?.contract?.no}
          businessEntity={companyData?.businessEntity}
          type={companyData?.type}/>
          <ContactData
          title={'КОНТАКТНЫЕ ДАННЫЕ'}
          firstname={contactData?.firstname}
          lastname={contactData?.lastname}
          patronymic={contactData?.patronymic}
          phone={contactData?.phone}
          email={contactData?.email}
          />
          <ImageData
          title={'ПРИЛОЖЕННЫЕ ФОТО'}
          photos={companyData.photos}
          />
      </div>
    </div>
  );
}

export default Frame;
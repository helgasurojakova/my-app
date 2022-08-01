import DeleteButton from '../UI/DeleteButton';
import LinkButton from '../UI/LinkButton';
import RefreshButton from '../UI/RefreshButton';
import ReturnButton from '../UI/ReturnButton';
import './FrameToolbar.css';
import { useNavigate, useLocation } from 'react-router-dom';

type Params = {
  path: string
  data: any
}

function FrameToolbar(props:Params) {

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event:React.MouseEventHandler<HTMLDivElement>) => {
    navigate('/companies')
  }

  const сopyLinkToClipboard = (event:React.MouseEventHandler<HTMLDivElement>) => {
    navigator.clipboard.writeText(`http://localhost:3000${location.pathname}`);
    alert('Ссылка скопирована в буфер обмена')
  }

  return (
    <div className="frame-toolbar">
        <div className="frame-toolbar__content">
            <div className="frame-toolbar__content_left">
                <ReturnButton text={'К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ'} onClick={handleClick}/>
            </div>
            <div className="frame-toolbar__content_right">
                <LinkButton onClick={сopyLinkToClipboard}/>
                <RefreshButton/>
                <DeleteButton/>
            </div>
        </div>
    </div>
  );
}

export default FrameToolbar;
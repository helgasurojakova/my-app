import './Menu.css';
import { useContext, useState } from 'react';
import {useNavigate} from "react-router-dom";
import { AuthContext } from '../../context';
import Side from './Side';

function Menu() {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const navigate = useNavigate()
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  const handleClickLogout = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    localStorage.clear();
    setIsAuth(false);
    navigate("/auth")
  }

  const handleClickHome= (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsopen(false)
    navigate("/home")
  }

  const handleClickCompany = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    ToggleSidebar()
    navigate("/companies")
  }

  const handleClickSearch = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsopen(false)
    navigate("/search")
  }

  const handleClickSettings = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    alert('handleClickSettings')
  }

  const handleClickDialog = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    alert('handleClickDialog')
  }

  return (
    <div className="menu-side-wrapper">
      <div className="menu">
      <div className="menu__buttons">
        <div className="menu__buttons__upper-icons">
          <div onClick={handleClickHome} className="menu__buttons__upper-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1771 7.53932L18.6977 8.99703C18.9817 9.2693 19.0755 9.68874 18.9368 10.0656C18.798 10.4425 18.4601 10.686 18.076 10.686H16.7859V18.4431C16.7859 18.7507 16.5489 19 16.2566 19H11.8301H8.69918L8.16983 19H3.7432C3.45084 19 3.21385 18.7506 3.21385 18.443V10.686H1.92401C1.53985 10.686 1.202 10.4425 1.06324 10.0656C0.924514 9.68874 1.01835 9.2693 1.30227 8.99707L9.37829 1.25486C9.73263 0.915058 10.2672 0.915021 10.6217 1.2549L13.5 4.5L13.4581 2.70566C13.4581 2.39808 13.6951 2.14874 13.9874 2.14874H16.6477C16.9401 2.14874 17.1771 2.39811 17.1771 2.70566V7.53932Z" stroke="#F7F7F7" stroke-width="1.5" stroke-linejoin="round"/>
            <mask id="path-2-inside-1_1569_115" fill="white">
            <rect x="7.5" y="9.6925" width="5" height="6.34088" rx="1"/>
            </mask>
            <rect x="7.5" y="9.6925" width="5" height="6.34088" rx="1" stroke="#F7F7F7" stroke-width="2.6" mask="url(#path-2-inside-1_1569_115)"/>
            </svg>
          </div>
          <div onClick={handleClickCompany} className="menu__buttons__upper-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 11.035V16.6667H18.3334V18.3333H1.66671V16.6667H2.50004V11.035C1.98702 10.6926 1.56647 10.2288 1.27572 9.68479C0.98498 9.14081 0.833034 8.53346 0.833375 7.91666C0.833375 7.22749 1.02004 6.56332 1.36087 5.99749L3.62087 2.08332C3.69401 1.95664 3.79921 1.85145 3.92589 1.77831C4.05257 1.70517 4.19626 1.66666 4.34254 1.66666H15.6584C15.8047 1.66666 15.9484 1.70517 16.075 1.77831C16.2017 1.85145 16.3069 1.95664 16.38 2.08332L18.6317 5.98499C19.1288 6.81072 19.2886 7.79627 19.0779 8.73677C18.8671 9.67728 18.302 10.5004 17.5 11.035ZM15.8334 11.6433C15.2604 11.7076 14.6803 11.6388 14.1383 11.4422C13.5963 11.2456 13.1069 10.9266 12.7084 10.51C12.3586 10.8759 11.9382 11.1671 11.4727 11.366C11.0072 11.565 10.5063 11.6675 10 11.6675C9.49395 11.6677 8.99304 11.5655 8.52756 11.3668C8.06208 11.1681 7.64168 10.8772 7.29171 10.5117C6.89306 10.9281 6.40369 11.247 5.86167 11.4434C5.31965 11.6398 4.73961 11.7085 4.16671 11.6442V16.6667H15.8334V11.6442V11.6433ZM4.82421 3.33332L2.79671 6.84416C2.59969 7.33094 2.59378 7.87418 2.78015 8.36514C2.96653 8.8561 3.33144 9.25857 3.80186 9.49198C4.27228 9.7254 4.8135 9.77256 5.31719 9.624C5.82089 9.47545 6.2499 9.14216 6.51837 8.69082C6.79754 7.99332 7.78504 7.99332 8.06504 8.69082C8.21946 9.07784 8.48638 9.40966 8.83131 9.64341C9.17625 9.87716 9.58336 10.0021 10 10.0021C10.4167 10.0021 10.8238 9.87716 11.1688 9.64341C11.5137 9.40966 11.7806 9.07784 11.935 8.69082C12.2142 7.99332 13.2017 7.99332 13.4817 8.69082C13.5899 8.95703 13.7519 9.19799 13.9577 9.39855C14.1634 9.59912 14.4084 9.75495 14.6773 9.85626C14.9462 9.95756 15.2331 10.0022 15.5201 9.98723C15.807 9.9723 16.0878 9.89817 16.3447 9.76951C16.6016 9.64085 16.8292 9.46043 17.013 9.2396C17.1968 9.01877 17.333 8.76229 17.4129 8.4863C17.4929 8.21031 17.5149 7.92076 17.4775 7.63587C17.4401 7.35097 17.3443 7.07688 17.1959 6.83082L15.175 3.33332H4.82504H4.82421Z" fill="#F7F7F7"/>
            </svg>
          </div>
          <div onClick={handleClickSearch} className="menu__buttons__upper-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.60803" cy="8.60809" r="6.5" stroke="#F7F7F7" stroke-width="2"/>
            <path d="M4.6084 8.60809C4.6084 6.39895 6.39926 4.60809 8.6084 4.60809" stroke="#F7F7F7" stroke-linecap="round"/>
            <path d="M12.2474 14.4603L14.3688 12.339L17.9231 15.878C18.511 16.4634 18.5121 17.4149 17.9254 18.0016C17.3405 18.5865 16.3925 18.5875 15.8063 18.0039L12.2474 14.4603Z" fill="#F7F7F7"/>
            </svg>
          </div>   
        </div>  
        <div className="menu__buttons__bottom-icons">
        <div onClick={handleClickSettings} className="menu__buttons__bottom-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3555 8.36145L15.6154 8.02242C15.5476 7.81901 15.4572 7.63822 15.3894 7.4574L16.3838 5.98836C16.655 5.60416 16.5872 5.06172 16.2708 4.7227L15.3216 3.77347C14.9826 3.43448 14.4628 3.38928 14.056 3.66048L12.5871 4.6549C12.4063 4.56453 12.2029 4.4967 12.0221 4.42891L11.6831 2.68864C11.5701 2.21403 11.1633 1.875 10.6888 1.875H9.33276C8.85819 1.875 8.45139 2.21403 8.36102 2.66602L8.02202 4.40629C7.81862 4.47411 7.63785 4.56449 7.45703 4.63232L5.98809 3.63785C5.60388 3.36665 5.06151 3.43445 4.74513 3.75089L3.79593 4.70011C3.45696 5.0391 3.41176 5.55892 3.68294 5.96574L4.67734 7.43481C4.58694 7.6156 4.51911 7.81901 4.45133 7.9998L2.71117 8.33882C2.21401 8.45186 1.875 8.85864 1.875 9.33329V10.6893C1.875 11.1639 2.21401 11.5708 2.66596 11.6612L4.40612 12.0002C4.47395 12.2036 4.56431 12.3844 4.6321 12.5652L3.63774 14.0343C3.36656 14.4185 3.43435 14.9609 3.75073 15.2999L4.69989 16.2491C5.0389 16.5881 5.55868 16.6333 5.96547 16.3621L7.43445 15.3677C7.61522 15.4581 7.81862 15.5259 7.9994 15.5937L8.3384 17.3339C8.42881 17.8086 8.8356 18.125 9.31018 18.125H10.6888C11.1633 18.125 11.5701 17.786 11.6605 17.334L11.9995 15.5937C12.2029 15.5259 12.3837 15.4581 12.5645 15.3677L14.0334 16.3621C14.4176 16.6333 14.96 16.5656 15.299 16.2491L16.2482 15.2999C16.5872 14.9609 16.6324 14.4411 16.3612 14.0568L15.3668 12.5878C15.4572 12.407 15.525 12.2036 15.5928 12.0228L17.3329 11.6838C17.8075 11.5934 18.1239 11.1866 18.1239 10.712L18.1239 9.33329C18.1465 8.85865 17.8075 8.45187 17.3556 8.36145L17.3555 8.36145Z" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99951 7.64111C8.70404 7.64111 7.64062 8.70454 7.64062 9.99998C7.64062 11.2954 8.70404 12.3589 9.99951 12.3589C11.2949 12.3589 12.3584 11.2954 12.3584 9.99998C12.3584 8.70454 11.2949 7.64111 9.99951 7.64111Z" stroke="#F7F7F7" stroke-width="1.5"/>
            </svg>
        </div>
          <div onClick={handleClickDialog} className="menu__buttons__bottom-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.9">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6572 4.34506C14.1455 2.83417 12.1378 2 9.99944 2C7.86102 2 5.85334 2.83418 4.34172 4.34506C1.42571 7.25963 1.21454 11.9162 3.81213 15.072C3.4535 15.8057 3.03117 16.2948 2.55187 16.5293C2.26029 16.6734 2.09604 16.9883 2.14298 17.3099C2.19324 17.6348 2.44127 17.8861 2.7664 17.9364C2.94404 17.9632 3.13508 17.9799 3.33282 17.9799C4.31489 17.9799 5.34723 17.6416 6.20862 17.0486C7.36832 17.6717 8.67213 18 9.99943 18C12.1378 18 14.1455 17.1692 15.6571 15.6583C17.1688 14.1474 18 12.1374 18 10.0034C18 7.86936 17.1688 5.85595 15.6571 4.34507L15.6572 4.34506Z" stroke="#F7F7F7" stroke-width="1.5" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.2738 10H13.7266" stroke="#F7F7F7" stroke-miterlimit="22.9256" stroke-linecap="round"/>
            <path d="M6.2738 7.81241H13.7266" stroke="#F7F7F7" stroke-miterlimit="22.9256" stroke-linecap="round"/>
            <path d="M6.2738 12.1876H13.7266" stroke="#F7F7F7" stroke-miterlimit="22.9256" stroke-linecap="round"/>
            </g>
            </svg>
          </div>
          <div onClick={handleClickLogout} className="menu__buttons__bottom-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9569 5.55176L17.4052 10.0001L12.9569 14.4483" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.23401 10H16.7537" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.801 18.125H3.125V1.875H11.801" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
          </div>
        </div>
      </div>
      </div>
      <Side isOpen={isOpen}/>
    </div>
    
  );
}

export default Menu;

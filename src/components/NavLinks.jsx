import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCloudArrowUp,faTableColumns,faList,faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const NavLinks = () => {
  const navigateByUrl=useNavigate()
  return (
    <ul className="nav-links">
      <li>
      <button onClick={()=>navigateByUrl('/Dashboard')} className='btn mt-4'>
      <FontAwesomeIcon icon={faTableColumns} className='icon'/>
          <span className="title">Dashboard</span>
          </button>
        <span className="tooltip">Dashboard</span>
      </li>
      <li>
      <button onClick={()=>navigateByUrl('/Category')} className='btn mt-4'>
        <FontAwesomeIcon icon={faCloudArrowUp} className='icon'/>
          <span className="title">Categories</span>
          </button>
        <span className="tooltip">Categories</span>

      </li>
      <li>
      <button onClick={()=>navigateByUrl('/Product')} className='btn  mt-4'>
      <FontAwesomeIcon icon={faList} className='icon'/>
          <span className="title">Products</span>
          </button>
        <span className="tooltip">Products</span>
      </li>
      <li className='d-flex'>
      <button onClick={()=>navigateByUrl('/Account')} className='btn  mt-4'>
      <FontAwesomeIcon icon={faUser} className='icon'/>
      <span className="title">Account</span>
          </button>
        <span className="tooltip">Account</span>
      </li>
      <li className='d-flex'>
      <button onClick={()=>navigateByUrl('/Category')} className='btn  mt-4'>
      <FontAwesomeIcon icon={faRightFromBracket} className='icon'/>
      <span className="title">Logout</span>
          </button>
        <span className="tooltip">Logout</span>
      </li>
    </ul>
  );
};

export default NavLinks;

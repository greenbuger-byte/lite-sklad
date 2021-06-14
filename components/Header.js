
import style from '../styles/Header.module.scss';
import { Menu,  Avatar,  Dropdown } from 'antd';

const MenuC = ({logout})=>(
    <Menu>
      <Menu.Item onClick={logout} >
        <li target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Выйти
        </li>
      </Menu.Item>
      
    </Menu>
  );


const Header = ({login, logout}) => {

      
    return (
        <div className={style.header}>
            <div className="logo">
              <img  width={50} src={'/logo.svg'}   alt="logo"/>
            </div>
          
            
 <Dropdown overlay={<MenuC logout={logout} />} placement="bottomCenter" arrow>
   <div className={style.header__profile}><Avatar  src={login?.photoUrl}/> <h4 style={{paddingLeft: '20px'}}> {login?.displayName}</h4></div>
   </Dropdown>  
  
         
        </div>
    );
};

  

export default Header;
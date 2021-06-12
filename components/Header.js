import { useState } from 'react';
import Link from 'next/link'
import style from '../styles/Header.module.scss';
import { Menu, Input, Avatar, Image, Dropdown } from 'antd';
import { FileAddOutlined, WalletOutlined, HistoryOutlined, UnorderedListOutlined, MoreOutlined } from '@ant-design/icons';
import {ADD_PRODUCT_ROUTE, LIST_ROUTE, HISTORY_ROUTE} from '../utils/routers';

const menu = ()=>(
    <Menu>
      <Menu.Item>
        <li target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         Выйти
        </li>
      </Menu.Item>
      
    </Menu>
  );


const Header = () => {
    const [current, setCurrent] = useState('mail');
    const handleClick = e => {
        console.log('click ', e);
        setCurrent( e.key );
      };
      
    return (
        <div className={style.header}>
            <div className={style.header__left}>
                <h1><img  width={50} src={'/logo.svg'}   alt="logo"/> LITE-SKLAD</h1>
                <div>
            
            <ul className={style.header__menu}>
         <li>  <Link href={LIST_ROUTE}><a><UnorderedListOutlined />Список</a></Link></li> 
         <li>  <Link href={ADD_PRODUCT_ROUTE}><a><FileAddOutlined />Добавить</a></Link></li> 
         <li> <Link href={HISTORY_ROUTE}><a><HistoryOutlined/>История</a></Link></li> 
            </ul>
        </div>
            </div>
            <div className={style.header__middle}>
           
            </div>
            <div className={style.header__right}>
          
 <Dropdown overlay={menu} placement="bottomCenter" arrow><div className={style.header__profile}><Avatar  src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}/><h4>iwebchester@gmail.com</h4></div></Dropdown>  
            </div>
        </div>
    );
};

  

export default Header;
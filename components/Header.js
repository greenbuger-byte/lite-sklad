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
            <div className="logo">
              <img  width={50} src={'/logo.svg'}   alt="logo"/>
            </div>
            
            <Menu mode="horizontal" defaultSelectedKeys={[2]}>
              <Link href={LIST_ROUTE}><a><Menu.Item key={1} ><UnorderedListOutlined />Список </Menu.Item></a></Link>
              <Link href={ADD_PRODUCT_ROUTE}><a><Menu.Item key={2}><FileAddOutlined />Добавить</Menu.Item></a></Link>
              <Link href={HISTORY_ROUTE}><a><Menu.Item key={3}><HistoryOutlined/>История </Menu.Item></a></Link>
            </Menu>
            
 <Dropdown overlay={menu} placement="bottomCenter" arrow><div className={style.header__profile}><Avatar  src={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}/><h4>iwebchester@gmail.com</h4></div></Dropdown>  
  
         
        </div>
    );
};

  

export default Header;
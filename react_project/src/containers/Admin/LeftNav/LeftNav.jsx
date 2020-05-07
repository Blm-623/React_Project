import React, { Component } from 'react'
import { Menu } from 'antd';
import menus from '@/config/menu_config'
import {Link,withRouter} from 'react-router-dom'


import './css/leftNav.less'
import logo from '@/assets/images/logo.png'
const { SubMenu,Item } = Menu;


@withRouter
 class LeftNav extends Component {
  // 根据配置循环创建菜单
  createMenu=(menuArr)=>{
    return menuArr.map((menuObj)=>{
     if (!menuObj.children) {
      return (
        
        <Item key={menuObj.key} >
          <Link to={menuObj.path} style={{color:"white"}} >
          <menuObj.icon/>
          {menuObj.title}
          </Link>
       </Item>
      )
     }else{
       return (
        //  打死也得记住。。。
         <SubMenu 
          key ={menuObj.key} 
          icon={<menuObj.icon/>} 
          title={menuObj.title}
          style={{color:"white"}}
         >
           {this.createMenu(menuObj.children)}
         </SubMenu>
       )
     }
    })

  }
  render() {
    const {pathname} = this.props.location
    const chekey = pathname.split('/').splice(-1)
    // const chekey = pathname.split('/')[2]
    const chekeyy = pathname.split('/').splice(-2)[0]
    // const openkey = pathname.split('/') //老师的
    console.log(chekeyy);
    return (
      <div className="left-nav">
        <div className="left-top">
          <img src={logo} alt=""/>
          <h1>商品管理系统</h1>
        </div>
        <div className="left-bottom">
          <div>
        
          <Menu
            defaultSelectedKeys={chekey}//默认选中哪个菜单
            defaultOpenKeys={[chekeyy]}//默认展开哪个菜单
            // defaultOpenKeys={openkey}//默认展开哪个菜单
            mode="inline"//菜单模式
            theme="dark"//菜单主题
          >

            {this.createMenu(menus)}
           
          </Menu>
        </div>
        </div>
      </div>
    )
  }
}
export default LeftNav

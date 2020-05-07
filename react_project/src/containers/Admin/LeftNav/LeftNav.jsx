import React, { Component } from 'react'
import { Menu } from 'antd';
import menus from '@/config/menu_config'



import './css/leftNav.less'
import logo from '@/assets/images/logo.png'
const { SubMenu,Item } = Menu;
export default class LeftNav extends Component {
  // 根据配置循环创建菜单
  createMenu=(menuArr)=>{
    return menuArr.map((menuObj)=>{
     if (!menuObj.children) {
      return (
        <Item key={menuObj.key} icon={<menuObj.icon/>}>
              {menuObj.title}
       </Item>
      )
     }else{
       return (
        //  打死也得记住。。。
         <SubMenu key ={menuObj.key} icon={<menuObj.icon/>} title={menuObj.title}>
           {this.createMenu(menuObj.children)}
         </SubMenu>
       )
     }
    })

  }
  render() {
    return (
      <div className="left-nav">
        <div className="left-top">
          <img src={logo} alt=""/>
          <h1>商品管理系统</h1>
        </div>
        <div className="left-bottom">
          <div>
        
          <Menu
            defaultSelectedKeys={['home']}//默认选中哪个菜单
            defaultOpenKeys={[]}//默认展开哪个菜单
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

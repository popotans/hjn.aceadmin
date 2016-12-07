<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Menu.aspx.cs" Inherits="YWJiXiao.App.WebForm.admin2.Menu" %>

 [
                {
                id: '1',
                text: '设定管理',
                icon: 'icon-cog',
                url: '',
                menus: [{
                    id: '11',
                    text: '编码管理',
                    icon: 'icon-glass',
                    url: '/bianmaguanli.html'
                }]
            }, {
                id: '2',
                text: '考核管理',
                icon: 'icon-leaf',
                url: '',
                menus: [{
                    id: '21',
                    text: '数据导出',
                    icon: 'icon-glass',
                    url: '/admin2/zhengtaifenbu.aspx'
                }, {
                    id: '22',
                    text: '调整审批链',
                    icon: 'icon-glass',
                    url: '/admin2/tiaozhengshenpilian.aspx'
                }, {
                    id: '24',
                    text: '正态分布管理',
                    icon: 'icon-glass',
                    url: '/admin2/zhengtaifenbu.aspx'
                }, {
                    id: '23',
                    text: '物料维护',
                    icon: 'icon-glass',
                    url: '/Model/Index'
                }
]
            }, {
                id: '3',
                text: '系统管理',
                icon: 'icon-user',
                url: '',
                menus: [{
                    id: '31',
                    text: '员工管理',
                    icon: 'icon-user',
                    url: '/admin2/EmployeeList.aspx'
                }, {
                    id: '32',
                    text: '正态分布管理',
                    icon: 'icon-apple',
                    url: '/SystemSetting/Role'
                }, {
                    id: '33',
                    text: '菜单管理',
                    icon: 'icon-list',
                    url: '/SystemSetting/Menu'
                }, {
                    id: '34',
                    text: '部门管理',
                    icon: 'icon-glass',
                    url: '/SystemSetting/Department'
                }]
            }
]

<%--, {
                id: '4',
                text: '订单管理',
                icon: 'icon-envelope',
                url: '',
                menus: [ ]
            }--%>
import {ISidebarMenu} from 'shared/component/app-sidebar/app-sidebar.component';

export const menus: ISidebarMenu[] = [{
    icon: 'fa-home', // icon for menu icon
    text: '自定义配置', // text for menu name
    childMenus: [{
        link: '/home/custom-app', // link for route navigate
        text: 'APP配置'
    },{
        link: '/home/custom-list', // link for route navigate
        text: '列表配置'
    },{
        link: '/home/custom-form', // link for route navigate
        text: '表单配置'
    }]
}, {
    icon: 'fa-plus',
    text: '新APP',
    link: '/new-app'
}, {
    icon: 'fa-cubes',
    text: 'README',
    link: '/home/page-handbook'
}];
import {ISidebarMenu} from 'shared/component/app-sidebar/app-sidebar.component';

export const menus: ISidebarMenu[] = [{
    icon: 'fa-home', // icon for menu icon
    text: 'Page Manage', // text for menu name
    childMenus: [{
        link: '/home/custom-app', // link for route navigate
        text: 'Custom App'
    },{
        link: '/home/custom-list', // link for route navigate
        text: 'Custom List'
    },{
        link: '/home/custom-form', // link for route navigate
        text: 'Custom Form'
    }]
}, {
    icon: 'fa-plus',
    text: 'New App',
    link: '/new-app'
}, {
    icon: 'fa-cubes',
    text: 'README',
    link: '/home/page-handbook'
}];
import {Component, ElementRef, Input} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import 'rxjs/Rx';

export interface IMenu {
    text: string; // menu text
    link?: any; // menu router link
}

export interface ISidebarMenu extends IMenu {
    icon?: string; // menu icon class
    childMenus?: IMenu[]; // link and childMenus cannot use together
}

@Component({
    selector: 'app-sidebar',
    templateUrl: './app-sidebar.component.html',
})
export class AppSidebarComponent {
    @Input() menus: ISidebarMenu[] = [];

    constructor(private route: ActivatedRoute, private router: Router, el: ElementRef) {
        this.router.events.subscribe(event => {
            // route navigate end
            if (event instanceof NavigationEnd) {
                const $menu = $(el.nativeElement).find('#app-sidebar-menu');
                this.menus.forEach((menu, index) => {
                    if (this.isChildMenuActived(menu)) {
                        // actived link add class 'active'
                        $menu.find('li.topper-menu').eq(index).addClass('active');
                    }
                });
                // menu state init
                $menu.metisMenu();
            }
        });
    }

    // check if route is actived
    isActive(url: string): boolean {
        return this.router.isActive(url, false);
    }

    // check if has child route that is actived
    isChildMenuActived(menu: any): boolean {
        let hasOneActive = false;
        if (menu.childMenus) {
            // travelsal child routes
            menu.childMenus.forEach(child => {
                hasOneActive = hasOneActive || this.isActive(child.link);
            });
        }
        return hasOneActive;
    }
}
import {Component} from '@angular/core';

@Component({
    selector: 'page-rebuild',
    template: `
        <div class="row">
            <ul class="nav nav-tabs">
                <li role="presentation" routerLinkActive="active"><a routerLink="list-setting">列表配置</a></li>
                <li role="presentation" routerLinkActive="active"><a routerLink="list-rebuild">列表生成</a></li>
            </ul>
        </div>
        <router-outlet></router-outlet>
    `,
})
export class CustomListComponent {
}
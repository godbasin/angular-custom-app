import {Component} from '@angular/core';

@Component({
    selector: 'page-rebuild',
    template: `
        <div class="row">
            <ul class="nav nav-tabs">
                <li role="presentation" routerLinkActive="active"><a routerLink="list-setting">List Setting</a></li>
                <li role="presentation" routerLinkActive="active"><a routerLink="list-rebuild">List Rebuild</a></li>
            </ul>
        </div>
        <router-outlet></router-outlet>
    `,
})
export class CustomListComponent {
}
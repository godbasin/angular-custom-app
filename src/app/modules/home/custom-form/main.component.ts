import {Component} from '@angular/core';

@Component({
    selector: 'custom-form',
    template: `
        <div class="row">
            <ul class="nav nav-tabs">
                <li role="presentation" routerLinkActive="active"><a routerLink="form-setting">Form Setting</a></li>
                <li role="presentation" routerLinkActive="active"><a routerLink="form-rebuild">Form Rebuild</a></li>
            </ul>
        </div>
        <router-outlet></router-outlet>
    `,
})
export class CustomFormComponent {
}
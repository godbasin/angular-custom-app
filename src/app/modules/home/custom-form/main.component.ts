import {Component} from '@angular/core';

@Component({
    selector: 'custom-form',
    template: `
        <div class="row">
            <ul class="nav nav-tabs">
                <li role="presentation" routerLinkActive="active"><a routerLink="form-setting">表单设置</a></li>
                <li role="presentation" routerLinkActive="active"><a routerLink="form-rebuild">表单生成</a></li>
            </ul>
        </div>
        <router-outlet></router-outlet>
    `,
})
export class CustomFormComponent {
}
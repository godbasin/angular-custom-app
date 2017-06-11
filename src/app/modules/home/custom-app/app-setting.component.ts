import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ICustomControl} from 'shared/component/dynamic-form/dynamic-form.component';
import {IListFormConfig} from 'shared/component/dynamic-list/dynamic-list.component';
import {NewAppConfigService} from 'shared/service/new-app-config.service';
import {formConfig, listConfig} from './app-setting.config';
import {formModelTransform} from '../custom-form/form-setting/form-setting.component';

@Component({
    selector: 'app-setting',
    templateUrl: './app-setting.component.html',
})
export class AppSettingComponent {
    listConfig: IListFormConfig = listConfig;    // list config
    listModel: any = [];                         // list model
    json: any;
    isShown: boolean = false;

    constructor(private newAppConfig: NewAppConfigService, private _router: Router) {
    }

    // Transform form model into the pattern we accept.
    formJson() {
        const jsonResult = this.listModel.map(x => {
            if (x.type === 'withLink') {
                return {...x, formConfig: x.formConfig && formModelTransform(x.formConfig)};
            } else if (x.type === 'withChild' && x.childMenus && x.childMenus.length) {
                return {...x, childMenus: x.childMenus.map(y => {
                    return {...y, formConfig: y.formConfig && formModelTransform(y.formConfig)};
                })};
            }
            return x;
        });
        this.json = JSON.stringify({jsonType: 'app-setting', jsonResult});
    }

    // Save config and locate to app emulation.
    buildApp() {
        this.formJson();
        this.newAppConfig.save(this.json);
        this._router.navigate(['new-app']);
    }
}
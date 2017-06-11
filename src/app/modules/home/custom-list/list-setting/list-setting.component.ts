import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ICustomControl} from 'shared/component/dynamic-form/dynamic-form.component';
import {normalListControl} from './list-setting.config';
import {normalFormControl} from '../../custom-form/form-setting/form-setting.config';
import {formModelTransform} from '../../custom-form/form-setting/form-setting.component';
import {NewAppConfigService} from 'shared/service/new-app-config.service';


const CustomControlInit = {
    type: 'text',
    label: '',
    key: ''
};

interface ICustomForm extends ICustomControl {
    withValidation?: string;
    validation?: any;
}

@Component({
    selector: 'list-setting',
    templateUrl: './list-setting.component.html',
})
export class ListSettingComponent {
    listConfig: ICustomControl[] = normalListControl;
    listModel: any = {};
    customForms: ICustomForm[] = [];
    customControl: ICustomControl[] = normalFormControl;
    json: any;

    constructor(private newAppConfig: NewAppConfigService, private _router: Router) {
    }

    // Generate json,
    formJson() {
        let jsonResult;
        if (!this.listModel.formConfig && this.listModel.formConfig.length) {
            return;
        }
        jsonResult = {...this.listModel, formConfig: formModelTransform(this.listModel.formConfig)};
        this.json = JSON.stringify({jsonResult, jsonType: 'list-setting'});
    }

    // Save config and locate to list simulation.
    buildList() {
        this.formJson();
        this.newAppConfig.save(this.json);
        this._router.navigate(['/home/custom-list/list-rebuild']);
    }
}
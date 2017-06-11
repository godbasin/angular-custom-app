import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ICustomControl} from 'shared/component/dynamic-form/dynamic-form.component';
import {IListFormConfig} from 'shared/component/dynamic-list/dynamic-list.component';
import {normalFormControl} from './form-setting.config';
import {NewAppConfigService} from 'shared/service/new-app-config.service';

export const formListConfig: IListFormConfig = {
    functions: ['add', 'edit', 'delete'],
    formConfig: normalFormControl
};

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
    selector: 'form-setting',
    templateUrl: './form-setting.component.html',
})
export class FormSettingComponent {
    customForms: ICustomForm[] = [];
    formListConfig: IListFormConfig = formListConfig;
    json: any;

    constructor(private newAppConfig: NewAppConfigService, private _router: Router) {
    }

    // Generate json.
    formJson() {
        const jsonResult = formModelTransform(this.customForms);
        this.json = JSON.stringify({jsonResult, jsonType: 'form-setting'});
    }

    // Save config and locate to form simulation.
    buildForm() {
        this.formJson();
        this.newAppConfig.save(this.json);
        this._router.navigate(['/home/custom-form/form-rebuild']);
    }
}


// To transform the form model into the pattern that we accept for building a new form.
export function formModelTransform(forms) {
    const jsonResult = [];
    if (forms && forms.length) {
        forms.forEach(form => {
            const {type, label, key, limit, validations, options, description, setOptions, useHiddenWhen} = form;
            let {hiddenWhen} = form;
            const validationArr = [];
            const limitObj = {};
            if (validations) {
                Object.keys(validations).forEach(valid => {
                    const value = validations[valid].value;
                    let message = valid;
                    if (value != null) {
                        message += `: ${value}`;
                    }
                    if (validations[valid].checked) {
                        validationArr.push({
                            type: valid,
                            param: value == null ? undefined : Number(value),
                            message
                        });
                    }
                });
            }
            if (limit) {
                Object.keys(limit).forEach(con => {
                    if (limit[con].checked) {
                        limitObj[con] = limit[con].value;
                    }
                });
            }
            if (useHiddenWhen != 'yes') {
                hiddenWhen = undefined;
            }
            jsonResult.push({
                limit: limitObj,
                validations: validationArr,
                type, label, key, options, description, setOptions, hiddenWhen
            });
        });
    }

    return jsonResult;
}
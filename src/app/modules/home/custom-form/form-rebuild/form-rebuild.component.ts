import {Component} from '@angular/core';
import {ICustomControl} from 'shared/component/dynamic-form/dynamic-form.component';
import {NewAppConfigService} from 'shared/service/new-app-config.service';

@Component({
    selector: 'form-rebuild',
    templateUrl: './form-rebuild.component.html',
})
export class FormRebuildComponent {
    customControl: ICustomControl[];
    json: any;
    isShown: boolean = false;

    constructor(private newAppConfig: NewAppConfigService) {
        // Check if set config.
        const appConfig = this.newAppConfig.get();
        const config = appConfig && JSON.parse(appConfig);
        if (config && config.jsonType === 'form-setting') {
            this.json = appConfig;
            this.customControl = config.jsonResult;
            this.isShown = true;
        }
    }

    // Save config and activated the emulation form.
    buildForm() {
        this.isShown = false;
        const config = JSON.parse(this.json);
        this.customControl = config.jsonResult;
        this.isShown = true;
    }
}
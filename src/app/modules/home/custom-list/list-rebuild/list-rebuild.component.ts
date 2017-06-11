import {Component} from '@angular/core';
import {IListFormConfig} from 'shared/component/dynamic-list/dynamic-list.component';
import {NewAppConfigService} from 'shared/service/new-app-config.service';

@Component({
    selector: 'list-rebuild',
    templateUrl: './list-rebuild.component.html',
})
export class ListRebuildComponent {
    listConfig: IListFormConfig;
    listModel: any = [];
    json: any;
    isShown: boolean = false;

    constructor(private newAppConfig: NewAppConfigService) {
        // Check if set config.
        const appConfig = this.newAppConfig.get();
        const config = appConfig && JSON.parse(appConfig);
        if (config && config.jsonType === 'list-setting') {
            this.json = appConfig;
            this.listConfig = config.jsonResult;
            this.isShown = true;
        }
    }

    // Save config and activated the emulation list.
    buildList() {
        this.isShown = false;
        const config = JSON.parse(this.json).jsonResult;
        this.listConfig = config;
        this.isShown = true;
    }
}
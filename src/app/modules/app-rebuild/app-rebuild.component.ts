import {Component, OnInit} from '@angular/core';
import {NewAppConfigService} from 'shared/service/new-app-config.service';

@Component({
    selector: 'app-rebuild',
    templateUrl: './app-rebuild.component.html',
})
export class AppRebuildComponent implements OnInit {
    json: any;
    isShown: boolean = false;

    constructor(private newAppConfig: NewAppConfigService) {
    }

    ngOnInit() {
        // Check if set config.
        const config = JSON.parse(this.newAppConfig.get());
        if (config && config.jsonType === 'app-setting') {
            this.isShown = true;
        }
    }

    // Save config and activated the emulation app.
    buildApp() {
        const config = JSON.parse(this.json);
        this.newAppConfig.save(config);
        this.isShown = true;
    }

    // Exit app emulation.
    back() {
        this.newAppConfig.save(null);
        this.isShown = false;
    }
}
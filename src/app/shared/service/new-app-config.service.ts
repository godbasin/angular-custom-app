import { Injectable } from '@angular/core';

@Injectable()
export class NewAppConfigService {
    private config: any;

    constructor() {
        const json = sessionStorage.getItem('NEW_APP_CONFIG');
        if (json) {
            this.config = JSON.parse(json);
        }
    }

    public save(config: any) {
        this.config = config;
        sessionStorage.setItem('NEW_APP_CONFIG', JSON.stringify(config));
    }
    public get() {
        return this.config;
    }
}

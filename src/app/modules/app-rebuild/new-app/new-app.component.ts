import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IListFormConfig} from 'shared/component/dynamic-list/dynamic-list.component';
import {ISidebarMenu} from 'shared/component/app-sidebar/app-sidebar.component';
import {NewAppConfigService} from 'shared/service/new-app-config.service';

@Component({
    selector: 'new-app',
    templateUrl: './new-app.component.html'
})
export class NewAppComponent implements OnInit {
    @Output() close = new EventEmitter();  // leave and return
    listConfig: IListFormConfig;           // list config
    listModel: any = [];                   // list model
    config: any;                           // config form NewAppConfigService
    menus: ISidebarMenu[] = [];            // sidebar menus
    json: any;                             // input json

    constructor(private newAppConfig: NewAppConfigService, private _route: ActivatedRoute) {
        this.config = JSON.parse(newAppConfig.get());
    }

    ngOnInit() {
        // Update Styles.
        $('body').attr('class', 'nav-md');
        $('.right_col').css('min-height', $(window).height());

        // Check if set config.
        this.menus = getMenus(this.config.jsonResult);
        this._route.url.subscribe(
            (data: any) => {
                const link = data && data[0] && data[0].path;
                if (link) {
                    this.listConfig = this.getListConfig(`/${link}`);
                }
            },
            (error: any) => console.debug("URL ERROR", error));
    }

    // Get list config through the link.
    getListConfig(link) {
        let listConfig: any = {};
        this.config.jsonResult.forEach(x => {
            if (x.type === 'withLink' && x.link === link) {
                listConfig = {
                    functions: x.functions,
                    formConfig: x.formConfig
                };
            } else if (x.type === 'withChild') {
                x.childMenus.forEach(y => {
                    if (y.link === link) {
                        listConfig = {
                            functions: y.functions,
                            formConfig: y.formConfig
                        };
                    }
                });
            }
        });
        return listConfig;
    }

}

function getMenus(config: any) {
    return config.map(x => {
        const {text, link, childMenus} = x;
        if (x.type === 'withChild') {
            return {
                text,
                childMenus: childMenus.map(y => {
                    return {link: y.link, text: y.text};
                })
            };
        } else if (x.type === 'withLink') {
            return {text, link};
        } else {
            return x;
        }
    });
}
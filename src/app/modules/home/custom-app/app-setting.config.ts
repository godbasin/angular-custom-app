import { ICustomControl } from 'shared/component/dynamic-form/dynamic-form.component';
import { IListFormConfig } from 'shared/component/dynamic-list/dynamic-list.component';
import { normalFormControl } from '../custom-form/form-setting/form-setting.config';

export const listConfig: IListFormConfig = {
    functions: ['add', 'edit', 'delete'],
    formConfig: [
        {
            type: 'text',
            label: 'MenuName',
            key: 'text',
            validations: [{
                type: 'required',
                message: 'MenuName is required.'
            }],
            description: 'The parent sidebar menu name.'
        }, {
            type: 'radio',
            label: 'Type',
            key: 'type',
            options: [
                { id: 'withLink', text: 'withLink' },
                { id: 'withChild', text: 'withChildMenu' }
            ],
            description: 'Add a link or certain children menus to the menu.'
        }, {
            type: 'text',
            label: 'Link',
            key: 'link',
            hiddenWhen: {
                condition: '&&',
                validations: [{
                    key: 'type',
                    validate: '!==',
                    param: 'withLink'
                }]
            },
            description: 'To make it work in app simulation, need to be pattern "/" + "your-route-name", such as "/app-setting.'
        }, {
            type: 'dynamic-list',
            label: 'ChildMenus',
            key: 'childMenus',
            hiddenWhen: {
                condition: '&&',
                validations: [{
                    key: 'type',
                    validate: '!==',
                    param: 'withChild'
                }]
            },
            listConfig: {
                functions: ['add', 'edit', 'delete'],
                formConfig: [{
                    type: 'text',
                    label: 'Name',
                    key: 'text',
                    validations: [{
                        type: 'required',
                        message: 'Name is required.'
                    }],
                    description: 'Child sidebar menu name.'
                }, {
                    type: 'text',
                    label: 'Link',
                    key: 'link',
                    validations: [{
                        type: 'required',
                        message: 'Link is required.'
                    }],
                    description: 'To make it work in app simulation, need to be pattern "/" + "your-route-name", such as "/app-setting.'
                }, {
                    type: 'checkbox',
                    label: 'List Function',
                    key: 'functions',
                    options: [
                        { id: 'add', text: 'add' },
                        { id: 'delete', text: 'delete' },
                        { id: 'edit', text: 'edit' },
                    ],
                    description: 'The page link to the route, setting its list functions.'
                }, {
                    type: 'dynamic-list',
                    label: 'Form Setting',
                    key: 'formConfig',
                    listConfig: {
                        functions: ['add', 'edit', 'delete'],
                        formConfig: normalFormControl
                    },
                    description: 'Same as setting a form.'
                }]
            }
        }, {
            type: 'checkbox',
            label: 'List Function',
            key: 'functions',
            options: [
                { id: 'add', text: 'add' },
                { id: 'delete', text: 'delete' },
                { id: 'edit', text: 'edit' },
            ],
            hiddenWhen: {
                condition: '&&',
                validations: [{
                    key: 'type',
                    validate: '!==',
                    param: 'withLink'
                }]
            },
            description: 'The page link to the route, setting its list functions.'
        }, {
            type: 'dynamic-list',
            label: 'Form Setting',
            key: 'formConfig',
            listConfig: {
                functions: ['add', 'edit', 'delete'],
                formConfig: normalFormControl
            },
            hiddenWhen: {
                condition: '&&',
                validations: [{
                    key: 'type',
                    validate: '!==',
                    param: 'withLink'
                }]
            },
            description: 'Same as setting a form.'
        }
    ]
};

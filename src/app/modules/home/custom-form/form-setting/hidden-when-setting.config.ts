import {ICustomControl} from 'shared/component/dynamic-form/dynamic-form.component';

export const normalHiddenWhenControl: ICustomControl[] = [
    {
        type: 'text',
        label: 'key',
        key: 'key',
        validations: [{
            type: 'required',
            message: 'key is required.'
        }],
        description: '其他控件/接口的关键key'
    }, {
        type: 'select',
        label: '条件',
        key: 'validate',
        validations: [{
            type: 'required',
            message: 'validate is required.'
        }],
        options: [
            {id: '>', text: '>'},
            {id: '>=', text: '>='},
            {id: '<', text: '<'},
            {id: '<=', text: '<='},
            {id: '==', text: '=='},
            {id: '===', text: '==='},
            {id: '!=', text: '!='},
            {id: '!==', text: '!=='},
            {id: 'indexOf', text: 'indexOf'},
        ],
        description: 'Validate condition, if choose ">=" it works like {key >= param}.'
    }, {
        type: 'text',
        label: '比较值',
        key: 'param',
        validations: [{
            type: 'required',
            message: 'param is required.'
        }],
        description: '用于条件比较，如"name(key)" "==(条件)" "admin(比较值)"'
    }
];

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
        description: "Other control's key."
    }, {
        type: 'select',
        label: 'validate',
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
        label: 'param',
        key: 'param',
        validations: [{
            type: 'required',
            message: 'param is required.'
        }],
        description: 'Set the param.'
    }
];
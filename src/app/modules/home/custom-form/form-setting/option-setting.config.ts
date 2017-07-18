import {ICustomControl} from 'shared/component/dynamic-form/dynamic-form.component';

export const normalOptionsControl: ICustomControl[] = [
    {
        type: 'text',
        label: 'id',
        key: 'id',
        validations: [{
            type: 'required',
            message: 'id is required.'
        }],
        description: '选项值'
    }, {
        type: 'text',
        label: 'text',
        key: 'text',
        validations: [{
            type: 'required',
            message: 'text is required.'
        }],
        description: '选项label'
    }, {
        type: 'radio',
        label: '是否使用input',
        key: 'withInput',
        options: [
            {id: '0', text: 'no'},
            {id: '1', text: 'yes'},
        ],
        description: '只有效用于radio-with-input/checkbox-with-input控件'
    }, {
        type: 'radio',
        label: 'input类型',
        key: 'type',
        options: [
            {id: 'text', text: 'text'},
            {id: 'number', text: 'number'},
            {id: 'email', text: 'email'}
        ],
        hiddenWhen: {
            condition: '&&',
            validations: [{
                key: 'withType',
                validate: '!=',
                param: '1'
            }]
        }
    }
];

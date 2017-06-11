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
        description: 'Value of the option.'
    }, {
        type: 'text',
        label: 'text',
        key: 'text',
        validations: [{
            type: 'required',
            message: 'text is required.'
        }],
        description: 'Text description for the option.'
    }, {
        type: 'radio',
        label: 'with input',
        key: 'withInput',
        options: [
            {id: '0', text: 'no'},
            {id: '1', text: 'yes'},
        ],
        description: 'If used input, it only works for radio-with-input/checkbox-with-input.'
    }, {
        type: 'radio',
        label: 'input type',
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
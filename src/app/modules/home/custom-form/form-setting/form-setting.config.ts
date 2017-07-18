import {ICustomControl} from 'shared/component/dynamic-form/dynamic-form.component';
import {normalOptionsControl} from './option-setting.config';
import {normalHiddenWhenControl} from './hidden-when-setting.config';

export const normalFormControl: ICustomControl[] = [
    {
        type: 'select2',
        label: 'type',
        key: 'type',
        validations: [{
            type: 'required',
            message: 'Type is required'
        }],
        options: [
            {id: 'text', text: 'input-text'},
            {id: 'number', text: 'input-number'},
            {id: 'select', text: 'select'},
            {id: 'radio', text: 'radio-group'},
            {id: 'radio-with-input', text: 'radio-group-with-input'},
            {id: 'checkbox', text: 'checkbox-group'},
            {id: 'checkbox-with-input', text: 'checkbox-group-with-input'},
            {id: 'date', text: 'date'},
            {id: 'date-time', text: 'date-time(accuracy: minute)'},
            {id: 'date-hour', text: 'date-time(accuracy: hour)'},
            {id: 'upload-image', text: 'upload images'},
        ],
        description: 'Type of control.'
    }, {
        type: 'text',
        label: 'key',
        key: 'key',
        validations: [{
            type: 'required',
            message: 'key is required.'
        }, {
            type: 'maxLength',
            param: 15,
            message: 'key should no more than 15 characters.'
        }, {
            type: 'minLength',
            param: 3,
            message: 'key should no less than 3 characters.'
        }],
        description: 'Key of control connecting to the control model. '
    }, {
        type: 'text',
        label: 'label',
        key: 'label',
        validations: [{
            type: 'required',
            message: 'label is required'
        }],
        description: 'Label of control, displaying for users. '
    }, {
        type: 'radio',
        label: 'use hiddenWhen',
        key: 'useHiddenWhen',
        options: [
            {id: 'no', text: 'no'},
            {id: 'yes', text: 'yes'},
        ],
        description: 'If this control use hiddenWhen condition related to other control.'
    }, {
        type: 'dynamic-list',
        label: 'hiddenWhen',
        key: 'hiddenWhen',
        hiddenWhen: {
            condition: '&&',
            validations: [{
                key: 'useHiddenWhen',
                validate: '!=',
                param: 'yes'
            }]
        },
        listConfig: {
            functions: ['add', 'edit', 'delete'],
            formConfig: normalHiddenWhenControl
        },
        description: 'It is for certain conditions related to other control to make this control hidden. Should be careful cause it is still in experiment.'
    }, {
        type: 'checkbox-with-input',
        label: 'validations',
        key: 'validations',
        options: [
            {id: 'required', text: 'required'},
            {id: 'email', text: 'email'},
            {id: 'maxLength', text: 'maxLength', withInput: true, type: 'number'},
            {id: 'minLength', text: 'minLength', withInput: true, type: 'number'}
        ],
        hiddenWhen: {
            condition: '&&',
            validations: [{
                key: 'useHiddenWhen',
                validate: '!=',
                param: 'no'
            }]
        },
        description: 'Better to check email/maxLength/minLength only when you use input.'
    }, {
        type: 'checkbox-with-input',
        label: 'image upload limit',
        key: 'limit',
        options: [
            {id: 'width', text: 'width(px)', withInput: true, type: 'number'},
            {id: 'height', text: 'heigth(px)', withInput: true, type: 'number'},
            {id: 'size', text: 'size(k)', withInput: true, type: 'number'},
            {id: 'type', text: 'type', withInput: true, type: 'text'}
        ],
        description: 'type can be "jpg" or "png" or "gif"',
        hiddenWhen: {
            condition: '||',
            validations: [{
                key: 'type',
                validate: '!=',
                param: 'upload-image'
            }]
        }
    }/*, {
        type: 'radio',
        label: 'custom option',
        key: 'setOptions',
        options: [
            {id: '', text: 'no'},
            {id: 'withOption', text: 'withOption'},
            {id: 'withInput', text: 'withInput'}
        ],
        description: 'If this control is allowed to set options, "withInput" only work for radio-with-input/checkbox-with-input.',
        hiddenWhen: {
            condition: '&&',
            validations: [{
                key: 'type',
                validate: '!=',
                param: 'select'
            }, {
                key: 'type',
                validate: '!=',
                param: 'checkbox'
            }, {
                key: 'type',
                validate: '!=',
                param: 'radio'
            }, {
                key: 'type',
                validate: '!=',
                param: 'radio-with-input'
            }, {
                key: 'type',
                validate: '!=',
                param: 'checkbox-with-input'
            }]
        }
    }*/, {
        type: 'dynamic-list',
        label: 'options setting',
        key: 'options',
        listConfig: {
            functions: ['add', 'edit', 'delete'],
            formConfig: normalOptionsControl
        },
        hiddenWhen: {
            condition: '&&',
            validations: [{
                key: 'type',
                validate: '!=',
                param: 'select'
            }, {
                key: 'type',
                validate: '!=',
                param: 'checkbox'
            }, {
                key: 'type',
                validate: '!=',
                param: 'radio'
            }, {
                key: 'type',
                validate: '!=',
                param: 'radio-with-input'
            }, {
                key: 'type',
                validate: '!=',
                param: 'checkbox-with-input'
            }]
        },
        description: 'To set the options.'
    }, {
        type: 'text',
        label: 'help description',
        key: 'description'
    }
];


import {ICustomControl} from 'shared/component/dynamic-form/dynamic-form.component';
import {normalOptionsControl} from './option-setting.config';
import {normalHiddenWhenControl} from './hidden-when-setting.config';

export const normalFormControl: ICustomControl[] = [
    {
        type: 'select',
        label: '控件类型',
        key: 'type',
        validations: [{
            type: 'required',
            message: '类型必选'
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
        ]
    }, {
        type: 'text',
        label: '控件key',
        key: 'key',
        validations: [{
            type: 'required'
        }],
        description: '控件key，接口/model key'
    }, {
        type: 'text',
        label: 'label',
        key: 'label',
        validations: [{
            type: 'required',
            message: 'label is required'
        }],
        description: '控件标签label'
    }, {
        type: 'radio',
        label: '是否使用隐藏条件',
        key: 'useHiddenWhen',
        options: [
            {id: 'no', text: 'no'},
            {id: 'yes', text: 'yes'},
        ],
        description: '隐藏条件，用于关联key来判断是否将控件隐藏'
    }, {
        type: 'dynamic-list',
        label: '隐藏条件列表',
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
        description: '用于某些条件隐藏控件（beta功能）'
    }, {
        type: 'checkbox-with-input',
        label: '校验',
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
        description: '尽量在input类型控件中使用email/maxLength/minLength校验'
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
        description: '类型可为"jpg"、"png"、"gif"',
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
        label: '选项配置',
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
        }
    }, {
        type: 'text',
        label: '详细描述或补充说明',
        key: 'description'
    }
];


import { ICustomControl } from 'shared/component/dynamic-form/dynamic-form.component';
import { normalFormControl } from '../../custom-form/form-setting/form-setting.config';

export const normalListControl: ICustomControl[] = [
    {
        type: 'checkbox',
        label: 'List Function',
        key: 'functions',
        options: [
            { id: 'add', text: 'add' },
            { id: 'delete', text: 'delete' },
            { id: 'edit', text: 'edit' },
        ],
        description: 'For List function.'
    }, {
        type: 'dynamic-list',
        label: 'Form Setting',
        key: 'formConfig',
        listConfig: {
            functions: ['add', 'edit', 'delete'],
            formConfig: normalFormControl
        },
        description: "For list's add/edit dialog form config."
    }
];
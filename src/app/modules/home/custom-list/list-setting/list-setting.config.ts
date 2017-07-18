import { ICustomControl } from 'shared/component/dynamic-form/dynamic-form.component';
import { normalFormControl } from '../../custom-form/form-setting/form-setting.config';

export const normalListControl: ICustomControl[] = [
    {
        type: 'checkbox',
        label: '列表功能',
        key: 'functions',
        options: [
            { id: 'add', text: '新增' },
            { id: 'delete', text: '删除' },
            { id: 'edit', text: '编辑' },
            { id: 'preRelease', text: '预发布' },
            { id: 'onlineRelease', text: '发布' },
            { id: 'onlineUnRelease', text: '下架' },
            { id: 'adjustSeqData', text: '上下移动' },
        ],
        description: '列表功能'
    }, {
        type: 'dynamic-list',
        label: 'Form Setting',
        key: 'formConfig',
        listConfig: {
            functions: ['add', 'edit', 'delete'],
            formConfig: normalFormControl
        },
        description: '用于新建/编辑的表单控件配置'
    }
];

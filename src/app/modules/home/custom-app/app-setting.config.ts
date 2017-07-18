import { IListFormConfig } from 'shared/component/dynamic-list/dynamic-list.component';
import { normalFormControl } from '../custom-form/form-setting/form-setting.config';


export const listConfig: IListFormConfig = {
    functions: ['add', 'edit', 'delete'],
    formConfig: [
        {
            type: 'text',
            label: '菜单名',
            key: 'text',
            validations: [{
                type: 'required',
                message: 'MenuName is required.'
            }],
            description: '一级菜单名称'
        }, {
            type: 'radio',
            label: '菜单内容',
            key: 'type',
            options: [
                { id: 'withLink', text: '设置路由' },
                { id: 'withChild', text: '添加子菜单' }
            ],
            description: '设置一级菜单路由，或是添加二级菜单'
        }, {
            type: 'text',
            label: '路由名',
            key: 'link',
            hiddenWhen: {
                condition: '&&',
                validations: [{
                    key: 'type',
                    validate: '!==',
                    param: 'withLink'
                }]
            },
            description: '需要在模拟环境中使用请使用格式："/" + "路由名", 如"/app-setting"'
        }, {
            type: 'dynamic-list',
            label: '二级菜单列表',
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
                    label: '二级菜单名',
                    key: 'text',
                    validations: [{
                        type: 'required',
                        message: 'Name is required.'
                    }]
                }, {
                    type: 'text',
                    label: '路由名',
                    key: 'link',
                    validations: [{
                        type: 'required',
                        message: 'Link is required.'
                    }],
                    description: '需要在模拟环境中使用请使用格式："/" + "路由名", 如"/app-setting"'
                }, {
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
                    description: '页面列表功能'
                }, {
                    type: 'dynamic-list',
                    label: '新增/编辑表单配置',
                    key: 'formConfig',
                    listConfig: {
                        functions: ['add', 'edit', 'delete'],
                        formConfig: normalFormControl
                    }
                }]
            }
        }, {
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
            hiddenWhen: {
                condition: '&&',
                validations: [{
                    key: 'type',
                    validate: '!==',
                    param: 'withLink'
                }]
            }
        }, {
            type: 'dynamic-list',
            label: '新增/编辑表单配置',
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
            }
        }
    ]
};

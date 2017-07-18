# Angular自定义页面

[点击体验。](http://otaj284f8.bkt.clouddn.com/#/home/custom-app)

## 说明
这是一个单页面应用，有以下用途:
- 通过配置的方式，创建表单、列表、页面的配置json文件
- 通过输入配置json文件，还原表单、列表、页面

Angular自定义页面基于Angular(v4.0+)和Webpack2, 以及以下相关插件/库:
- [jQuery](https://jquery.com/)
- [bootstrap](http://getbootstrap.com/)
- [metisMenu](https://github.com/onokumus/metismenu)
- [bootstrap-datetimepicker](http://www.bootcss.com/p/bootstrap-datetimepicker/)
- [select2](https://select2.github.io/)
- [gentelella](https://github.com/puikinsh/gentelella)
- ...

## 使用
---
### 项目下载、安装和使用

``` cmd
// 复制项目代码
git clone https://github.com/godbasin/angular-custom-app.git
cd angular-custom-app

// 安装依赖
npm install -g webpack
npm install -g webpack-dev-server
npm install

// 启动项目
npm run dev
// 构建
npm run build
```

### 页面配置相关
有三种模式:
1. 通过配置表单内每个控件相关属性，来配置表单。
2. 通过提供表单的功能（增、删、改）以及表单，来配置列表。
3. 通过配置页面菜单、路由和对应页面列表，来配置页面。

**配置表单**
1. 添加控件。
2. 配置控件相关属性。
3. 生成json配置（或生成表单）。

**生成表单**
1. 输入上方产生的json配置。
2. 生成表单。

**配置列表**
1. 勾选需要的列表功能（增、删、改）。
2. 配置列表相关表单（与配置表单方式一致）。
3. 生成json配置（或生成列表）。

**生成列表**
1. 输入上方产生的json配置。
2. 生成列表。

**配置页面**
1. 配置页面的菜单和路由。
2. 配置对应页面列表和表单。
3. 生成json配置（或生成页面）。

**生成页面**
1. 输入上方产生的json配置。
2. 生成页面。

## 文档
---
### 控件类型
**当前支持的控件类型如下:**
- 'text': `<input type="text" />`
- 'number': `<input type="number" />`
- 'select': `<select>`
- 'select2': `<select2>` 使用[select2](https://select2.github.io/)插件封装的select组件
- 'radio': `<input type="radio" />`组
- 'radio-with-input': 带输入的radio组
- 'checkbox': `<input type="checkbox" />`组
- 'checkbox-with-input': 带输入的checkbox组
- 'date'| 'date-time' | 'date-hour': 日期时间选择控件，使用[bootstrap-datetimepicker](http://www.bootcss.com/p/bootstrap-datetimepicker/)封装
- 'upload-image': 带限制（宽、高、大小、类型）的图片上传组件

### 控件属性配置
**每个控件接受以下的属性配置:**
- `type (string)`: 控件类型(`'text'`, `'number'`, `'select'`, `'radio'`等)
- `label (string)`: 控件描述（左侧说明）
- `key (string)`: 控件的关键key(用于获取对应的value或model)
- `validations (array)`: formbuilder校验
  - `type (string)`: [Validators](https://angular.io/docs/ts/latest/api/forms/index/Validators-class.html)--校验类型(`'required'`, `'email'`, `'maxLength'`, `'minLength'`, `'pattern'`等)
  - `param`: 校验回调的传入参数(如`maxLength(length)`传入`length`, `minLength(length)`传入`length`等)
  - `message (string)`: 校验失败的错误提示
- `hiddenWhen (object)`: 控件隐藏时的条件（条件隐藏则校验不生效）
  - `condition`: 条件的整合方式`validations`(`'||'`, `'&&'`, `''`)
  - `validations (array)`: 其他控件满足的条件配置
    - `key (string)`: 其他控件的关键key
    - `validate (string)`: 校验类型(`'>'`, `'>='`, `'=='`, `'==='`, `'!='`, `'indexOf'`等)
    - `param`: 校验对比值
- `setOptions (boolean)`: 是否允许自定义选项
- `options`: select/radio/checkbox等组件的选项
  - `id (string)`: 选项值
  - `text (string)`: 选项说明
  - `withInput (boolean)`: 是否带输入
  - `type`: 输入类型(`'text'`, `'number'`, `'email'`)
- `limit`: 上传图片限制
  - `width (number)`
  - `height (number)`
  - `size (number)`
  - `type? (string)`
- `description (string)`: 帮助说明

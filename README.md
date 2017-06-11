# Angular Custom App

## Instruction
This is a web app for:
- Generate config json for form and list setting.
- Rebuild form and list through input config json.

Angular-Custom-Form is built with Angular4 and Webpack, with the help of these plugins and libs:
- [jQuery](https://jquery.com/)
- [bootstrap](http://getbootstrap.com/)
- [metisMenu](https://github.com/onokumus/metismenu)
- [bootstrap-datetimepicker](http://www.bootcss.com/p/bootstrap-datetimepicker/)
- [select2](https://select2.github.io/)
- [gentelella](https://github.com/puikinsh/gentelella)
- ...

## How to use
---
### About the project

``` cmd
// clone code
git clone https://github.com/godbasin/angular-custom-app.git
cd angular-custom-app
// npm install
npm install -g webpack
npm install -g webpack-dev-server
npm install

// start project
npm run dev
// build
npm run build
```

### About the Page Setting
We now have two modes:
1. Setting a form, by setting each control that inside the form.
2. Setting a list, by provide it certain functions(`add`/`edit`/`delete`) and a dialog form.

**Setting A Form**
1. Add controls.
2. Set up each control.
3. Generate json(or build a form).

**Build A Form**
1. Input json that generated above.
2. Build the form.

**Setting A List**
1. Checked the functions you want(add/edit/delete).
2. Set up the dialog form(Same with setting a form).
3. Generate json(or build a list).

**Build A List**
1. Input json that generated above.
2. Build the list.

**Setting An App**
1. Set up the sidebar menus and it's route-link.
2. Set up it's link page list config(same with setting a list).
3. Generate json(or rebuild a simulation app).

**Rebuild A Simulation App**
1. Input json that generated above.
2. Rebuild the simulation app.

## Documentation
---
### Control Types
**By now we support these form control types:**
- 'text': `<input type="text" />`
- 'number': `<input type="number" />`
- 'select': `<select>`
- 'select2': `<select2>` sealed with [select2](https://select2.github.io/) plugins
- 'radio': `<input type="radio" />` group
- 'radio-with-input': radio group with input
- 'checkbox': `<input type="checkbox" />` group
- 'checkbox-with-input': checkbox group with input
- 'date'| 'date-time' | 'date-hour': date-picker, sealed with [bootstrap-datetimepicker](http://www.bootcss.com/p/bootstrap-datetimepicker/)
- 'upload-image': images upload with certain limits, such as width/height/size/type

### Config of Each Control
**Each control is defined up to these configs:**
- `type (string)`: control type(`'text'`, `'number'`, `'select'`, `'radio'` and more)
- `label (string)`: label for the control
- `key (string)`: key(to connect the data or model and get value) for the control
- `validations (array)`: formbuilder validations
  - `type (string)`: [Validators](https://angular.io/docs/ts/latest/api/forms/index/Validators-class.html) type(`'required'`, `'email'`, `'maxLength'`, `'minLength'`, `'pattern'` and more)
  - `param`: Validators' function called with param(`maxLength(length)`, `minLength(length)` and more)
  - `message (string)`: error message when not valid
- `hiddenWhen (object)`: conditions when control hidden
  - `condition`: way to combinate `validations`(`'||'`, `'&&'`, `''`)
  - `validations (array)`: conditions when other control match
    - `key (string)`: other control's key
    - `validate (string)`: validate type(`'>'`, `'>='`, `'=='`, `'==='`, `'!='`, `'indexOf'` and more)
    - `param`: value to compare or calculate with other control
- `setOptions (boolean)`: if allowed to set options
- `options`: options for select or radio or checkbox etc.
  - `id (string)`: option value
  - `text (string)`: option text
  - `withInput (boolean)`: if with input
  - `type`: input type(`'text'`, `'number'`, `'email'`)
- `limit`: upload image limit
  - `width (number)`
  - `height (number)`
  - `size (number)`
  - `type? (string)`
- `description (string)`: help description
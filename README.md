# Ciku Forms

Ciku forms is a Sass boilerplate for form elements.

Styling form elements by hand is time consuming. With Ciku Forms, by setting a handful of parameters – font size, border color, padding,… — you can get your form elements styled easily.

## Elements

- `<button>`
- `<datalist>`
- `<fieldset>`
- `<form>`
- `<input>`
    - `input[type="text"]`
    - `input[type="email"]`
    - `input[type="radio"]` 
    - `input[type="checkbox"]`
    - `input[type="password"]`
    - `input[type="search"]`
    - `input[type="number"]`
    - `input[type="tel"]`
    - `input[type="url"]`
    - `input[type="date"]`
    - `input[type="datetime"]`
    - `input[type="datetime-local"]`
    - `input[type="time"]`
    - `input[type="month"]`
    - `input[type="week"]` 
- `<label>`
- `<legend>`
- `<optgroup>`
- `<option>`
- `<select>`
- `<textarea>`

### These inputs are not styled. May be we can style them in future.

- `input[type="color"]`
- `<meter>`
- `<keygen>`
- `<output>`
- `<progress>`

## Usage

### Requirements

Ciku forms uses [Autoprefixer](https://github.com/postcss/autoprefixer) to handle [vendor prefixes](http://webdesign.about.com/od/css/a/css-vendor-prefixes.htm). So, you’ll have to intergrate Autoprefixer into you build process.

### Installation

#### Bower

```Shell
bower install --save ciku-forms
```

Then, import in SCSS file.
```SCSS
@import 'bower_components/ciku-forms';
```

### Customizing

You can customize the styles using these variables.

- **$ciku-form-font-size** - support px, % and em values. Default is 100%. When the unit is either % or em, the assumption is 1em = 16px. You can change this by defining `$ciku-form-em-base`. For example: `$ciku-form-em-base: 24px;`
- **$ciku-form-line-height** - support unitless and px values. Default is 1.4.
- **$ciku-form-base-color** - default is #307cd6.
- **$ciku-form-font-color** - default is #222.
- **$ciku-form-font-color-light** - default is #999.
- **$ciku-form-border-color** - default is #ccc.
- **$ciku-form-border-width** - default is 1px.
- **$ciku-form-border-radius** - default is 2px.
- **$ciku-form-input-padding** - default is ¹⁄₄ of `$ciku-form-line-height`.

### Development and Contribution

```Shell
bundle
bower install
npm install
```

## Authors

- [Brajeshwar Oinam](http://brajeshwar.me/)
- Saneef H. Ansari [@saneef](https://twitter.com/saneef)

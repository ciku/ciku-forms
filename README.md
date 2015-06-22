# Ciku Forms

Ciku forms is a boilerplate for form elements.

Styling form elements by hand is time consuming. With Ciku Forms with setting a handful of parameters – border color, background color, padding,… — you can get your form elements styled.

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

- **$ciku-form-font-size** - default is 100%
- **$ciku-form-line-height** - default is 1.4em
- **$ciku-form-base-color** - default is #307cd6
- **$ciku-form-font-color** - default is #222
- **$ciku-form-font-color-light** - default is #999
- **$ciku-form-border-color** - default is #ccc
- **$ciku-form-border-width** - default is 1px
- **$ciku-form-border-radius** - default is 2px
- **$ciku-form-padding** - default is 6px

## Authors
- Brajeshwar Oinam [@brajeshwar](https://twitter.com/brajeshwar)
- Saneef H. Ansari [@saneef](https://twitter.com/saneef)

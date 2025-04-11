# React Select Component

A customizable and accessible select/dropdown component for React applications.

## Installation

```bash
npm install select_react_plugin
```
## Usage

```js
import SelectComponent from 'select_react_plugin';

function App() {
  const [selected, setSelected] = React.useState('');

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ];

  return (
    <SelectComponent
      label="Choose an option"
      name="options"
      options={options}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
    />
  );
}
```
## Props

| Prop          | Type                                                    | Default               | Description                                           |
|---------------|---------------------------------------------------------|-----------------------|-------------------------------------------------------|
| `label`       | string                                                  | -                     | Label text for the select                             |
| `name`        | string                                                  | **Required**          | HTML name attribute                                   |
| `options`     | `{value: string, label: string}[]`                      | **Required**          | Array of select options                               |
| `value`       | string \| string[]                                      | -                     | Controlled value (string for single, array for multi) |
| `onChange`    | `(e: React.ChangeEvent<HTMLSelectElement>) => void`     | **Required**          | Change handler                                        |
| `placeholder` | string                                                  | "Select an option..." | Placeholder for single select                         |
| `multiple`    | boolean                                                 | false                 | Enable multi-select mode                              |
| `className`   | string                                                  | ""                    | Additional CSS class                                  |
| `style`       | React.CSSProperties                                     | {}                    | Inline styles                                         |
| `renderOption`| `(option: {value: string, label: string}) => ReactNode` | -                     | Custom option renderer                                |

## Features

### Basic Usage

```js
<SelectComponent
  label="Favorite Color"
  name="colors"
  options={[
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' }
  ]}
  value={selectedColor}
  onChange={handleColorChange}
/>
```
### Multi-Select

```js
<SelectComponent
  label="Favorite Colors"
  name="colors"
  options={[
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' }
  ]}
  value={selectedColors}
  onChange={handleColorsChange}
  multiple
/>
```
### Custom Option Rendering

```js
<SelectComponent
  name="icons"
  options={options}
  renderOption={(option) => (
    <option key={option.value} value={option.value}>
      <span role="img" aria-label={option.label}>
        {ICON_MAP[option.value]}
      </span>
      {option.label}
    </option>
  )}
/>
```
### Styling

Add custom styles using either:

**CSS Classes**

```css
.selectWrapper {
  max-width: 300px;

  select {
    border: 2px solid #ccc;
  }
}
```
**Inline Styles**

```js
<SelectComponent
  style={{
    '--select-primary-color': '#ff0000',
    padding: '1rem'
  }}
/>
```
## Accessibility

- **ARIA Labels**: Automatically generated from `label` or `name`
- **Keyboard Navigation**: Supports arrow keys and tab navigation
- **Screen Reader Support**: Proper roles (`combobox`/`listbox`) and attributes

## Development

### Install dependencies

```bash
npm install
```
### Run development server

```bash
npm run watch
```
### Build for production

```bash
npm run build
```
### Run tests

```bash
npm test
```

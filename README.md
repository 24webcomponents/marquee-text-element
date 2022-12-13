# &lt;marquee-text&gt; element

An element which scrolls the text inside it like the traditional [marquee](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee) element found in the browsers of yesteryear.

## Installation
Available on [npm](https://www.npmjs.com/) as [**marquee-text-element**](https://www.npmjs.com/package/marquee-text-element).
```
$ npm install --save marquee-text-element
```

## Usage

### Script

Import as ES modules:

```js
import 'marquee-text-element'
```

Include with a script tag:

```html
<script type="module" src="./node_modules/marquee-text-element/dist/index.js">
```

```html
<marquee-text duration="2s">
  This text will scroll across the page over 2s
</marquee-text>
```

## Browser support

Browsers without native [custom element support][support] require a [polyfill][].
- Chrome
- Firefox
- Safari
- Microsoft Edge

[support]: https://caniuse.com/custom-elementsv1
[polyfill]: https://github.com/webcomponents/custom-elements

## License

Distributed under the MIT license. See LICENSE for details.

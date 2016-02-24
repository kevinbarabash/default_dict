# default_dict
`default_dict` for javascript

# Requirements

This library requires ES2015 Proxy support.  See http://kangax.github.io/compat-table/es6/ for current browser support.

# Usage

```javascript
<script src='default_dict.js'></script>
<script>
  var dd = default_dict(() => []);
  dd.fruit.push('apple');
  dd.fruit.push('banana');
</script>
```

# Why

Because writing the following code is annoying:

```javascript
var dict = {};

function add_item_to_list_in_dict(key, item) {
  if (!dict.hasOwnProperty(key)) {
    dict[key] = [];
  }
  dict[key].push(item);
}
```

Using `default_dict` this can be written as:

```javascript
var dict = default_dict(() => []);

function add_item_to_list_in_dict(key, item) {
  dict[key].push(item);
}
```

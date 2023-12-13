# Vue All Click Away

> Vue 3.0 Compatible Click Away Directive

![Example GIF](assets/animated.gif)


## Overview

Detect if a click event happened outside of an element, even right clicks. Compatible with Vue 3.x.

## Requirements

- Vue 3.x

## Installation

```
npm i -s vue3-all-click-away
```

<p></p>

```
yarn add vue3-all-click-away
```

## Usage

> By default the module exports a plugin, but you can also use this as a mixin which is documented below or as a directive.

```js
import { createApp } from "vue";
import App from "./App.vue";
import VueAllClickAway from "vue3-all-click-away";

const app = createApp(App);

app.use(VueAllClickAway) // Makes 'v-all-click-away' directive usable in every component
app.mount('#app')
```

<p></p>

With Options API
```vue
<template>
  <div v-all-click-away="onClickAway">
    ...
  </div>
</template>

<script>
export default {
  methods: {
    onClickAway(event) {
      console.log(event)
    }
  }
}
</script>
```

or with Vue Composition API & Typescript

```vue
<template>
  <div v-all-click-away="onClickAway">
    ...
  </div>
</template>

<script>
export default {
  setup() {
    const onClickAway = (event) => {
      console.log(event)
    }

    return { onClickAway }
  } 
}
</script>
```

### Directive

```html
<template>
  <div v-all-click-away="onClickAway">
    ...
  </div>
</template>
```

<p></p>

```js
import { directive } from "vue3-all-click-away";
export default {
  directives: {
    ClickAway: directive
  },
  methods: {
    onClickAway(event) {
      console.log(event);
    }
  }
}
```

### Mixin

```html
<template>
  <div v-all-click-away="onClickAway">
    ...
  </div>
</template>
```

<p></p>

```js
import { mixin as VueAllClickAway } from "vue3-all-click-away";
export default {
  mixins: [VueClickAway],
  methods: {
    onClickAway(event) {
      console.log(event);
    }
  }
}
```

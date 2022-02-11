# Harmony.JS
Patching library for JavaScript

# Features
- [x] Function hooking
- [ ] Property getter hooking
- [ ] Property setter hooking
- [ ] Constructor hooking

## Loading
You can load from jsDelivr
```html
<script src="https://cdn.jsdelivr.net/gh/xkiraichan/harmony.js@0/harmony.js">
```
```js
new Function((await fetch("https://cdn.jsdelivr.net/gh/xkiraichan/harmony.js@0/harmony.js")).text())();
```

## Usage
### Method Patching
- Your hook is given `n +1` args, with the last arg being the original function
- If you return an array, that array will replace the args going to the original function
- If you return false, the original function won't be called automatically
  - If you want a postfix, this is what you'll need to do
- If your hook uses arrow syntax, you won't be able to get the `this` variable.
#### Type 
```js
harmony.patchFunction(WebSocket, "send", hook);
```

#### Type instance
```js
// note: this will hook all websockets, you'll need to check the instance using `this`
harmony.patchFunction(myWebSocket, "send", hook);
```

#### Static
```js
harmony.patchFunction(console, "log", hook);
```

### Property getter patching
Not implemented yet...

### Property setter patching
Not implemented yet...

### Constructor patching
Not implemented yet...

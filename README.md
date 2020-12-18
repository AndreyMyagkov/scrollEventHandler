# scrollEventHandler.js

## Scroll event listener

On start window scrolling fire `start` callback and on end scrolling fire `end` callback

```
const start = () => {
    console.log('start scrolling')
}

const end = () => {
    console.log('end scrolling')
}

scrollStop(start, end);

```

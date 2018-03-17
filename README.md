# A Javascript Library that deal with some frequent opreation 

In current, it only has some module include dom, ajax, array, util. 

## Installation
Using npm:
`npm i --save-dev haoyong`

## Example Usage

### util module
```(javascript)
const haoyong = require('haoyong)
const util = haoyong.$util
util.dateFormat('20180317') 
<!-- [ '20180317', '2018', '03', '17', index: 0, input: '20180317' ] -->

util.micrometer('1234567890')
<!-- 1,234,567,890 -->

util.trim(str, position)
util.serialize(obj)

...
```

### ajax module 
```(javascript)
const ajax = haoyong.$ajax
ajax.getData(type, url, data, callback) //data can be ignore

...
```

### array module 
```(javascript)
const array = haoyong.$array
array.dedupe(arr) //remove repeat
array.removeByIndex(index)

...
```

### dom module
```(javascript)
const dom = haoyong.$dom
dom.$(selector)
dom.insertAfter(node, target)
dom.removeNode(node)
dom.addClass(node, className)  

...
```

## Issues
If you find a bug, please file an issue on [my issue tracker on gitlab](http://git.imweb.io/Silence_JK/adam/issues)
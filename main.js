// main.js
import { x } from './foo.js'

x().then(y => document.body.innerHTML = `<h1>${y}</h1>`)

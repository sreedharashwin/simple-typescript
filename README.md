# Simple TypeScript Development Environment

Development environment setup with essential tools to prototype / test __TypeScript__ concepts.

### Getting started

__node.js > 8__ is required to run this project.

* To start app development just run `npm start -s` command 
* To run __jest__ tests execute `npm test` script (or `npm test:watch`)
* To lint project with __tslint__ run `npm run lint`
* To format code with __prettier__ run `npm run format`. Also take note, that files got formatted before each commit thanks to __lint-staged__.

### For VSCode users

If you are using VSCode for development instead of executing `npm start` you can run _Start dev_ task by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> and select it from the list of available tasks.
VSCode has really great __node.js__ debugger built-in. Just press <kbd>F5</kbd> and enjoy 😜.

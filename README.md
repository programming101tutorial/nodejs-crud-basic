# Node.js CRUD basic

## Features!

  - MVC structure
  - CRUD sample
  - Integrate Unit testing with jest

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/programming101tutorial/nodejs-crud-basic.git
$ cd nodejs-crud-basic
$ cp .env.example .env
$ npm install
$ npm start
```
### Project structure

```js
nodejs-crud-basic
├─ app                    
│  ├─ controllers         
│  │  ├─ sum.js           
│  │  └─ user.js          
│  ├─ models              
│  │  └─ user.js          
│  ├─ routes              
│  │  ├─ index.js         
│  │  └─ user.js          
│  └─ services            
│     └─ user.js          
├─ config                 
│  └─ database.config.js  
├─ test                   
│  └─ sum.test.js         
├─ index.js               
├─ package-lock.json      
├─ package.json           
└─ README.md              
            
```

License
----

MIT


**Author: Mengty**

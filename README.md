# Node.js CRUD basic
[![Build Status](https://travis-ci.org/programming101tutorial/nodejs-crud-basic.svg?branch=master)](https://travis-ci.org/programming101tutorial/nodejs-crud-basic)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=programming101tutorial_nodejs-crud-basic&metric=alert_status)](https://sonarcloud.io/dashboard?id=programming101tutorial_nodejs-crud-basic)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=programming101tutorial_nodejs-crud-basic&metric=coverage)](https://sonarcloud.io/dashboard?id=programming101tutorial_nodejs-crud-basic)


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

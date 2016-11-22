# Frontend Boilerplate
[![Build Status](https://travis-ci.org/xarvel/frontend-boilerplate.svg?branch=master)](https://travis-ci.org/xarvel/frontend-boilerplate)

<img width="100%" src="/img/intro.png?raw=true">

##Structure
```
─ src
  ├── assets
  │    ├── fonts
  │    ├── images
  │    ├── javascripts
  │    └── stylesheets
  │        ├── base
  │        ├── components
  │        ├── layout
  │        ├── pages
  │        ├── themes
  │        ├── utils
  │        ├── vendor
  │        └── main.css
  ├── template
  │    ├── foot.html
  │    └── head.html
  └─── index.html
```

##Contains

Everything for comfortable work.

* Gulp
* BrowserSync
* PostCSS
* ES6(ES2015) transpiler (Babel)
* Browserify
* Linting 

##How to use?

### 1. Install Docker
Follow <a href="https://www.docker.com/">this link</a> and install Docker. 

<img width="120px" src="/img/docker.png?raw=true">

### 2. Build an image
```
docker build -t frontend .
```

### 3. Install NPM dependencies
<img width="120px" src="/img/npm.png?raw=true">

for unix
```
docker run -it --rm --user $(id -u) -v $(pwd):/var/www -w /var/www frontend npm i --no-bin-links || npm i --no-bin-links
```

for windows
```
docker run -it --rm -v %cd%:/var/www -w /var/www frontend npm i --no-bin-links || npm i --no-bin-links
```
(maybe you have to run it twice)
### 4. Run
for unix
```
docker run -it --rm --user $(id -u) -v $(pwd):/var/www -w /var/www -p 3000:3000 -p 3001:3001 frontend gulp
```
for windows
```
docker run -it --rm -v %cd%:/var/www -w /var/www -p 3000:3000 -p 3001:3001 frontend gulp
```

##Tasks

* build - build assets without additional modifications
* dist - make distribution copy tested and minified
* watch - watch on file changes and build on fly

## About

* [valiullin.arthur@gmail.com](valiullin.arthur@gmail.com)

# Mistake-o-tron [![Build Status](https://travis-ci.org/tailuge/mistake-o-tron.svg?branch=master)](https://travis-ci.org/tailuge/mistake-o-tron/) [![Coverage Status](https://coveralls.io/repos/github/tailuge/mistake-o-tron/badge.svg?branch=master)](https://coveralls.io/github/tailuge/mistake-o-tron?branch=master) [![CodeFactor](https://www.codefactor.io/repository/github/tailuge/mistake-o-tron/badge)](https://www.codefactor.io/repository/github/tailuge/mistake-o-tron) [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/tailuge/mistake-o-tron) 


Reuse lichess stockfish analysis

Based on [lichess' chessground](https://github.com/ornicar/chessground-examples) and [lichess API](https://lichess.org/api)


### Setup and build

```
nvm use v10.16.3
yarn install
yarn watch 
```
### Test

```
yarn test
```

### Demo

[Mistake-o-tron](https://tailuge.github.io/mistake-o-tron/index.html)

[![Screenshot](https://tailuge.github.io/mistake-o-tron/assets/images/demo.png)](https://tailuge.github.io/mistake-o-tron/index.html)


### Serve on gitpod

```
python -m http.server 8000
```
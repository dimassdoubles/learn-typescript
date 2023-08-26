1. install node & npm
2. npm i -g typescript
3. tsc --init
4. edit tsconfig.json -> aktifkan noImplicitAny, outDir = ./bundle, rootDir = ./src
5. $ tsc
6. $ tsc && node bundle/index.js
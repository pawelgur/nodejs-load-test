Dummy nodejs app simulating  cpu and memory load.

To run:
```shell
npm install && node index.js
```

Example of generating load using autocannon:
```shell
npx autocannon -R 20 -c 20 -d 30 http://localhost:3000/test --renderStatusCodes
```

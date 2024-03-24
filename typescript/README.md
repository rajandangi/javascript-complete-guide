## Globally Installing TypeScript
You can use npm to install TypeScript globally, this means that you can use the tsc command anywhere in your terminal.

To do this, run `npm install -g typescript`. This will install the latest version.

In this case, you can run using `tsc app.ts` or `tsc app.ts -w` to watch.


Official page: https://www.typescriptlang.org/download


## Useful `tsconfig.json` config
1. To generate `tsconfig.json` run `tsc --init`
2. `target`: This option specifies the ECMAScript target version. The compiler will output code that is compatible with this version. For example, if you set "ES5", the outputted code will be compatible with ES5 JavaScript engines. [More Info](https://www.geeksforgeeks.org/javascript-versions/)
3. `outDir`: This option is used to redirect output structure to the directory. This means that your compiled TypeScript files will be placed in this directory.
4. `noEmitOnError`: This option ensures that no output files are generated if any errors are encountered during the compilation process. This helps to prevent incomplete or faulty output files.
5. `rootDir`: This option is used to specify the root directory of your input files. The compiler will use this to determine the structure of the output directory.

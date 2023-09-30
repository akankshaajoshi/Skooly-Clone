{
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "moduleResolution": "node",
      "outDir": "dist",
      "sourceMap": false,
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src/**/*.ts", "tests/**/*.ts"],
    "exclude": ["node_modules", ".vscode"]
  }
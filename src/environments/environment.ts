// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  /** This pattern is useful for microservices. */
  Api: {
    Upload: 'http://localhost:53830/api/upload',
    Products: 'http://localhost:53830/api/product',
    Company: 'http://localhost:53830/api/company'
  }
};

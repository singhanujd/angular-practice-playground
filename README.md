#NgModule & DI (defining a module, bootstrapping application, dependency Injection)
#Component structure ( definition, interpolation, template scope, styles encapsulation)

# Dependency Injection
  - important application design pattern
  - dependencies are services or objects that class needs to perform its function
  - Coding Pattern in which class ask for dependency from external sources rather than creating them itself.

# What is provider in Angular
  - A object that implements one of the Provider interface.
  - A provider object defines how to obtain an injectable dependency associated with a DI Token.
  - An Injector uses the provider to create a new instance of a dependency for a class that requires it.
  - Angular registers its own providers with every injector, for services that Angular defines.
  - You can register your own providers for services that your app needs.

# Service
  - The injectable class is instantiated by a provider.
  - Injectors maintain lists of providers and use them to provide service instances when they are required by components or other services.


# AngularPracticePlayground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

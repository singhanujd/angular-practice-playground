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
  - Services are singletons within the scope of an injector
  - The injectable class is instantiated by a provider.
  - Injectors maintain lists of providers and use them to provide service instances when they are required by components or other services.

# Two injector hierarchies
  - There are two injector hierarchies in Angular:
  - ModuleInjector hierarchy—configure a ModuleInjector in this hierarchy using an @NgModule() or @Injectable() annotation.
  - ElementInjector hierarchy—created implicitly at each DOM element. An ElementInjector is empty by default unless you configure it in the providers property on @Directive() or @Component().

# Tree-shaking and @Injectable()
  - Using the @Injectable() providedIn property is preferable to the @NgModule() providers array because with @Injectable() providedIn, optimization tools can perform tree-shaking, which removes services that your app isn't using and results in smaller bundle sizes.

  - Tree-shaking is especially useful for a library because the application which uses the library may not have a need to inject it.

# Platform injector
  - There are two more injectors above root, an additional ModuleInjector and NullInjector().
  - platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {...})
  - The bootstrapModule() method creates a child injector of the platform injector which is configured by the AppModule. This is the root ModuleInjector.
  - The platformBrowserDynamic() method creates an injector configured by a PlatformModule, which contains platform-specific dependencies.
  - This allows multiple apps to share a platform configuration.
  - For example, a browser has only one URL bar, no matter how many apps you have running. You can configure additional platform-specific providers at the platform level by supplying extraProviders using the platformBrowser() function.

# @Injectable() vs. @NgModule()
  - If you configure an app-wide provider in the @NgModule() of AppModule, it overrides one configured for root in the @Injectable() metadata. You can do this to configure a non-default provider of a service that is shared with multiple apps.

  - Here is an example of the case where the component router configuration includes a non-default location strategy by listing its provider in the providers list of the AppModule.
  
  - providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]

# ElementInjector
  - Providing a service in the @Component() decorator using its providers or viewProviders property configures an ElementInjector.
  - Components and directives on the same element share an injector.

# Resolution rules
  - When resolving a token for a component/directive, Angular resolves it in two phases:
    - Against the ElementInjector hierarchy (its parents)
    - Against the ModuleInjector hierarchy (its parents)
  - If Angular doesn't find the provider in any ElementInjectors, it goes back to the element where the request originated and looks in the ModuleInjector hierarchy. If Angular still doesn't find the provider, it throws an error.
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

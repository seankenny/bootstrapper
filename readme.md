Bootstrapper
============
##A bare bones implementation of web api, angularjs, owin and token authentication

Comes as a result of having to do the same thing from scratch over and over

- AngularJs running in HTML5 Mode
- Web Api to serve json (camel cased of course)
- Bare bones MVC to server a master page with a basic index.cshtml to host the angular side of things
- AngularJS structured as I prefer
  - Some handy directives and interceptors
- Owin pipeline used to provide token authentication
  - Angular set up to use token auth
- Routes have authorization on some - see app.js. 
  - Root/home is unauth. 
  - Dashboard/users are auth.
- Web Api filters for data model validation and for exception handling
  - see the corresponding angular error interceptor - service
- Entity Framework - SQL Express

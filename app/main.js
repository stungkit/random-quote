(function(app) {
  var PlatformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
  var AppModule = app.AppModule;

  PlatformBrowserDynamic().bootstrapModule(AppModule);

})((window.app) || (window.app = {}));

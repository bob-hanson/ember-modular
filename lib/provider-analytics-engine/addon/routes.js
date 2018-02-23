import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('procedure-dashboard');
  this.route('providers', function () {
    this.route('provider', { path: ':providerSlug' }, function () {
      this.route('provider-details', function () {
        this.route('provider-encouters');
      });
    });
  });
});

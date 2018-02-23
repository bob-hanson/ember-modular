import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('new-organization');
  this.route('organization', { path: ':organizationSlug'}, function () {
    this.route('organization-details');
    this.route('edit-organization');
    this.route('organization-users', function() {
      this.route('add-organization-user');
      this.route('organization-user', { path: ':userSlug' }, function () {
        this.route('organization-user-details');
        this.route('edit-organization-user');
      });
    });
    this.route('clients', function () {
      this.route('new-client');
      this.route('client', { path: ':clientSlug' }, function () {
        this.route('edit-client');
        this.route('client-details');
        this.route('users', function () {
          this.route('add-user');
          this.route('user', { path: ':userSlug' }, function () {
            this.route('user-details');
            this.route('edit-user');
          });
        });
      });
    });

  });
});

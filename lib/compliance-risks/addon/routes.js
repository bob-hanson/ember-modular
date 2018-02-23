import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {

  this.route('domains', function () {
    this.route('top-risks'); // Top Risks
    this.route('domain', { path: ':id' }, function () {
      this.route('sub-domains', function () {
        this.route('domain-risks');
        this.route('sub-domain', { path: ':id' }, function () {
          this.route('categories', function () {
            this.route('sub-domain-risks');
            this.route('category', { path: ':id' }, function () {
              this.route('sub-categories', function () {
                this.route('sub-category', { path: ':id' }, function () {
                  this.route('sub-category-risks', function () {
                    this.route('new-risk-assessment');
                  });
                });
              });
            });
          });
        });
      });
    });
  });

});

import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('projects', function() {
    this.route('project', { path: ':projectSlug' }, function() {
      this.route('project-details', function() {
        this.route('project-encounters', function() {
          this.route('project-encounter', { path: ':encounterSlug'}, function() {
            this.route('edit-encounter', function() {
              this.route('patient-data');
              this.route('codes');
              this.route('checklist');
            });
          });
        });
      });
    });
  });
  // this.route('qa-projects', function() {
  //   this.route('project', { path: ':projectSlug' }, function() {
  //     this.route('project-details', function() {
  //       this.route('project-encounters', function() {
  //         this.route('project-encounter', { path: ':encounterSlug'}, function() {
  //           this.route('edit-encounter', function() {
  //
  //           });
  //         });
  //       });
  //     });
  //   });
  // });
});

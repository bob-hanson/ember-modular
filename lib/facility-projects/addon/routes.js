import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('projects', function() {
    this.route('new-project');
    this.route('project', { path: ':projectSlug' }, function() {
      this.route('project-details', function() {
        this.route('claims', function() {
          this.route('bulk-upload');
        });
      });
      this.route('edit-project');
    });
  });
  this.route('pending-tasks', function(){
    this.route('pending-audits', { path: '/audits' });
    this.route('resources', function() {
      this.route('resource', { path: ':resourceSlug' }, function() {
        this.route('resource-audits');
      })
    });
    this.route('missing-data');
    this.route('reports');
  });
  this.route('manage-audits', { path: '/audits' }, function() {
    this.route('manage-audit', { path: ':auditSlug' }, function() {
      this.route('audit-encounters');
    })
  });
});

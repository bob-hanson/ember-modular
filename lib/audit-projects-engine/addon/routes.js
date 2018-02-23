import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('new-audit-project');
  this.route('audit-project', { path: ':auditProjectSlug' }, function() {
    this.route('audit-project-details');
    this.route('audits', function() {
      this.route('new-audit');
      this.route('import-claims-assign-audit');
      this.route('audit', { path: ':auditSlug'}, function() {
        this.route('audit-details');
      });
    });
    this.route('edit-audit-project');
  });
});

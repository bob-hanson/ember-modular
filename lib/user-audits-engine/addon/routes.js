import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('user-project', { path: ':projectSlug'}, function() {
    this.route('user-audits', function() {
      this.route('user-audit', { path: ':auditSlug' }, function () {
        this.route('user-audit-details');
        // Audit Box
        this.route('edit-audit', function() {
          this.route('edit-audit-details');
          this.route('edit-patient-data');
          this.route('edit-audit-history');
          this.route('edit-audit-examination', function() {
            this.route('1995-pe');
            this.route('1997-pe');
          });
          this.route('edit-medical-decision-making');
          this.route('edit-time-based-coding');
          this.route('edit-critical-care-services');
          this.route('edit-audit-procedures');
          this.route('edit-audit-documentation-services');
          this.route('edit-audit-codes');
          this.route('edit-audit-compentency-scoring');
        });
      });
    });
  });
});

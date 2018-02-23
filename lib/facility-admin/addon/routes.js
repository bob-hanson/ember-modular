import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {

  // Facility Admin Manage Users
  this.route('facility-users', function() {
    this.route('new-user');
    this.route('bulk-upload');
    this.route('facility-user', { path: ':userSlug' }, function () {
      this.route('user-details');
      this.route('reset-password');
      this.route('edit-user');
    });
  });
  // Facility Admin Manage Lists
  this.route('manage-lists', function() {
    this.route('facilities', function() {
      this.route('new-facility');
      this.route('bulk-upload');
      this.route('facility', { path: ':facilitySlug' }, function () {
        this.route('facility-details');
        this.route('facility-coders');
        this.route('facility-providers');
        this.route('edit-facility');
      });
    });
    this.route('coders', function() {
      this.route('new-coder');
      this.route('bulk-upload');
      this.route('coder', { path: ':coderSlug' }, function () {
        this.route('coder-details');
        this.route('coder-facilities');
        this.route('edit-coder');
      });
    });
    this.route('organizations', function() {
      this.route('new-organization');
      this.route('bulk-upload');
      this.route('organization', { path: ':organizationSlug' }, function () {
        this.route('organization-details');
        this.route('edit-organization');
      });
    });
    this.route('providers', function() {
      this.route('new-provider');
      this.route('bulk-upload');
      this.route('provider', { path: ':providerSlug' }, function () {
        this.route('provider-details');
        this.route('provider-facilities');
        this.route('edit-provider');
      });
    });
    this.route('payers', function() {
      this.route('new-payer');
      this.route('bulk-upload');
      this.route('payer', { path: ':payerSlug' }, function () {
        this.route('payer-detail');
        this.route('payer-schedules');
        this.route('edit-payer');
      });
    });
  });

  // Facility Admin Audit Guidelines
  this.route('audit-settings', function() {
    this.route('audit-guidelines', function() {
      // Create New Guideline
      this.route('new-audit-guideline', function() {
        this.route('new-audit-scope');
        this.route('new-report-parameters');
        this.route('new-scoring-method');
      });
      // Edit Existing Guideline
      this.route('audit-guideline', { path: ':guidelineSlug' }, function() {
        this.route('edit-audit-guideline', function() {
          this.route('edit-audit-scope');
          this.route('edit-report-parameters');
          this.route('edit-scoring-method');
        });
      });
    });

    this.route('checklists', function() {
      this.route('categories', function() {
        this.route('category', { path: ':categorySlug'}, function() {
          this.route('category-details');
          this.route('edit-category');
          this.route('templates');
        });
        this.route('new-category');
        this.route('bulk-upload');
      });
      this.route('sub-categories', function() {
        this.route('sub-category', { path: ':subcategorySlug' }, function() {
          this.route('sub-category-details');
          this.route('edit-sub-category');
        });
        this.route('new-sub-category');
        this.route('bulk-upload');
      });
      this.route('templates', function() {
        this.route('template', { path :':templateSlug' }, function() {
          this.route('edit-template');
          this.route('template-details');
        });
        this.route('new-template');
        this.route('bulk-upload');
      });
    });

    this.route('document-checklist');

    this.route('procedure-checklist', function() {
      this.route('facility-procedures', function() {
        this.route('facility-procedure', { path: ':procedureSlug' }, function() {
          this.route('facility-procedure-criterion');
        });
      });
    });

    this.route('chart-level-comments', function() {

    });

    this.route('findings-recommendations', function() {
      this.route('categories', function() {
        this.route('category', { path: ':categorySlug' }, function () {
          this.route('category-details');
          this.route('edit-category');
        });
        this.route('new-category');
      });
      this.route('sub-categories', function () {
        this.route('sub-category', { path: ':subcategorySlug' }, function () {
          this.route('sub-category-details');
          this.route('edit-sub-category');
        });
        this.route('new-sub-category');
      });
      this.route('templates', function () {
        this.route('template', { path: ':templateSlug' }, function () {
          this.route('edit-template');
          this.route('template-details');
        });
        this.route('new-template');
      });
    });
  });

});

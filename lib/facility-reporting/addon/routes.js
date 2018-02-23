import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('coders', function() {
    this.route('inpatient',function(){
      this.route('coder', { path: ':coderSlug'},function(){
        this.route('coder-audit-projects');
      })
    });
    this.route('outpatient', function(){
      this.route('coder', { path: ':coderSlug'},function(){
        this.route('coder-audit-projects');
      })
    });
  });
  this.route('projects', function() {
    this.route('inpatient',function(){
      this.route('project', { path: ':projectSlug'},function(){
        this.route('coder-projects');
      })
    });

    this.route('outpatient',function(){
      this.route('project', { path: ':projectSlug'},function(){
        this.route('coder-projects');
      })
    });
  });
});

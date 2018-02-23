import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-report-parameters', 'Integration | Component | new report parameters', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-report-parameters}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-report-parameters}}
      template block text
    {{/new-report-parameters}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

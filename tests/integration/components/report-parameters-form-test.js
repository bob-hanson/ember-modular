import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('report-parameters-form', 'Integration | Component | report parameters form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{report-parameters-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#report-parameters-form}}
      template block text
    {{/report-parameters-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

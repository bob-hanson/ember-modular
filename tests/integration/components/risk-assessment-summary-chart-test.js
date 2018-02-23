import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('risk-assessment-summary-chart', 'Integration | Component | risk assessment summary chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{risk-assessment-summary-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#risk-assessment-summary-chart}}
      template block text
    {{/risk-assessment-summary-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

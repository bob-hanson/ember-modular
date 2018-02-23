import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('facility-procedure-criterion', 'Integration | Component | facility procedure criterion', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{facility-procedure-criterion}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#facility-procedure-criterion}}
      template block text
    {{/facility-procedure-criterion}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

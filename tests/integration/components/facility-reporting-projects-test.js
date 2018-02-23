import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('facility-reporting-projects', 'Integration | Component | facility reporting projects', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{facility-reporting-projects}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#facility-reporting-projects}}
      template block text
    {{/facility-reporting-projects}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

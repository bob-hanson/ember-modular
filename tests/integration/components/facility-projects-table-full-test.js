import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('facility-projects-table-full', 'Integration | Component | facility projects table full', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{facility-projects-table-full}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#facility-projects-table-full}}
      template block text
    {{/facility-projects-table-full}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

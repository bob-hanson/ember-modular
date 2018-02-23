import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('manage-facility-projects', 'Integration | Component | manage facility projects', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{manage-facility-projects}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#manage-facility-projects}}
      template block text
    {{/manage-facility-projects}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

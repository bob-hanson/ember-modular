import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('help-launcher-icon', 'Integration | Component | help launcher icon', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{help-launcher-icon}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#help-launcher-icon}}
      template block text
    {{/help-launcher-icon}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

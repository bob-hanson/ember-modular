import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('procedure-checklists', 'Integration | Component | procedure checklists', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{procedure-checklists}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#procedure-checklists}}
      template block text
    {{/procedure-checklists}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

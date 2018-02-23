import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('documentation-checklists', 'Integration | Component | documentation checklists', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{documentation-checklists}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#documentation-checklists}}
      template block text
    {{/documentation-checklists}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

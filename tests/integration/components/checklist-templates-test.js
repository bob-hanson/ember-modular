import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checklist-templates', 'Integration | Component | checklist templates', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{checklist-templates}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#checklist-templates}}
      template block text
    {{/checklist-templates}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checklist-subcategory-form', 'Integration | Component | checklist subcategory form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{checklist-subcategory-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#checklist-subcategory-form}}
      template block text
    {{/checklist-subcategory-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

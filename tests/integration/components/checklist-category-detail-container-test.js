import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checklist-category-detail-container', 'Integration | Component | checklist category detail container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{checklist-category-detail-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#checklist-category-detail-container}}
      template block text
    {{/checklist-category-detail-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checklist-category-list-views', 'Integration | Component | checklist category list views', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{checklist-category-list-views}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#checklist-category-list-views}}
      template block text
    {{/checklist-category-list-views}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

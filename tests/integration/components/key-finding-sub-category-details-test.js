import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('key-finding-sub-category-details', 'Integration | Component | key finding sub category details', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{key-finding-sub-category-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#key-finding-sub-category-details}}
      template block text
    {{/key-finding-sub-category-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listed-findings-recommendations-subcategories-full', 'Integration | Component | listed findings recommendations subcategories full', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{listed-findings-recommendations-subcategories-full}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#listed-findings-recommendations-subcategories-full}}
      template block text
    {{/listed-findings-recommendations-subcategories-full}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('findings-recommendations-categories-list-views', 'Integration | Component | findings recommendations categories list views', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{findings-recommendations-categories-list-views}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#findings-recommendations-categories-list-views}}
      template block text
    {{/findings-recommendations-categories-list-views}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

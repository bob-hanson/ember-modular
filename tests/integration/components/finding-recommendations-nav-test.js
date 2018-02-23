import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('finding-recommendations-nav', 'Integration | Component | finding recommendations nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{finding-recommendations-nav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#finding-recommendations-nav}}
      template block text
    {{/finding-recommendations-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

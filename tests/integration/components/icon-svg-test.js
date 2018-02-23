import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('icon-svg', 'Integration | Component | icon svg', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{icon-svg}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#icon-svg}}
      template block text
    {{/icon-svg}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

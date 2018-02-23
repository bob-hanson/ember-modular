import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('domain-risks', 'Integration | Component | domain risks', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{domain-risks}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#domain-risks}}
      template block text
    {{/domain-risks}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

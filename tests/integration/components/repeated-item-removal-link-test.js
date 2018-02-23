import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repeated-item-removal-link', 'Integration | Component | repeated item removal link', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{repeated-item-removal-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#repeated-item-removal-link}}
      template block text
    {{/repeated-item-removal-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

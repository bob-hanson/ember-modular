import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hyspa-form-part', 'Integration | Component | hyspa form part', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hyspa-form-part}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hyspa-form-part}}
      template block text
    {{/hyspa-form-part}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

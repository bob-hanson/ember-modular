import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hyspa-form-elements-builder', 'Integration | Component | hyspa form elements builder', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hyspa-form-elements-builder}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hyspa-form-elements-builder}}
      template block text
    {{/hyspa-form-elements-builder}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hyspa-checkbox-component', 'Integration | Component | hyspa checkbox component', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hyspa-checkbox-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hyspa-checkbox-component}}
      template block text
    {{/hyspa-checkbox-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

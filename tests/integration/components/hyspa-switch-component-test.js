import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hyspa-switch-component', 'Integration | Component | hyspa switch component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hyspa-switch-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hyspa-switch-component}}
      template block text
    {{/hyspa-switch-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

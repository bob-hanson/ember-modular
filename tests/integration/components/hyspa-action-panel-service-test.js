import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hyspa-action-panel-service', 'Integration | Component | hyspa action panel service', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hyspa-action-panel-service}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hyspa-action-panel-service}}
      template block text
    {{/hyspa-action-panel-service}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

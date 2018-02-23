import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hyspa-action-panel-actions-menu', 'Integration | Component | hyspa action panel actions menu', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hyspa-action-panel-actions-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hyspa-action-panel-actions-menu}}
      template block text
    {{/hyspa-action-panel-actions-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pending-tasks-sidebar', 'Integration | Component | pending tasks sidebar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pending-tasks-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pending-tasks-sidebar}}
      template block text
    {{/pending-tasks-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

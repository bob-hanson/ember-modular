import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('table-layout-cell', 'Integration | Component | table layout cell', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{table-layout-cell}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#table-layout-cell}}
      template block text
    {{/table-layout-cell}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('coder-report-options', 'Integration | Component | coder report options', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{coder-report-options}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#coder-report-options}}
      template block text
    {{/coder-report-options}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

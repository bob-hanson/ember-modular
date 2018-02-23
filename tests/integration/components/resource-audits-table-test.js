import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('resource-audits-table', 'Integration | Component | resource audits table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{resource-audits-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#resource-audits-table}}
      template block text
    {{/resource-audits-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

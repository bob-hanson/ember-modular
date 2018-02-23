import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('manage-audits', 'Integration | Component | manage audits', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{manage-audits}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#manage-audits}}
      template block text
    {{/manage-audits}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

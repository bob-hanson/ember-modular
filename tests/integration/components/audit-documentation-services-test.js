import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audit-documentation-services', 'Integration | Component | audit documentation services', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audit-documentation-services}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audit-documentation-services}}
      template block text
    {{/audit-documentation-services}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

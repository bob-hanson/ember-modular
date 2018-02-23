import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('import-claims-assign-audit', 'Integration | Component | import claims assign audit', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{import-claims-assign-audit}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#import-claims-assign-audit}}
      template block text
    {{/import-claims-assign-audit}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

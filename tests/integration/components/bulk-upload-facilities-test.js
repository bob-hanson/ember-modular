import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bulk-upload-facilities', 'Integration | Component | bulk upload facilities', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bulk-upload-facilities}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bulk-upload-facilities}}
      template block text
    {{/bulk-upload-facilities}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

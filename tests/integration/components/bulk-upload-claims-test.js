import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bulk-upload-claims', 'Integration | Component | bulk upload claims', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bulk-upload-claims}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bulk-upload-claims}}
      template block text
    {{/bulk-upload-claims}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

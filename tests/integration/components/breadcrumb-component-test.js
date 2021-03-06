import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('breadcrumb-component', 'Integration | Component | breadcrumb component', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{breadcrumb-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#breadcrumb-component}}
      template block text
    {{/breadcrumb-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

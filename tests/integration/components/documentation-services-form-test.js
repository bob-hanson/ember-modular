import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('documentation-services-form', 'Integration | Component | documentation services form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{documentation-services-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#documentation-services-form}}
      template block text
    {{/documentation-services-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

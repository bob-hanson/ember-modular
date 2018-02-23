import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('critical-care-services-form', 'Integration | Component | critical care services form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{critical-care-services-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#critical-care-services-form}}
      template block text
    {{/critical-care-services-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

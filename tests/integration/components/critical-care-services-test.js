import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('critical-care-services', 'Integration | Component | critical care services', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{critical-care-services}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#critical-care-services}}
      template block text
    {{/critical-care-services}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

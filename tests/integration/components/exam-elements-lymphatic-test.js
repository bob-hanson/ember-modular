import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exam-elements-lymphatic', 'Integration | Component | exam elements lymphatic', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exam-elements-lymphatic}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exam-elements-lymphatic}}
      template block text
    {{/exam-elements-lymphatic}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

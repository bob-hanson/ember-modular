import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exam-elements-eyes', 'Integration | Component | exam elements eyes', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exam-elements-eyes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exam-elements-eyes}}
      template block text
    {{/exam-elements-eyes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

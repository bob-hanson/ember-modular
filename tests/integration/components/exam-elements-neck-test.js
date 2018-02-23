import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exam-elements-neck', 'Integration | Component | exam elements neck', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exam-elements-neck}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exam-elements-neck}}
      template block text
    {{/exam-elements-neck}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

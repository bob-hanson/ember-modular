import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exam-elements-psychiatric', 'Integration | Component | exam elements psychiatric', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exam-elements-psychiatric}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exam-elements-psychiatric}}
      template block text
    {{/exam-elements-psychiatric}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

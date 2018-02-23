import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exam-elements-cardiovascular', 'Integration | Component | exam elements cardiovascular', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exam-elements-cardiovascular}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exam-elements-cardiovascular}}
      template block text
    {{/exam-elements-cardiovascular}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

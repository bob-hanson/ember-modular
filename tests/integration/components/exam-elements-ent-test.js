import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exam-elements-ent', 'Integration | Component | exam elements ent', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exam-elements-ent}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exam-elements-ent}}
      template block text
    {{/exam-elements-ent}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

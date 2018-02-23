import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('exam-elements-constitutional', 'Integration | Component | exam elements constitutional', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{exam-elements-constitutional}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#exam-elements-constitutional}}
      template block text
    {{/exam-elements-constitutional}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('base-exam-elements-component', 'Integration | Component | base exam elements component', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{base-exam-elements-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#base-exam-elements-component}}
      template block text
    {{/base-exam-elements-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

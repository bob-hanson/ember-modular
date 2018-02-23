import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('time-based-coding', 'Integration | Component | time based coding', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{time-based-coding}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#time-based-coding}}
      template block text
    {{/time-based-coding}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('chart-level-comments', 'Integration | Component | chart level comments', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{chart-level-comments}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#chart-level-comments}}
      template block text
    {{/chart-level-comments}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

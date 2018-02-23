import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audit-chart-comments', 'Integration | Component | audit chart comments', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audit-chart-comments}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audit-chart-comments}}
      template block text
    {{/audit-chart-comments}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

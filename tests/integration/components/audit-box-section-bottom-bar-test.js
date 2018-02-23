import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audit-box-section-bottom-bar', 'Integration | Component | audit box section bottom bar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audit-box-section-bottom-bar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audit-box-section-bottom-bar}}
      template block text
    {{/audit-box-section-bottom-bar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

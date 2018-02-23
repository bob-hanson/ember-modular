import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listed-checklist-templates-full', 'Integration | Component | listed checklist templates full', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{listed-checklist-templates-full}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#listed-checklist-templates-full}}
      template block text
    {{/listed-checklist-templates-full}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

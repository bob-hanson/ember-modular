import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listed-reporting-coders-full', 'Integration | Component | listed reporting coders full', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{listed-reporting-coders-full}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#listed-reporting-coders-full}}
      template block text
    {{/listed-reporting-coders-full}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

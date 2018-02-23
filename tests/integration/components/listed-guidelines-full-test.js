import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listed-guidelines-full', 'Integration | Component | listed guidelines full', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{listed-guidelines-full}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#listed-guidelines-full}}
      template block text
    {{/listed-guidelines-full}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listed-reporting-projects-full', 'Integration | Component | listed reporting projects full', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{listed-reporting-projects-full}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#listed-reporting-projects-full}}
      template block text
    {{/listed-reporting-projects-full}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

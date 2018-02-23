import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('1995-pe-contentview', 'Integration | Component | 1995 pe contentview', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{1995-pe-contentview}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#1995-pe-contentview}}
      template block text
    {{/1995-pe-contentview}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

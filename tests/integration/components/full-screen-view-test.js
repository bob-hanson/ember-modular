import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('full-screen-view', 'Integration | Component | full screen view', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{full-screen-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#full-screen-view}}
      template block text
    {{/full-screen-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

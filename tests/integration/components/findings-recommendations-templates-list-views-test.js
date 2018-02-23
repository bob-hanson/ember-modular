import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('findings-recommendations-templates-list-views', 'Integration | Component | findings recommendations templates list views', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{findings-recommendations-templates-list-views}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#findings-recommendations-templates-list-views}}
      template block text
    {{/findings-recommendations-templates-list-views}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('hyspa-basic-record-importer', 'Integration | Component | hyspa basic record importer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{hyspa-basic-record-importer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#hyspa-basic-record-importer}}
      template block text
    {{/hyspa-basic-record-importer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

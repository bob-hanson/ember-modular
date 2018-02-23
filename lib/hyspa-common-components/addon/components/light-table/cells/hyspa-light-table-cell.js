import Cell from 'ember-light-table/components/cells/base';
import { get, set, computed } from '@ember/object';
import { alias, equal, not, notEmpty } from '@ember/object/computed';
import { ifThenElseWithValues } from 'ember-macaroni';
import { inject as service } from '@ember/service';
import layout from 'hyspa-common-components/templates/components/hyspa-light-table-cell';

export default Cell.extend({
  layout,
  classNames: ['hyspa-light-table-cell'],
  dateTimeFormat: 'M/DD/YYYY',
  format: alias('column.formatAs'),
  hyspaEnumsService: service(),

  linkPath: null,
  formattedDate: null,
  statusIcon: null,
  status: null,
  showStatusIconOnly: alias('column.iconOnly'),
  showStatusText: not('showStatusIconOnly'),
  statusIconPadding: ifThenElseWithValues('showStatusText', '0,1,0,0', '0,0,0,0'),
  fontType: alias('column.fontType'),

  isDateTime: equal('format', 'dateTime'),
  isLink: equal('format', 'link'),
  isStatusIndicator: equal('format', 'statusIndicator'),
  isActionIcon: equal('format', 'actionIcon'),
  isRowSelector: equal('format', 'rowSelector'),
  isUsingEnum: notEmpty('column.useEnum'),

  displayValue: computed('column', function() {
    if (get(this, 'isUsingEnum')) {
      let enumServiceKey = get(this, 'column.useEnum');
      let enumKey = get(this, 'value');
      return get(this, `hyspaEnumsService.${enumServiceKey}.${enumKey}`);
    } else {
      return get(this, 'value');
    }
  }),

  init() {
    this._super(...arguments);
    this.propertiesSetup();
  },

  propertiesSetup() {
    switch(get(this, 'format')) {
      case 'link':
        this.setupLink();
        break;
      case 'dateTime':
        this.setupDateTime();
        break;
      case 'statusIndicator':
        this.setupStatusIndicator();
        break;
    }
  },

  setupLink() {
    var key = get(this, 'column.linkPath');
    set(this, 'linkPath', get(this, `row.${key}`));
  },

  setupDateTime() {
    var formattedDate = moment(get(this, 'displayValue')).format(get(this, 'column.dateTimeFormat') || get(this, 'dateTimeFormat'));
    set(this, 'formattedDate', formattedDate);
  },

  setupStatusIndicator() {
    var iconKey = get(this, 'column.statusIconPath'),
        statusKey = get(this, 'column.statusPath');

    set(this, 'statusIcon', get(this, `row.${iconKey}`));
    set(this, 'status', get(this, `row.${statusKey}`));
  },


  actions: {
    triggerActionIconAction() {
      get(this, 'column.action')(get(this, 'row'));
    }
  }

});

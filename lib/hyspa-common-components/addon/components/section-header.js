import { get, set } from '@ember/object';
import { equal } from '@ember/object/computed';
import { scheduleOnce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/section-header';

export default BaseComponent.extend({
  layout,
  tagName: 'header',
  classNames: ['section-header', 'primary-border-color'],
  classNameBindings: ['colSpan', 'headerType', 'isFixed', 'hasBorder:has-border', 'titleFont', 'hasAppBorderColor'],
  headerText: '',
  headerType: 'section',
  isFixed: false,
  hasBorder: false,
  titleFont: false,
  hasAppBorderColor: false,

  isPageHeader: equal('headerType', 'page'),
  isSectionHeader: equal('headerType', 'section'),
  isSubSectionHeader: equal('headerType', 'sub-section'),
  isColumnHeader: equal('headerType', 'column'),
  isFormColumnHeader: equal('headerType', 'form-column'),

  initComponent() {
    scheduleOnce('afterRender', this, this.setPadding);
  },

  setPadding() {
    if (isPresent(this.attrs.padding)) {
      return;
    }
    switch(get(this, 'headerType')) {
      case 'page':
        set(this, 'padding', '0,0,1,0');
        break;
      case 'section':
        set(this, 'padding', '2,0,1,0');
        break;
      case 'sub-section':
        set(this, 'padding', '2,0,1,0');
        break;
      case 'column':
        set(this, 'padding', '2,1,2,2');
        break;
      case 'form-column':
        set(this, 'padding', '2,0,0,0');
        break;
    }
  }

});

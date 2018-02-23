import { computed, observer, get, set } from '@ember/object';
import { alias, or, and, not, empty } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/listed-navigation-item';
import computedIndirect from 'ember-computed-indirect';

export default BaseComponent.extend({
  layout,
  tagName: 'li',
  classNames: ['listed-navigation-item', 'primary-border-color'],
  classNameBindings: ['colSpan', 'isActive', 'isInternalNavOnly', 'accentBorderColor'],
  padding: '1,1,1,2',
  currentItem: null,
  defaultFullWidth: 90,
  defaultTruncatedWidth: 68,
  displayNameWidth: null,
  isHovering: false,
  clickHandler: null,
  isExternal: false,
  isNotExternal: not('isExternal'),
  noModel: empty('currentItem'),
  isInternalNavOnly: and('isNotExternal', 'noModel'),

  linkClass: computed(function() {
    return get(this, 'isInternalNavOnly') ? 'internal-nav-link' : '';
  }),

  linkTextIndirect: computed(function () {
    return isPresent(get(this, 'linkTextMap')) ? `currentItem.${get(this, 'linkTextMap')}` : '';
  }),

  dynamicLinkText: computedIndirect('linkTextIndirect'),

  displayValue: computed('dynamicLinkText', 'linkText', function() {
    return isPresent(get(this, 'dynamicLinkText')) ? get(this, 'dynamicLinkText') : get(this, 'currentItem.linkText');
  }),

  activePath: computed('currentItem.activePath', 'activePathMap', function () {
    var currentItem = get(this, 'currentItem');
    if (isPresent(currentItem)) {
      return isPresent(get(this, 'activePathMap')) ? get(currentItem, get(this, 'activePathMap')) : get(currentItem, 'activePath');
    } else {
      return '';
    }
  }),

  linkPath: computed('currentItem.linkPath', 'linkPathMap', function () {
    var currentItem = get(this, 'currentItem');
    return isPresent(get(this, 'linkPathMap')) ? get(currentItem, get(this, 'linkPathMap')) : get(currentItem, 'linkPath');
  }),

  isActive: alias('currentItem.isSelected'),
  accentBorderColor: alias('currentItem.isSelected'),
  isActiveOrHovering: or('isActive', 'isHovering'),
  observerCurrentItemState: observer('isActive', 'isHovering', function() {
    this.setDisplayWidth();
  }),

  initComponent() {
    this.setDisplayWidth();
  },

  setDisplayWidth() {
    get(this, 'isActiveOrHovering') ? set(this, 'displayNameWidth', get(this, 'defaultTruncatedWidth'))
                                    : set(this, 'displayNameWidth', get(this, 'defaultFullWidth'));
  },

  handleClick() {
    if (isPresent(get(this, 'clickHandler'))) {
      this.attrs.clickHandler();
      // this.sendAction(get(this, 'clickHandler', get(this, 'currentItem')));
    }
  },

  click(event) {
    this.handleClick();
    get(this, 'ripple').initRipple(event, this);
  },

  mouseEnter() {
    set(this, 'isHovering', true);
  },

  mouseLeave() {
    set(this, 'isHovering', false);
  }

});

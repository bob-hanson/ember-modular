import Service from '@ember/service';
import { isPresent } from '@ember/utils';
import { debounce } from '@ember/runloop';
import { get, set } from '@ember/object';
import $ from 'jquery';

export default Service.extend({
  appContent: null,
  secondaryNavHeight: null,
  topSearchHeight: null,
  footerHeight: null,
  bottomGutter: 1,

  resizeApp() {
		debounce(this, this._resizeAll, 150);
	},

  _resizeAll() {
    var self = this;
    this.resizeComponentColumns();
    this.resizeContentViews();
    this.resizeTabPanels();
    this.resizeFormViews();
    this.resizeNotificationPanel();
    $(window).resize(function() {
      debounce(self, self._resizeAll, 150);
    });
  },

  getAppContentHeight() {
    return $('#app-content').height();
  },

  getSecondaryNavHeight() {
    if (get(this, 'secondaryNavHeight')) {
      return get(this, 'secondaryNavHeight');
    } else {
      const secondaryNavHeight = $('#secondary-nav-wrap').height();
      set(this, 'secondaryNavHeight', secondaryNavHeight);
      return secondaryNavHeight;
    }
  },

  getFooterHeight() {
    if (get(this, 'footerHeight')) {
      return get(this, 'footerHeight');
    } else {
      const footerHeight = $('#master-footer').height();
      set(this, 'footerHeight', footerHeight);
      return footerHeight;
    }
  },

  getTopSearchHeight() {
    if (get(this, 'topSearchHeight')) {
      return get(this, 'topSearchHeight');
    } else {
      let topSearchHeight = $('#app-content .top-search').height();
      topSearchHeight = topSearchHeight ? topSearchHeight : 0;
      set(this, 'topSearchHeight', topSearchHeight);
      return topSearchHeight;
    }
  },

  getContentViewMetaHeight() {
    var contentViewMeta = $('.content-view-meta');
    return contentViewMeta.length ? contentViewMeta.height() : 0;
  },

  contentHeight() {
    var appContentHeight = this.getAppContentHeight(),
        secondaryNavHeight = this.getSecondaryNavHeight(),
        footerHeight = this.getFooterHeight(),
        topSearchHeight = this.getTopSearchHeight();

    return appContentHeight - (footerHeight + secondaryNavHeight + topSearchHeight + get(this, 'bottomGutter'));
  },

  columnChartHeight() {
    const chart = $('.list-column').find('.hyspa-chart');
    return isPresent(chart) ? chart.outerHeight() : 0;
  },

  resizeFullScreen() {
    const self = this;
    $('.full-screen-view').outerHeight(window.innerHeight);
    $(window).resize(function() {
      debounce(self, self.resizeFullScreen, 150);
    });
  },

  resizeComponentColumns() {
    const self = this;
    const contentHeight = this.contentHeight();
    // const chartHeight = this.columnChartHeight();
    // const columnHeight = contentHeight - chartHeight;

    $('.component-column').outerHeight(contentHeight);
    $('.inner-column').outerHeight(contentHeight);
    $('.inner-column').each(function () {
      self.resizeListedItems($(this));
    });
  },

  resizeContentViews() {
    $('.content-view').outerHeight(this.contentHeight());
  },

  resizeFormViews() {
    var formView = $('.form-view'),
        fixedHeaderHeight = formView.parent().find('.is-fixed').outerHeight() || 0;
    
    formView.outerHeight(formView.parent().height() - fixedHeaderHeight);
  },

  resizeNotificationPanel() {
    document.getElementsByClassName('notifications-list')[0].style.height = window.innerHeight + "px";
  },

  resizeListedItems(column) {
    var columnHeaderHeight = column.find('.column-header').outerHeight(),
        columnFilterHeight = column.find('.column-filter').outerHeight();
    column.find('.listed-items').outerHeight(column.height() - (columnHeaderHeight + columnFilterHeight));
  },

  resizeTabPanels() {
    var self = this;
    $('.content-view').each(function () {
      self.resizeTabPanel($(this));
    });
  },

  resizeTabPanel(column) {
    var columnHeaderHeight = 0,
        columnTabListHeight = 0,
        columnHeader = column.find('.column-header');
    if (isPresent(columnHeader)) {
      columnHeaderHeight = columnHeader.outerHeight();
    }

    columnTabListHeight = column.find('.tabs-list').outerHeight();
    column.find('.tabs-container:not(.vertical-layout) .tab-panel').outerHeight(column.height() - (columnHeaderHeight + columnTabListHeight));
  },

  resizeVerticalTabList(tabList) {
    tabList.height(0);
    tabList.height(tabList.parent().height());
  }

});

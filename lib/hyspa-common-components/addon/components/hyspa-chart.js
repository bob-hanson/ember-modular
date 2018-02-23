/* global Highcharts */
import BaseComponent from 'hyspa-base-components/components/base-component';
import { computed, get, set, getWithDefault } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { notEmpty, and } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import { assign } from '@ember/polyfills';
import layout from '../templates/components/hyspa-chart';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-chart'],
  classNameBindings: ['colSpan'],

  currentChart: null,
  chartSeries: null,
  chartOptions: undefined,
  chartWidth: 'auto',
  chartHeight: '200',

  callback: undefined,

  chartContainer() {
    return this.element.querySelectorAll('.chart-container')[0];
  },

  hasChart: notEmpty('currentChart'),
  hasChartSeries: notEmpty('chartSeries'),
  hasChartAndContent: and('hasChart', 'hasChartSeries'),

  chartDefaults() {
    return {
      credits: {
        enabled: false
      },
      chart: {
        width: get(this, 'chartWidth'),
        height: get(this, 'chartHeight'),
      },
      colors: get(this, 'defaultColors')
    }
  },

  initComponent() {
    this.setCollections();
  },

  setCollections() {
    set(this, 'defaultColors', [
        '#ff3d4c',
        '#4dd0e1',
        '#e2e7ec',
        '#bae3f5',
        '#af1eff',
        '#12c8a9',
        '#b2ebf2',
        '#ff563f',
        '#e9d523',
        '#3e84f2',
        '#c908d9',
        '#fafafa'
      ])
  },

  buildSeries() {
    return get(this, 'chartSeries').map((series) => series);
  },

  buildOptions: computed('chartOptions', 'chartSeries.[]', function () {
    return assign(this.chartDefaults(), getWithDefault(this, 'chartOptions', {}), { series: this.buildSeries()});
  }),

  drawAfterRender() {
    scheduleOnce('afterRender', this, 'draw');
  },

  draw() {
    set(this, 'currentChart', Highcharts.chart(this.chartContainer(), get(this, 'buildOptions')));
  },

  didInsertElement() {
    this._super(...arguments);
    this.drawAfterRender();
  },

  willDestroyElement() {
    this._super(...arguments);

    if (get(this, 'currentChart')) {
      get(this, 'currentChart').destroy();
    }
  },

  triggerPointClick(option) {
    if (isPresent(this.attrs.pointClick)) {
      this.attrs.pointClick(option);
    }
  }


});

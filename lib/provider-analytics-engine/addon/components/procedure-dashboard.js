import { inject as service } from '@ember/service';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/procedure-dashboard';
import { computed, get } from '@ember/object';

export default BaseComponent.extend({
  layout,
  store: service(),
  classNames: ['procedure-dashboard'],
  classNameBindings: ['colSpan'],

  linesOfBusinesOptions: computed('', function () {
    return [
      { optionName: 'Super Admin', optionValue: 'super' },
      { optionName: 'Admin', optionValue: 'admin' },
      { optionName: 'Audit', optionValue: 'audit' }
    ]
  }),

  providerGroupOptions: computed('', function () {
    return [
      { optionName: 'Super Admin', optionValue: 'super' },
      { optionName: 'Admin', optionValue: 'admin' },
      { optionName: 'Audit', optionValue: 'audit' }
    ]
  }),

  providerOptions: computed('', function () {
    return [
      { optionName: 'Super Admin', optionValue: 'super' },
      { optionName: 'Admin', optionValue: 'admin' },
      { optionName: 'Audit', optionValue: 'audit' }
    ]
  }),

  dateRangeOptions: computed('', function () {
    return [
      { optionName: 'Super Admin', optionValue: 'super' },
      { optionName: 'Admin', optionValue: 'admin' },
      { optionName: 'Audit', optionValue: 'audit' }
    ]
  }),

  categoryOptions: computed('', function () {
    return [
      { optionName: 'Super Admin', optionValue: 'super' },
      { optionName: 'Admin', optionValue: 'admin' },
      { optionName: 'Audit', optionValue: 'audit' }
    ]
  }),

  majorCategoryOptions: computed('', function () {
    return [
      { optionName: 'Super Admin', optionValue: 'super' },
      { optionName: 'Admin', optionValue: 'admin' },
      { optionName: 'Audit', optionValue: 'audit' }
    ]
  }),

  subCategoryOptions: computed('', function () {
    return [
      { optionName: 'Super Admin', optionValue: 'super' },
      { optionName: 'Admin', optionValue: 'admin' },
      { optionName: 'Audit', optionValue: 'audit' }
    ]
  }),

  procedureCodeOptions: computed('', function () {
    return [
      { optionName: 'Super Admin', optionValue: 'super' },
      { optionName: 'Admin', optionValue: 'admin' },
      { optionName: 'Audit', optionValue: 'audit' }
    ]
  }),

  modifierCodeOptions: computed('', function () {
    return [
      { optionName: 'Super Admin', optionValue: 'super' },
      { optionName: 'Admin', optionValue: 'admin' },
      { optionName: 'Audit', optionValue: 'audit' }
    ]
  }),

  valueSize: 20,
  compSize: 12,
  compValue: 225,

  chartOptions: computed(function () {
    var self = this;
    return {
      credits: {
        enabled: false
      },
      title: null,
      chart: {
        type: 'solidgauge',
        width: 120,
        height: 120
      },
      pane: {
        center: ['50%', '50%'],
        size: '100%',
        startAngle: 0,
        endAngle: 360,
        background: {
          backgroundColor: '#e2e2e2',
          innerRadius: '85%',
          outerRadius: '100%',
          shape: 'solid'
        }
      },

      yAxis: {
        min: 0,
        max: get(this, 'compValue'),
        title: {
          text: 'Providers',
          y: -40
        },
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
          y: 31
        }
      },

      plotOptions: self.plotOptions()
    }
  }),

  chartSeries: computed(function () {
    return [{
      name: 'Gauge Title',
      data: [80],
      dataLabels: {
        format: `<div style="text-align:center">
                  <span style="font-size:${get(this, 'valueSize')}px;color:"black">{y}</span><br/>
                  <span style="font-size:${get(this, 'compSize')}px;color:silver">{x}</span>
                </div>`
      },
    }]
  }),

  plotOptions() {
    var self = this;
    return {
      series: {
        cursor: 'pointer',
        point: {
          events: {
            click: function (event) {
              self.triggerPointClick(event.point.options);
            }
          }
        }
      },
      solidgauge: {
        innerRadius: '85%',
        dataLabels: {
          y: -25,
          borderWidth: 0,
          useHTML: true
        }
      }
    }
  },

  actions: {

    triggerDataSetFetch() {
      console.log('fetched');
    }

  }

});

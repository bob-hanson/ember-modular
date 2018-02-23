import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/domains-component';
import { computed } from '@ember/object';
import { notEmpty } from '@ember/object/computed';

export default ListColumn.extend({
  layout,
  classNames: ['domains'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20,
  testName: 'domains',

  isViewingRiskDomains: true,
  hasResults: notEmpty('currentCollection'),
  emptyCollectionMessage: 'No Results Available',

  chartOptions: computed(function() {
    var self = this;
    return {
      title: {
        verticalAlign: 'bottom',
        text: 'Domains',
        style: { "color": "#000", "fontSize": "16px", "opacity": "0.7" }
      },
      chart: {
        type: 'pie',
        height: 160,
        spacing: [0, 8, 0, 8]
      },
      plotOptions: self.plotOptions()
    }
  }),

  chartSeries: computed(function() {
    return [{
      type: 'pie',
      name: 'Domain',
      innerSize: '40%',
      data: [
        { y: 45, name: "HIPPA", id: 1 },
        { y: 20, name: "Fraud and Abuse", id: 2 },
        { y: 15, name: "Patient Care", id: 3 },
        { y: 20, name: "Tax Benefit", id: 4 }
      ]
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
      pie: {
        dataLabels: {
          enabled: false
        },
        label: {
          enabled: false
        }
      }
    }
  },

  triggerPointClick(option) {
    this.attrs.chartSeriesEvent(option);
  }

});

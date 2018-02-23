import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/sub-domains';
import { computed } from '@ember/object';
import { notEmpty } from '@ember/object/computed';

export default ListColumn.extend({
  layout,
  classNames: ['sub-domains'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20,
  testName: 'sub-domains',

  isViewingRiskSubDomains: true,
  hasResults: notEmpty('currentCollection'),
  emptyCollectionMessage: 'No Results Available',

  chartOptions: computed(function () {
    var self = this;
    return {
      title: {
        verticalAlign: 'bottom',
        text: '', // Needs to be dynamic
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

  chartSeries: computed(function () {
    return [{
      type: 'pie',
      innerSize: '40%',
      data: [
        { y: 35, name: "Privacy", id: 1 },
        { y: 30, name: "Security", id: 2 },
        { y: 25, name: "Suspect", id: 3 },
        { y: 10, name: "Fraud", id: 4 }
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

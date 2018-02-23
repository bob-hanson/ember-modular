import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/user-project-details';

export default ContentView.extend({
  layout,
  classNames: ['user-project-details'],
  classNameBindings: ['colSpan'],

  currentEncounters: alias('currentProject.auditEncounters'),
  detailsTitle: computed('currentProject', function () {
    return `${get(this, 'currentProject.coderName')}/${get(this, 'currentProject.projectName')} - Work Queue`;
  })


});

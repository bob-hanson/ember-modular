import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/user-details-card';

export default BaseComponent.extend({
    layout,
    classNames:['user-details-card'],
    classNameBindings:['colSpan']

});

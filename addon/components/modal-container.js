import Component from '@ember/component';
import { inject as service } from '@ember/service';

import layout from '../templates/components/modal-container';

export default Component.extend({
  layout,
  tagName: '',

  modals: service(),
});

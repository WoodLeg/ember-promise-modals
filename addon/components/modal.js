import Component from '@ember/component';

import layout from '../templates/components/modal';

export default Component.extend({
  layout,
  classNames: ['epm-modal'],

  actions: {
    close(result) {
      this.modal.close(result);
    },
  },
});

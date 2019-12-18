import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  storyblok: service('storyblok'),

  htmlData: computed('blok', function() {
    const blok = this.get('blok')
    return this.storyblok.richtextResolver(blok.content)
  })
});

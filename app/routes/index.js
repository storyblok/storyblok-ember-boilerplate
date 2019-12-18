import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  storyblok: service('storyblok'),

  model(params) {
    const { path } = params

    return this.storyblok.loadStory(path)
  }
});

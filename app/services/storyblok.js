import Service from '@ember/service';
import fetch from 'ember-fetch/ajax';
import StoryblokClient from 'storyblok-js-client';

export default Service.extend({
  init() {
    this._super(...arguments);

    const token = '<YOUR_SPACE_TOKEN>'

    this.config = {
      token,
      version: 'draft'
    }

    this.client = new StoryblokClient({
      accessToken: token
    })
  },

  loadStory(path) {
    const config = this.get('config')

    const URL = `https://api.storyblok.com/v1/cdn/stories/${path}?token=${config.token}&version=${config.version}`

    return fetch(URL)
      .then(response => response.story)
      .catch(err => {
        console.log(err) // eslint-disable-line
      });
  },

  richtextResolver(content) {
    return this.client.richTextResolver.render(content)
  }
});

'use strict';

/**
 * episode-collection service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::episode-collection.episode-collection');

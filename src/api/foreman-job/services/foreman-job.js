'use strict';

/**
 * foreman-job service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::foreman-job.foreman-job');

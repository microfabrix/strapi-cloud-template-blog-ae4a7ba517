'use strict';

/**
 * foreman-job-installation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::foreman-job-installation.foreman-job-installation');

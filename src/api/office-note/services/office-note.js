'use strict';

/**
 * office-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::office-note.office-note');

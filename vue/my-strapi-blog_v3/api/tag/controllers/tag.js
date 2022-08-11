"use strict";

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */
  async findOne(ctx) {
    const { id } = ctx.params;

    // let entities = await strapi.services.post.find({ id: 1 });
    // let entities = await strapi.query('post').find({ id: 1 });
    // let entities = await strapi.query('user', 'users-permissions').find(ctx.query);
    // let entities = await strapi.plugins["users-permissions"].services.user.fetchAll(ctx.query);
    
    const entity = await strapi.services.tag.findOne({ id }, ['posts.created_by']);

    return sanitizeEntity(entity, { model: strapi.models.tag });
  },
};

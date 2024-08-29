'use strict';

/**
 * galery controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::galery.galery', ({ strapi }) => ({
  async find(ctx) {
    // Call the default core controller's find method to get the data
    const { data, meta } = await super.find(ctx);

    // Customize the response
    const customData = data.map(item => ({
      id: item.id,
      judul: item.attributes.judul,
      upload_image: item.attributes.upload_image,
    }));

    // Return the custom response
    return { data: customData, meta };
  },

  async findOne(ctx) {
    // Call the default core controller's findOne method to get the data
    const { data } = await super.findOne(ctx);

    console.log(data)

    // Customize the response
    const customData = {
      id: data.id,
      judul: data.attributes.judul_galery,
      upload_image: data.attributes.upload_image,
    };

    // Return the custom response
    return { data: customData };
  },
}));

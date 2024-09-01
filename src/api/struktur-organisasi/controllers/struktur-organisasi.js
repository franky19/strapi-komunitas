'use strict';

/**
 * struktur-organisasi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::struktur-organisasi.struktur-organisasi', ({ strapi }) => ({
    // Override the default find method
    async find(ctx) {
      // Adjust the query to ensure the 'image_slider' field is populated
      ctx.query = {
        ...ctx.query,
        populate: ctx.query.populate || 'profil',
      };
  
      // Use the default core query to fetch the data with the adjusted query
      const { data, meta } = await super.find(ctx);
  
      // Customize the response data
      const customizedData = data.map(item => {
        // Retrieve the image_slider field if it exists
        const imageData = item.attributes.profil?.data;
  
        return {
          id: item.id,
          attributes: {
            ...item.attributes,
            profil: imageData ? {
              url: imageData.attributes.url,
            } : null,
          }
        };
      });
  
      return { data: customizedData, meta };
    }
  }));
  

"use strict";

/**
 * organitation-structure controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::organitation-structure.organitation-structure",
  ({ strapi }) => ({
    // Override the default find method
    async find(ctx) {
      // Adjust the query to ensure the 'image_slider' field is populated
      ctx.query = {
        ...ctx.query,
        populate: ctx.query.populate || "profile",
      };

      // Use the default core query to fetch the data with the adjusted query
      const { data, meta } = await super.find(ctx);

      // Customize the response data
      const customizedData = data.map((item) => {
        // Retrieve the image_slider field if it exists
        const imageData = item.attributes.profile?.data;

        return {
          id: item.id,
          attributes: {
            ...item.attributes,
            profile: imageData
              ? {
                  url: imageData.attributes.url,
                }
              : null,
          },
        };
      });

      return { data: customizedData, meta };
    },
  })
);

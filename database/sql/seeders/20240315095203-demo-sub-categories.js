'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const sub_categories = [
      { category_id: 1, subcategory_name: 'formal shirts', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 1, subcategory_name: 'casual shirts', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 1, subcategory_name: 'trousers', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 2, subcategory_id: "4", subcategory_name: 'dresses', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 2, subcategory_id: "4", subcategory_name: 'tops', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 2, subcategory_id: "5", subcategory_name: 'skirts', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 2, subcategory_id: "5", subcategory_name: 'sneakers', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 3, subcategory_name: 'boots', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 3, subcategory_name: 'sandals', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 4, subcategory_name: 'handbags', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 4, subcategory_name: 'backpacks', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 5, subcategory_name: 'watches', createdAt: new Date(), updatedAt: new Date() },
      { category_id: 5, subcategory_name: 'sunglasses', createdAt: new Date(), updatedAt: new Date() }
      // Add more subcategories as needed
    ];

    // Insert the subcategories into the database
    await queryInterface.bulkInsert('sub_categories', sub_categories);

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('sub_categories', null, {});

  }
};

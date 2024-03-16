'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {

        const categories = [
            { category_name: 'men', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'women', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'shoes', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'bags', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'accessories', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'outerwear', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'tops', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'bottoms', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'dresses', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'suits', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'athletic wear', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'formal wear', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'casual wear', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'jeans', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 't-shirts', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'hats', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'scarves', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'belts', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'socks', createdAt: new Date(), updatedAt: new Date() },
            { category_name: 'jackets', createdAt: new Date(), updatedAt: new Date() }
        ];

        // Insert the categories into the database
        await queryInterface.bulkInsert('categories', categories);

    },

    async down(queryInterface, Sequelize) {

        // Remove all inserted categories
        await queryInterface.bulkDelete('categories', null, {});

    }
};

const assert = require('assert');
const {add_category} = require('../src/CategoryManager/services/CategoryManagerService');


describe('Add a category', function () {
    it('should add a new category to the database', async function () {

        // Mock request object
        const req = {
            body: {
                category_name: 'New Category',
            }
        };

        // Call the function to add a category
        const result = await add_category(req);

        // Check if the category was added successfully
        assert.strictEqual(result.http_status, 201);
    });

    it('should return an error if category already exist', async function () {

        const req = {
            body: {
                category_name: 'New Category',
            }
        };

        // Call the function to add a category
        const result = await add_category(req);

        // Check if an error is returned
        assert.strictEqual(result.http_status, 422);

    });

});

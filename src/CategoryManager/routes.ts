import express from 'express';
import {CategoryManagerController} from './controllers';

const router = express.Router({mergeParams: true});

router.get('/category', CategoryManagerController.fetch_categories);
router.post('/category', CategoryManagerController.add_category);
router.delete('/category', CategoryManagerController.remove_category);
router.get('/category_and_sub/:id', CategoryManagerController.fetch_category_and_sub);
router.put('/category/change_subcategory', CategoryManagerController.change_subcategory);


export default router;

import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importFileController } from '../modules/cars/useCases/importFile';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();
const upload = multer({
    dest: './tmp'
});

categoriesRoutes.post('/', ( request, response ) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', ( request, response ) => {
    return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), ( request, response ) => {
    return importFileController.handle(request, response);
});

export {categoriesRoutes};
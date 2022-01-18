import fs from 'fs';
import { parse } from 'csv-parse';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase'

class ImportFileUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path);
        const createCategoryUseCase = new CreateCategoryUseCase(this.categoriesRepository);

        const parseFile = parse();

        stream.pipe(parseFile);

        parseFile.on('data', async (line) => {
            const [name, description] = line;
            try { 
                createCategoryUseCase.execute({name, description});
            } catch (e) {}
        })

        fs.promises.unlink(file.path);
    }
}

export { ImportFileUseCase };
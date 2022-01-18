import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface Irequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository) {}

    execute({ name, description }: Irequest): void {
        const categoryAlreadyExists = this.categoryRepository.findByName(name);
        
        if(categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }

        this.categoryRepository.create({name, description});
    }
}

export { CreateCategoryUseCase };
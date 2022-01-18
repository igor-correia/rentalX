import { ICreateCategoryDTO, ICategoriesRepository } from "../ICategoriesRepository";
import { Category } from '../../model/Category'

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = []
    }

    public static getInstance() {
        if(!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;
    }
    
    create({name, description}: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name, 
            description,
            created_at: new Date()
        });

        this.categories.push(category);
    }

    findByName(name: string): Category | undefined {
        const category = this.categories.find( (category) => category.name === name);
        return category;
    }

    list(): Category[] {
        return this.categories;
    }
}

export { CategoriesRepository };
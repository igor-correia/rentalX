import { ImportFileUseCase } from "./ImportFileUseCase";
import { ImportFileController } from "./ImportFileController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();
const importFileUseCase = new ImportFileUseCase(categoriesRepository);
const importFileController = new ImportFileController(importFileUseCase);

export { importFileController };
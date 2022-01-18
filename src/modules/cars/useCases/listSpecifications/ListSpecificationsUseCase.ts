import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository"; 
import { Specification } from '../../model/Specification'

class ListSpecificationsUseCase{
    constructor(private specificationsRepository: ISpecificationsRepository) {}

    execute(): Specification[] {
        return this.specificationsRepository.list();
    }
}

export {ListSpecificationsUseCase};
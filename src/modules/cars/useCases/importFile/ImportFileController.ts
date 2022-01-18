import { Request, Response } from "express";
import { ImportFileUseCase } from "./ImportFileUseCase";

class ImportFileController {
    constructor(private importFileUseCase: ImportFileUseCase) {}

    handle(request: Request, response: Response): Response {
        const { file } = request;

        this.importFileUseCase.execute(file);

        return response.send()
    }
}

export { ImportFileController}
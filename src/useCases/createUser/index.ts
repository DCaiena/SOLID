import { MailtrapMailProvider } from "../../providers/impementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/impementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailtrapMailProvider()
const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserController, createUserUseCase}
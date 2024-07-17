import Account from "../../domain/entity/account";

export interface IAccountRepository {
    create(userId: string, name: string, email: string, password: string): Promise<Account>;
    capture(userId: string): Promise<Array<Account>>;
}

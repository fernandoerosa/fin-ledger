import CreateTransactionFactory from "@/components/transaction/data/factories/create-transaction.factory";
import MongoTransactionRepository from "@/components/transaction/infra/mongo/repositories/mongo-transaction.repository";
import Router from "koa-router";

export default class KoaTransactionRouter {
    constructor(
        private readonly _koaRouter = new Router()
    ) {
        this.initCreateTransaction();
    }

    public get koaRouter() : Router {
        return this._koaRouter;
    }

    private initCreateTransaction() {
        this._koaRouter.post("create-transaction", "/transaction", async (ctx) => {
            const useCase = CreateTransactionFactory.createUseCase(new MongoTransactionRepository());

            const { userId, sourceAccountId, destinyAccountId, type, value } = ctx.req as any;
            ctx.body = await useCase.execute({userId, sourceAccountId, destinyAccountId, type, value});
        });
    }
}   
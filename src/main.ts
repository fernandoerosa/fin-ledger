import Koa from "koa";
import KoaTransactionRouter from "./web/routes/transaction/koa-transaction.router";

const app = new Koa();

const port = 3000;

const koaRouter = new KoaTransactionRouter();

app.use(koaRouter.koaRouter.routes());
app.use(koaRouter.koaRouter.allowedMethods());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
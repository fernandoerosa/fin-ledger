export default interface IAccountReportWrapper {
    getAccountBalance: (userId: string) => Promise<any>
    getAccountBalanceWithAggregate: (userId: string) => Promise<any>
}
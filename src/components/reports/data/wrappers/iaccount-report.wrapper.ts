export default interface IAccountReportWrapper {
    getAccountBalance: (userId: string) => Promise<any>
}
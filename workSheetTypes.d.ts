export type WorkSheetRow = WorkSheetEmployeeRecordRow | WorkSheetEmployeeSummaryRow | WorkSheetFooterSummaryRow;
interface WorkSheetEmployeeRecordRow {
    EmpNo: string;
    Name: string;
    Code: string;
    Description: string;
    [columnDate: `${string} ${number}-${string}-${number}`]: `${number}`;
    'Total Hours': `${number}`;
}
interface WorkSheetEmployeeSummaryRow {
    EmpNo: string;
    Code: undefined;
    Name: 'Total service worked:' | 'Processed' | 'Approved' | 'In a batch' | string;
    [columnDate: `${string} ${number}-${string}-${number}`]: string;
    'Total Hours'?: string;
}
interface WorkSheetFooterSummaryRow {
    EmpNo: undefined;
    Name: 'Total Hours:' | 'Grand Total Service Hours:' | string;
    Code?: string;
    Description?: string;
    [columnDate: `${string} ${number}-${string}-${number}`]: `${number}`;
    'Total Hours': `${number}`;
}
export {};

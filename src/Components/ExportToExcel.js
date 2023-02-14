import React from 'react';
import { Tooltip } from '@mui/material';
import * as FileSaver from 'file-saver'
import XLSX from 'sheetjs-style'
import Button from '@mui/material/Button'


const ExportExcel = ({ excelData, fileName }) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const ExportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(JSON.parse(excelData))
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }
    return (
        <>
            <Tooltip title="Excel Export">
                <Button variant="contained"
                    onClick={(e) => { ExportToExcel(fileName) }}
                    color="primary"
                    style={{ cursor: "pointer", fontsize: 14 }}
                >
                    להורדת קובץ הנתונים שנשמרו
                </Button>
            </Tooltip>
        </>
    )
}

export default ExportExcel

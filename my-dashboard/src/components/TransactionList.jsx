import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from '@mui/material';
import { mockTransactions } from "../TheSalesDashboard.Data-JSON/mockData";

const columns = [
  { field: 'txId', headerName: 'Transaction ID', width: 150 },
  { field: 'user', headerName: 'User', width: 150 },
  { field: 'date', headerName: 'Date', width: 120 },
  { field: 'cost', headerName: 'Cost ($)', width: 100 },
];

export default function TransactionList() {
  // Convert cost values to numbers if needed
  const transactionsWithNumbers = mockTransactions.map(transaction => ({
    ...transaction,
    cost: parseFloat(transaction.cost),  // Convert cost from string to number
  }));

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Recent Transactions
      </Typography>
      
      {/* Wrapping the DataGrid and Pagination Controls */}
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <DataGrid
          rows={transactionsWithNumbers}  // Use the converted data
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 25]}  // Allow different rows per page options
          checkboxSelection
          disableSelectionOnClick
          getRowId={(row) => row.id}  // Specify the row ID if not automatically detected
          sx={{ flexGrow: 1 }}  // Ensures DataGrid takes the available height
        />
      </Box>
    </Box>
  );
}

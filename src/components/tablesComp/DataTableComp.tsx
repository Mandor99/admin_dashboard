import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import { IUser } from "../../utilis/data"
import { Box } from "@mui/material"
// import { Link } from "react-router-dom"

type Props = {cols:GridColDef[], rows:IUser[], slug: string}

const DataTableComp = ({cols, rows, slug}: Props) => {

  const handleDelete = (id:string) => {
    console.log(id)
  }

  const actionCol: GridColDef = {field: 'action', type:'actions', headerName: 'Action', width: 200, renderCell(params) {
    return (
      <Box sx={{display:'flex', gap:'10px'}}>
          {/* <Link to={`/${slug}/${params.row.id}`}> */}
            <img style={{width:'20px', height:'20px', cursor: 'pointer'}} src="./imgs/view.svg" alt={slug} />
          {/* </Link> */}
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img style={{width:'20px', height:'20px', cursor: 'pointer'}} src="./imgs/delete.svg" alt="" />
          </div>
        </Box>
    )
  },}

  return (
    <Box>
      <DataGrid
        rows={rows}
        columns={[...cols, actionCol]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{toolbar: GridToolbar}}
        slotProps={{toolbar: {showQuickFilter: true, quickFilterProps:{debounceMs: 500}}}}
        sx={{p:'20px', bgcolor:'#fff', '& .css-128fb87-MuiDataGrid-toolbarContainer':{flexDirection:'row-reverse'}}}
        // sx={{p: '20px', backgroundColor:'#fff', color:'#000', & .MuiDataGrid-withBorderColor border:'1px solid rgba(224, 224, 224, 1)', & ..MuiDataGrid-booleanCell[data-value="true"]:{color:"rgba(0, 0, 0, 0.6)"}}}
      />
    </Box>
  )
}

export default DataTableComp
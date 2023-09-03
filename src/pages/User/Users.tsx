import { Typography, Box/*, Button*/ } from "@mui/material"
import DataTableComp from "../../components/tablesComp/DataTableComp"
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../utilis/data";
// import { useState } from "react";
// import FormUser from "../../components/Forms/FormUser";


const Users = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'avatar', headerName: 'Avatar', width: 100, renderCell(params) {
      return <img  src={params.row?.img ? params.row.img : "./imgs/noavatar.png"} alt="user avatar" style={{width:'35px', height:'35px', objectFit:'cover', borderRadius:'50%'}}/>
    }, },
    {field: 'firstName', headerName: 'First name', type:'string', width: 150, editable: false},
    {field: 'lastName', headerName: 'Last name', type:'string', width: 150, editable: false},
    { field: 'email', headerName: 'Email', type: 'email', width: 200, editable: false},
    { field: 'phone', headerName: 'Phone', type: 'string', width: 200, editable: false},
    { field: 'createdAt', headerName: 'Created At', type: 'string', width: 200, editable: false},
    { field: 'verified', headerName: 'Verified', type: 'boolean', width: 150, editable: false},
  ];

  // const [open, setOpen] = useState<boolean>(false)

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  
  return (
    <Box sx={{width:'100%'}}>
        <Box sx={{display: 'flex', gap:'1.5rem', mb:'2rem'}}>
          <Typography variant="h3" sx={{fontWeight:'bold'}}>Users</Typography>
          {/* <Button onClick={handleClickOpen} variant="contained" sx={{fontWeight:'bold', textTransform:'capitalize', fontSize:'1rem'}}>Add New User</Button> */}
        </Box>
        <DataTableComp cols={columns} rows={userRows} slug='users' />
        {/* <FormUser open={open} setOpen={setOpen} /> */}
    </Box>
  )
}

export default Users
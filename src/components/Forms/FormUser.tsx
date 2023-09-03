import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
}

const FormUser = ({setOpen, open}: Props) => {

    const handleClose = () => {
        setOpen(false)
    };

  return (
    <>
         <Dialog open={open} onClose={handleClose} sx={{
            '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper':{
            bgcolor:'bg.main',
            p:'20px'
            }
            }}>
        <DialogTitle sx={{color:'txt.main'}}>Add New User</DialogTitle>
        <DialogContent sx={{color:'txt.main'}}>
          <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default FormUser
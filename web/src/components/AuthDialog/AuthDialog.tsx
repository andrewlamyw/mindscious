import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { useAuth } from '@redwoodjs/auth'

const AuthDialog = ({ open, handleClose }: { open: boolean }) => {
  const { logIn, signUp } = useAuth()

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="auth-dialog-title"
      aria-describedby="auth-dialog-description"
    >
      <DialogTitle id="auth-dialog-title">
        {'Do you have a Mindscious account?'}
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="auth-dialog-description">
          Hi there, you need an account to continue. If you do not have one yet,
          feel free to sign up, it's freeeee! 😉
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => {
            signUp()
            handleClose()
          }}
        >
          Sign up
        </Button>

        <Button
          onClick={() => {
            logIn()
            handleClose()
          }}
        >
          Log in
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AuthDialog

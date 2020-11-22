/**
 * Modal component to handle login and logout
 */
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Signup from '../Signup/index.jsx';
import Signin from '../Signin/index.jsx';

const useStyles = makeStyles((theme) => ({
  modal: {
    alignItems: 'center',
    borderRadius: '5%',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '1px 0px 7px rgba(66, 66, 66, 0.75)',
    borderRadius: '5%',
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
  },
}));

const LayoutModal = ({ open, setOpen, option }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {option ? (
              <Signup setOpen={setOpen} />
            ) : (
              <Signin setOpen={setOpen} />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default LayoutModal;

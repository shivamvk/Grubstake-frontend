import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const Notify = (props) => {

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onCancel}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <span className="color-dark-grey">{props.title}</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <span className="font-weight-light">{props.description}</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onCancel} color="primary">
            {props.cancelText}
          </Button>
          <Button onClick={props.onConfirm} color="primary">
            {props.confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Notify;

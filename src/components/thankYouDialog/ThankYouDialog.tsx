import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { dictionary } from "../../dictionary/hebrew";

interface ThankYouDialogProps {
  open: boolean;
  onClose: () => void;
}

const ThankYouDialog = (props: ThankYouDialogProps) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      dir="rtl"
      slotProps={{
        paper: {
          sx: {
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            padding: 2,
          },
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
        {dictionary.thankYou}
      </DialogTitle>
      <DialogContent sx={{ fontSize: "1rem" }}>
        {dictionary.weWillContactYou}
      </DialogContent>
    </Dialog>
  );
};

export default ThankYouDialog;

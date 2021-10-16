import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import style from "./style";
import CusSnackbars from "../../../Snackbar/Snackbar";

export default function DeleteModal({
  deleteModal,
  setDeleteModal,
  handleDelete,
}) {
  //const [snackBar, setSnackBar] = useState(false);

  const handleNo = () => setDeleteModal(false);

  // const handleYes = () => {
  //   handleDelete();
  //   setSnackBar(true);
  // };

  //console.log("Snackbar", snackBar);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={deleteModal}
        onClose={handleNo}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={deleteModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Alert
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Do you want to delete this memory?
            </Typography>
            <Stack
              direction="row"
              justifyContent="flex-end"
              marginTop={5}
              spacing={2}
            >
              <Button variant="contained" onClick={() => handleDelete()}>
                Yes
              </Button>
              <Button variant="outlined" onClick={() => handleNo()}>
                No
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

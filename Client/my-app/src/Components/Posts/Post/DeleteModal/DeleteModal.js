import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  Stack,
} from "@mui/material";

import style from "./style";

export default function DeleteModal({
  deleteModal,
  setDeleteModal,
  handleDelete,
}) {
  const handleNo = () => setDeleteModal(false);

  return (
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
  );
}

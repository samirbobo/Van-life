import { useOutletContext } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function VanPhotos() {
  const [vanData] = useOutletContext();
  const [currentImgIndex, setCurrentImgIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (src) => {
    setCurrentImgIndex(vanData.allImageUrls.findIndex((img) => img === src));
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleNext = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === vanData.allImageUrls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentImgIndex((prevIndex) =>
      prevIndex === 0 ? vanData.allImageUrls.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {vanData.allImageUrls.map((img) => (
        <img
          key={img}
          src={img}
          alt={vanData.name}
          onClick={() => handleOpen(img)}
        />
      ))}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box className="images-box">
          <img src={vanData.allImageUrls[currentImgIndex]} alt={vanData.name} />
          <div className="icons">
            <FaChevronLeft className="icon" onClick={handlePrev} />
            <FaChevronRight className="icon" onClick={handleNext} />
          </div>
        </Box>
      </Modal>
    </>
  );
}

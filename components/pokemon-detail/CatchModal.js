import { useState } from "react";
import Loader from "../../components/global/Loader";
import Modal from "react-modal";
import Button from "../global/Button";
import styled from "@emotion/styled";

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
    maxWidth: "600px",
  },
};

Modal.setAppElement("#modal-root");

const Loading = () => {
  return (
    <>
      <h2 style={{ fontSize: "2rem" }}>Catching Pokémon</h2>
      <Loader style={{ margin: "4rem 0 3rem" }} />
    </>
  );
};

const Missed = ({ catchAgain, onClose }) => {
  return (
    <>
      <h2 style={{ fontSize: "2rem" }}>Missed!</h2>
      <Button
        onClick={catchAgain}
        style={{ margin: "3rem 0", width: "auto" }}
        variant="contained"
      >
        Try Again
      </Button>
      <Button onClick={onClose}>Close</Button>
    </>
  );
};

const Caught = ({ onSave }) => {
  const [name, setName] = useState("");
  return (
    <>
      <h2 style={{ fontSize: "2rem" }}>Caught!</h2>
      <div
        style={{
          margin: "2rem 0",
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <label style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          Give it a nickname? (optional)
        </label>
        <Actions>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            style={{ padding: ".5rem", fontSize: "2rem", width: "100%" }}
          />
          <Button
            onClick={() => onSave(name)}
            variant="contained"
            style={{ marginLeft: "1rem", width: "20%" }}
          >
            Save
          </Button>
        </Actions>
      </div>
    </>
  );
};

const CatchModal = ({ open, onClose, onSave, caught, catchAgain }) => {
  return (
    <Modal isOpen={open} style={customStyles}>
      {caught === null ? (
        <Loading />
      ) : caught ? (
        <Caught catchAgain={catchAgain} onSave={onSave} />
      ) : (
        <Missed catchAgain={catchAgain} onClose={onClose} />
      )}
    </Modal>
  );
};

export default CatchModal;

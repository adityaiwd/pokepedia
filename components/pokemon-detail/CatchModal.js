import { useState } from "react";
import Loader from "../../components/global/Loader";
import Modal from "react-modal";
import Button from "../global/Button";
import styled from "@emotion/styled";

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
        <label style={{fontSize:'1.2rem', marginBottom:'.5rem'}}>Give it a nickname? (optional)</label>
        <input type="text" onChange={(e) => setName(e.target.value)} style={{padding:'.5rem',fontSize:'2rem'}}/>
      </div>
      <Actions>
        <Button
          onClick={() => onSave(name)}
          variant="contained"
          style={{ marginRight: "1rem", width: "auto" }}
        >
          Save
        </Button>
        <Button onClick={() => onSave()}>Close</Button>
      </Actions>
    </>
  );
};

const CatchModal = ({ open, onClose, onSave, caught, catchAgain }) => {
  return (
    <Modal isOpen={open} style={customStyles} contentLabel="Example Modal">
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

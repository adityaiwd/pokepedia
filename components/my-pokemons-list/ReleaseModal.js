import Modal from "react-modal";
import Button from "../global/Button";
import capitalizeFirstLetter from "../../utils/capitalize-first-letter";

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

const ReleaseModal = ({ open, pokemon, onClose, release }) => {
  const pokemonName = capitalizeFirstLetter(
    pokemon.nickname ? pokemon.nickname : pokemon.name
  );
  return (
    <Modal isOpen={open} style={customStyles} contentLabel="Example Modal">
      <h2 style={{ fontSize: "1.8rem", textAlign: "center" }}>
        Are you sure you want to release {pokemonName} ?
      </h2>
      <Button
        onClick={release}
        variant="contained"
        style={{ margin: "2rem 0", width: "auto" }}
      >
        Release
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </Modal>
  );
};

export default ReleaseModal;

import { Modal, Button } from "react-bootstrap";

import axios from "axios";

function DeleteMember({ id, GetData, handleClose }) {
  console.log(id);
  async function DeleteData(id) {
    await axios.delete(
      `https://6745b3a8512ddbd807f93eb9.mockapi.io/post/peopleCo/${id}`
    );
    GetData();
    console.log(id);
  }

  return (
    <>
      <Modal.Body>
        <Modal.Body>
          Are you sure do you want to delete this member details? This action
          cannot be undone
        </Modal.Body>
        <Button
          className="d-flex flex-row justify-content-end align-items-end"
          style={{
            color: "white",
            backgroundColor: "#6941C6",
            border: "none",
          }}
          onClick={() => {
            DeleteData(id);
            handleClose();
          }}
        >
          Delete
        </Button>
      </Modal.Body>
    </>
  );
}
export default DeleteMember;

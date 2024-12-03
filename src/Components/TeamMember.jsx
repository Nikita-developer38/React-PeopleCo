import axios from "axios";
import remove from "../Images/Icon.png";
import edit from "../Images/edit.png";
import {
  MDBBadge,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import DeleteMember from "./DeleteMember";
import { Modal } from "react-bootstrap";
import Edit from "./Edit";

function TeamMember() {
  const [member, setMember] = useState([]);
  const [show, setShow] = useState(false);

  const [page, setPage] = useState(1);
  function ChangePage(currentPage) {
    const totalPages = Math.ceil(member.length / 5);
    if (currentPage >= 1 && currentPage !== page && currentPage <= totalPages) {
      setPage(currentPage);
    }
  }
  const totalPages = Math.ceil(member.length / 5);
  const handleClose = () => {
    setShow(false);
  };

  const [id, setId] = useState("");
  const handleShow = (id) => {
    setShow(true);
    setId(id);
  };

  const [basicModal, setBasicModal] = useState(false);

  const toggleOpen = (id) => {
    setBasicModal(!basicModal);
    setId(id);
  };

  async function GetData() {
    const result = await axios.get(
      "https://6745b3a8512ddbd807f93eb9.mockapi.io/post/peopleCo"
    );
    setMember(result.data);
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <div className="d-flex flex-row justify-content-between ms-3">
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Role</th>
              <th scope="col">Email Address</th>
              <th scope="col">Team</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {member.slice(page * 5 - 5, page * 5).map((items) => {
              const { id, name, username, status, role, email, team, image } =
                items;
              return (
                <tr key={id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <img
                        src={image}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      />
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{name}</p>
                        <p className="text-muted mb-0">{username}</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <MDBBadge color="success" pill>
                      {status}
                    </MDBBadge>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{role}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{email}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{team}</p>
                  </td>
                  <td>
                    <img
                      alt="edit"
                      src={edit}
                      onClick={() => {
                        toggleOpen(id);
                      }}
                    />
                  </td>
                  <td>
                    <img
                      alt="delete"
                      src={remove}
                      onClick={() => {
                        handleShow(id);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
          <section className="d-flex flex-row justify-content-center mt-2 mx-auto align-items-center">
            <Button
              variant="outline-primary"
              onClick={() => {
                ChangePage(page - 1);
              }}
            >
              Prev
            </Button>

            {[...Array(totalPages / 1)].map((_, i) => {
              return (
                <Button
                  key={i}
                  variant="outline-primary"
                  onClick={() => {
                    ChangePage(i + 1);
                  }}
                >
                  {i + 1}
                </Button>
              );
            })}
            <Button
              variant="outline-primary"
              onClick={() => {
                ChangePage(page + 1);
              }}
            >
              Next
            </Button>
          </section>
        </MDBTable>

        {/* ***************delete  */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Member Details</Modal.Title>
          </Modal.Header>
          <DeleteMember id={id} GetData={GetData} handleClose={handleClose} />
        </Modal>
        {/* ***************delete  */}

        {/* **************edit */}
        <MDBModal
          open={basicModal}
          onClose={() => setBasicModal(false)}
          tabIndex="-1"
        >
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Modal title</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={() => setBasicModal(false)}
                ></MDBBtn>
              </MDBModalHeader>
              <Edit id={id} setBasicModal={setBasicModal} GetData={GetData} />
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>

        {/* ***********edit */}
      </div>
    </>
  );
}
export default TeamMember;

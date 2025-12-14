import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeletCabin";
import { useCreateCabin } from "./useCreateCabin";
import { HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono", "Poppins", "Vazirmatn", sans-serif;
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const { isCreating, createCabin } = useCreateCabin();

  const {
    id: cabinID,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  function handleDuplicate() {
    createCabin({
      name: `کپی از ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    });
  }

  return (
    <>
      <TableRow>
        <Img src={image} alt="" />
        <Cabin>{name}</Cabin>
        <div>حداکثر ظرفیت {maxCapacity} نفر</div>
        <Price>{regularPrice}</Price>
        {discount ? <Discount>{discount}</Discount> : <span>&mdash;</span>}
        <div>
          <button onClick={handleDuplicate} disabled={isCreating}>
            <HiSquare2Stack />
          </button>
          <Modal>
            <Modal.Open opens={"edit"}>
              <button>
                <HiPencil />
              </button>
            </Modal.Open>
            <Modal.Window name={"edit"}>
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Open opens={"delete"}>
              <button>
                <HiTrash />
              </button>
            </Modal.Open>
            <Modal.Window name={"delete"}>
              <ConfirmDelete
                onConfirm={() => deleteCabin(cabinID)}
                disabled={isDeleting}
                resourceName={"کابین"}
              />
            </Modal.Window>
          </Modal>
        </div>
      </TableRow>
    </>
  );
}

export default CabinRow;

import styled from "styled-components";
import CreateCabinForm from "./CreateCabinForm";
import { useDeleteCabin } from "./useDeletCabin";
import { useCreateCabin } from "./useCreateCabin";
import { HiSquare2Stack, HiTrash } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi";
import { formatCurrency } from "../../utils/helpers";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

/* const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`; */

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
    id: cabinId,
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
      <Table.Row>
        <Img src={image} alt="" />
        <Cabin>{name}</Cabin>
        <div>حداکثر ظرفیت {maxCapacity} نفر</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />
            <Modal>
              <Menus.List id={cabinId}>
                <Menus.Button
                  icon={<HiSquare2Stack />}
                  disabled={isCreating}
                  onClick={handleDuplicate}
                >
                  کپی
                </Menus.Button>

                <Modal.Open opens={"edit"}>
                  <Menus.Button icon={<HiPencil />}>ویرایش</Menus.Button>
                </Modal.Open>

                <Modal.Open opens={"delete"}>
                  <Menus.Button icon={<HiTrash />}>حذف</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name={"edit"}>
                <CreateCabinForm disabled={isDeleting} cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Window name={"delete"}>
                <ConfirmDelete
                  onConfirm={() => deleteCabin(cabinId)}
                  disabled={isDeleting}
                  resourceName={"کابین"}
                />
              </Modal.Window>
            </Modal>
          </Menus.Menu>
        </div>
      </Table.Row>
    </>
  );
}

export default CabinRow;

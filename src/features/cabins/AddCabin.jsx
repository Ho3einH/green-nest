import { useState } from "react";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsShowModal((show) => !show)}>
        اضافه کردن کابین ناوبری
      </Button>
      {isShowModal && (
        <Modal onClose={() => setIsShowModal(false)}>
          <CreateCabinForm onCloseModal={() => setIsShowModal(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;

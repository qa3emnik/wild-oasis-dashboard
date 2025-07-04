import CreateEditCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

export default function AddCabins() {
  return (
    <Modal>
      <div>
        <Modal.Open opens="cabin-form">
          <Button $variation="primary" $size="large">
            Add new Cabin
          </Button>
        </Modal.Open>
      </div>
      <Modal.Window name="cabin-form">
        <CreateEditCabinForm />
      </Modal.Window>
    </Modal>
  );
}

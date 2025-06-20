import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabins from "../features/cabins/AddCabins";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>filter / sort</p>
      </Row>
      <Row type="vertical">
        <CabinTable />
        <AddCabins />
      </Row>
    </>
  );
}

export default Cabins;

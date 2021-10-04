import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import TableHeader from "../table/tableHeader";
import TableBody from "../table/tableBody";
import docTasks from "../fakeApi/lListPerson";

const TableDoc = () => {
  return (
    <>
      <Table striped bordered hover>
        <TableHeader />
        <TableBody data={docTasks} />
      </Table>
      <div className="m-5">
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
    </>
  );
};

export default TableDoc;

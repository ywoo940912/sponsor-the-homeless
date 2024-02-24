import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Barbershop Digest",
      donatedBy: "John Smith",
      date: "1 March",
      amount: 15,
      method: "On-Site",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Southern Cultivator",
      donatedBy: "Michael Doe",
      date: "1 March",
      amount: 90,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Barbershop Digest",
      donatedBy: "John Smith",
      date: "1 March",
      amount: 35,
      method: "On-Site",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "ALTA",
      donatedBy: "Jane Smith",
      date: "1 March",
      amount: 200,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Atlanta Magazine",
      donatedBy: "Harold Carol",
      date: "1 March",
      amount: 32,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Donated by</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.donatedBy}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

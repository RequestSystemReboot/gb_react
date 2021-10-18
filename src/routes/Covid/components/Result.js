import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

export const Result = (data) => (
  <TableContainer sx={{ maxHeight: 440 }}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <TableRow>
          <TableCell>Location</TableCell>
          <TableCell>Confirmed</TableCell>
          <TableCell>Deaths</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(data).map((city) => (
          <TableRow>
            <TableCell>{city}</TableCell>
            <TableCell>{data[city]["confirmed"]} </TableCell>
            <TableCell>{data[city]["deaths"]} </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

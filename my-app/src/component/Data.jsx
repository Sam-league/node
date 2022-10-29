import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import qs from "query-string";
import { Pagination } from "@mui/material";

export default function Data() {
  const [data, setData] = useState(null);
  const [records, setRecords] = useState(null);
  const [query, setQuery] = useState({
    SortBy: "_id",
    sortOrder: 1,
    limit: 10,
    page: 0,
  });
  useEffect(() => {
    axios(`http://localhost:4000/people?${qs.stringify(query)}`).then((res) => {
      let { data, totalrecords } = res.data;
      console.log(data);
      setData(data);
      setRecords(totalrecords);
      console.log(data);
    });
  }, [query]);
  const handleQuery = (column) => {
    const Order = query.sortOrder === 1 ? -1 : 1;
    setQuery({ ...query, sortBy: column, sortOrder: Order });
  };
  const handlePage = (a, value) => {
    console.log(value);
    setQuery({ ...query, page: value });
  };

  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell onClick={() => handleQuery("name")} align="center">
                Name
              </TableCell>
              <TableCell onClick={() => handleQuery("email")} align="center">
                Email
              </TableCell>
              <TableCell align="center">Number</TableCell>
              <TableCell onClick={() => handleQuery("salary")} align="center">
                Salary
              </TableCell>
              <TableCell align="center">Verified</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.salary}</TableCell>
                <TableCell align="center">
                  {row.isVerified ? "Verified" : "Not Verified"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.floor(records / query.limit)}
        onChange={handlePage}
      />
    </div>
  );
}

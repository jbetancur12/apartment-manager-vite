// import React from "react";
// import MaterialTable, { Column } from "@material-table/core";

// interface IPerson {
//   id: string;
//   doc: number;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
// }

// interface Props {
//   data: IPerson[];
// }

// const columns: Array<Column<IPerson>> = [
//   { title: "Document", field: "doc" },
//   { title: "First Name", field: "firstName" },
//   { title: "Last Name", field: "lastName" },
//   { title: "Email", field: "email" },
//   { title: "Phone", field: "phone" },
//   { title: "Address", field: "address" },
// ];

// export const Table = ({ data }: Props) => (
//   <MaterialTable
//     columns={columns}
//     data={data}
//     title="Tenants"
//     options={{
//       showTitle: false,
//       pageSize: 10,
//       paging: true,
//       pageSizeOptions: [10, 20, 50],
//       rowStyle: {
//         fontSize: 14,
//       },
//       headerStyle: {
//         backgroundColor: "rgb(17, 24, 39)",
//         color: "rgb(156, 163, 175)",
//         fontWeight: "600",
//       },
//     }}
//   />
// );

import React from "react";

const Table = () => {
  return <div>Table</div>;
};

export default Table;

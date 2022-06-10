import React from "react";
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { useRowSelect } from "@table-library/react-table-library/select";
import { usePagination } from "@table-library/react-table-library/pagination";
import { THEME } from "./Theme.js";
import "./TenantsTable.scss";

interface IPerson {
  id: string;
  doc: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

interface Props {
  data: IPerson[];
}

const TenantsTable = ({ data }: Props) => {
  const [search, setSearch] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const dataTable = {
    nodes: data.filter((item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const pagination = usePagination(dataTable, {
    state: {
      page: 0,
      size: 10,
    },
  });

  const propsPagination = {
    pageStart: pagination.state.getPageBoundaries(dataTable.nodes).start,
    pageEnd: pagination.state.getPageBoundaries(dataTable.nodes).end,
    totalRows: pagination.state.size,
  };

  const theme = useTheme(THEME);
  const select = useRowSelect(dataTable, {}, {});

  return (
    <>
      <label htmlFor="search">
        Search by Name:
        <input id="search" type="text" onChange={handleSearch} />
      </label>
      <>
        <Table
          data={dataTable}
          theme={theme}
          layout={{ horizontalScroll: true }}
          select={select}
          pagination={pagination}
          className="TableTenants"
        >
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  <HeaderCell>Doc</HeaderCell>
                  <HeaderCell>Name</HeaderCell>
                  <HeaderCell>Lastname</HeaderCell>
                  <HeaderCell>E-mail</HeaderCell>
                  <HeaderCell>Phone</HeaderCell>
                  <HeaderCell>Address</HeaderCell>
                </HeaderRow>
              </Header>
              <Body>
                {tableList.map((item) => (
                  <Row
                    key={item.id}
                    item={item}
                    onDoubleClick={(node, event) =>
                      console.log("Double Click Row", node, event)
                    }
                  >
                    <Cell>{item.doc}</Cell>
                    <Cell>{item.firstName}</Cell>
                    <Cell>{item.lastName}</Cell>
                    <Cell>{item.email}</Cell>
                    <Cell>{item.phone}</Cell>
                    <Cell>{item.address}</Cell>
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>

        <div className="TableTenants-pagination">
          <span style={{ marginRight: 32 }}>
            Rows per page: {propsPagination.totalRows}
          </span>
          <span>
            {`${propsPagination.pageStart} - ${propsPagination.pageEnd} of ${dataTable.nodes.length}`}
          </span>
          <button
            className="TableTenants-pagination-button"
            onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
            disabled={pagination.state.page === 0}
          >
            ❮
          </button>
          <button
            className="TableTenants-pagination-button"
            onClick={() => pagination.fns.onSetPage(pagination.state.page + 1)}
            disabled={pagination.state.page === pagination.state.size - 1}
          >
            ❯
          </button>
        </div>
      </>
    </>
  );
};

export default TenantsTable;

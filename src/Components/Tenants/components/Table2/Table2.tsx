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
import {
  useRowSelect,
  HeaderCellSelect,
  CellSelect,
  SelectClickTypes,
  SelectTypes,
} from "@table-library/react-table-library/select";
import { usePagination } from "@table-library/react-table-library/pagination";
import { data } from "../../data";
import "./Table2.scss";

const list = [
  {
    id: "1",
    name: "VSCode",
    deadline: new Date(2020, 1, 17),
    type: "SETUP",
    isComplete: true,
  },
  {
    id: "2",
    name: "JavaScript",
    deadline: new Date(2020, 2, 28),
    type: "LEARN",
    isComplete: true,
  },
  {
    id: "3",
    name: "React",
    deadline: new Date(2020, 3, 8),
    type: "LEARN",
    isComplete: false,
  },
];

const THEME = {
  Table: `
    height: 100%;
  `,
  Header: ``,
  Body: ``,
  BaseRow: `



    &.row-select-selected, &.row-select-single-selected {
      background-color: rgba(209,218,237,1);
    
    }

    height: 52px;
  `,
  HeaderRow: `
    font-size: 14px;
    background: rgb(17,24,39);
    color:#9CA3AF;
    font-weight: 600;
    text-align: center;
  `,
  Row: `
    font-size: 14px;  
    text-align: center;
    cursor: pointer;
    &:not(:last-of-type) {
      border-bottom: 1px solid var(--theme-ui-colors-border);
    }

    &.first {
      border-top: 1px solid var(--theme-ui-colors-border);
    }

    &:hover {
      color: var(--theme-ui-colors-text);
    }

 
    
  `,
  BaseCell: `
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;

    padding: 8px 0;

    svg {
      fill: var(--theme-ui-colors-text);
    }
  `,
  HeaderCell: ``,
  Cell: ``,
};

const paginationStyles = {
  color: "black",
  float: "left",
  padding: "8px 16px",
  transition: "background-color 0.3s ease 0s",
  border: "none",
  background: "transparent",
} as const;
const Table2 = () => {
  const [search, setSearch] = React.useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const data2 = {
    nodes: data.filter((item) =>
      item.firstName.toLowerCase().includes(search.toLowerCase())
    ),
  };

  console.log(data2.nodes.length);

  const pagination = usePagination(data2, {
    state: {
      page: 0,
      size: 10,
    },
    onChange: onPaginationChange,
  });
  //@ts-ignore
  function onPaginationChange(action, state) {}

  const theme = useTheme(THEME);
  const select = useRowSelect(data2, {}, {});

  return (
    <>
      <label htmlFor="search">
        Search by Name:
        <input id="search" type="text" onChange={handleSearch} />
      </label>
      <>
        <Table
          data={data2}
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
            Rows per page: {pagination.state.size}
          </span>
          <span>
            {pagination.state.getPageBoundaries(data2.nodes).start} -{" "}
            {pagination.state.getPageBoundaries(data2.nodes).end} of{" "}
            {data2.nodes.length}
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

export default Table2;

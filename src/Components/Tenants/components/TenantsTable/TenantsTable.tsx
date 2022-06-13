import React from 'react'
import {
  Table,
  Header,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell
} from '@table-library/react-table-library/table'
import { useTheme } from '@table-library/react-table-library/theme'
import { useRowSelect } from '@table-library/react-table-library/select'
import { usePagination } from '@table-library/react-table-library/pagination'
import { THEME } from './Theme.js'
import './TenantsTable.scss'

interface IPerson {
  id: string
  doc: number
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
}

interface IPropsPagination {
  pageStart: number
  pageEnd: number
  totalRows: number
  actualPage: number
}

interface Props {
  data: IPerson[]
  columns: Array<{ header: string, cell: string }>
}

const TenantsTable = ({ data, columns }: Props): JSX.Element => {
  const [search, setSearch] = React.useState({
    term: '',
    field: '',
    column: 'Doc'
  })
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch({ ...search, term: event.target.value })
  }

  const dataTable = {
    nodes: data.filter((item) =>
      item[search.field as keyof typeof item]
        .toString()
        .toLowerCase()
        .includes(search.term.toLowerCase())
    )
  }

  const pagination = usePagination(dataTable, {
    state: {
      page: 0,
      size: rowsPerPage
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setRowsPerPage(Number(e.target.value))
  }

  const handleChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setSearch({
      ...search,
      field: e.target.value,
      column: e.target.options[e.target.selectedIndex].text
    })
  }

  const SelectX = (): JSX.Element => (
    <select onChange={(e) => handleChange(e)}>
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={30}>30</option>
    </select>
  )

  const propsPagination: IPropsPagination = {
    pageStart: pagination.state.getPageBoundaries(dataTable.nodes).start,
    pageEnd: pagination.state.getPageBoundaries(dataTable.nodes).end,
    totalRows: pagination.state.size,
    actualPage: pagination.state.page
  }

  const theme = useTheme(THEME)
  const select = useRowSelect(dataTable, {}, {})

  const Filter = (): JSX.Element => {
    return (
      <select value={search.field} onChange={(e) => handleChangeSelect(e)}>
        {columns.map((item) => (
          <option key={item.cell} value={item.cell}>
            {item.header}
          </option>
        ))}
      </select>
    )
  }

  return (
    <>
      <label htmlFor='search'>
        Search by <Filter />
        <input id='search' type='text' onChange={handleSearch} />
      </label>

      <>
        <Table
          data={dataTable}
          theme={theme}
          layout={{ horizontalScroll: true }}
          select={select}
          pagination={pagination}
          className='TableTenants'
        >
          {(tableList) => (
            <>
              <Header>
                <HeaderRow>
                  {columns.map((item) => (
                    <HeaderCell key={item.header}>{item.header}</HeaderCell>
                  ))}
                </HeaderRow>
              </Header>
              <Body>
                {tableList.map((item) => (
                  <Row
                    key={item.id}
                    item={item}
                    onDoubleClick={(node, event) =>
                      console.log('Double Click Row', node, event)}
                  >
                    {columns.map((cell, idx) => (
                      <Cell key={idx}>
                        {item[cell.cell as keyof typeof item]}
                      </Cell>
                    ))}
                  </Row>
                ))}
              </Body>
            </>
          )}
        </Table>

        <div className='TableTenants-pagination'>
          <span style={{ marginRight: 32 }}>
            {/* Rows per page: {propsPagination.totalRows} */}
            Rows per page: <SelectX />
          </span>
          <span>
            {`${propsPagination.pageStart} - ${propsPagination.pageEnd} of ${dataTable.nodes.length}`}
          </span>
          <button
            className='TableTenants-pagination-button'
            onClick={() => pagination.fns.onSetPage(pagination.state.page - 1)}
            disabled={pagination.state.page === 0}
          >
            ❮
          </button>
          <button
            className='TableTenants-pagination-button'
            onClick={(): void =>
              pagination.fns.onSetPage(propsPagination.actualPage + 1)}
            disabled={pagination.state.page === pagination.state.size - 1}
          >
            ❯
          </button>
        </div>
      </>
    </>
  )
}

export default TenantsTable

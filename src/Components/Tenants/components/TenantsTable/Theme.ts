export const THEME = {
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

import { createContext, useContext } from "react";

const TableContext = createContext();

const Table = ({ children, columns }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <div
        role="table"
        className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 font-sono text-base"
      >
        {children}
      </div>
    </TableContext.Provider>
  );
};

export default Table;

const Header = ({ children }) => {
  const { columns } = useContext(TableContext);
  return (
    <header
      role="row"
      className={`grid items-center gap-6 border-b border-gray-100 bg-gray-50 px-6 py-4 font-semibold uppercase tracking-wider text-gray-600`}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </header>
  );
};

const Row = ({ children }) => {
  const { columns } = useContext(TableContext);

  return (
    <div
      className={`grid items-center gap-6 border-b border-gray-100 px-5 py-3 text-gray-700 last:border-b-0`}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
};

const Body = ({ data, render }) => {
  if (!data || data.length === 0)
    return <Empty>No data to show at moment</Empty>;

  return <section className="bg-white py-1">{data.map(render)}</section>;
};

const Footer = ({ children }) => (
  <footer className="flex justify-center bg-gray-50 p-4">
    {/* {children && children.length > 0 ? children : null} */}
    {children}
  </footer>
);

const Empty = ({ children }) => (
  <p className="bg-white py-6 text-center text-lg font-medium text-gray-800">
    {children}
  </p>
);

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;
Table.Empty = Empty;

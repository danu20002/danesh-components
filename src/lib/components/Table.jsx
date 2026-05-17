import { clsx } from 'clsx';

const Table = ({ columns = [], data = [], striped = false, hoverable = true, compact = false, className = "" }) => {
  return (
    <div className={clsx("overflow-x-auto border border-slate-200 rounded-xl", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-200">
            {columns.map((col, i) => (
              <th
                key={i}
                className={clsx(
                  "text-left font-semibold text-slate-900",
                  compact ? "px-3 py-2 text-xs" : "px-4 py-3"
                )}
                style={{ width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, ri) => (
            <tr
              key={ri}
              className={clsx(
                "border-b border-slate-100 last:border-b-0 transition-colors",
                striped && ri % 2 === 1 && "bg-slate-50/50",
                hoverable && "hover:bg-slate-50"
              )}
            >
              {columns.map((col, ci) => (
                <td
                  key={ci}
                  className={clsx(
                    "text-slate-700",
                    compact ? "px-3 py-2 text-xs" : "px-4 py-3"
                  )}
                >
                  {col.render ? col.render(row, ri) : (col.accessor ? row[col.accessor] : null)}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="px-4 py-12 text-center text-slate-400">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

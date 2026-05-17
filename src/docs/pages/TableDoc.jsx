import Table from '../../lib/components/Table';
import Badge from '../../lib/components/Badge';
import Avatar from '../../lib/components/Avatar';
import { ComponentPreview, PropsTable, SectionTitle, ImportBlock } from '../DocComponents';

const TableDoc = () => {
  const users = [
    { id: 1, name: 'Alex Johnson', email: 'alex@example.com', status: 'Active', role: 'Admin', avatar: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Sarah Smith', email: 'sarah@example.com', status: 'Inactive', role: 'Member', avatar: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Michael Brown', email: 'michael@example.com', status: 'Active', role: 'Editor', avatar: 'https://i.pravatar.cc/150?u=3' },
    { id: 4, name: 'Elena Rodriguez', email: 'elena@example.com', status: 'Pending', role: 'Member', avatar: 'https://i.pravatar.cc/150?u=4' },
  ];

  return (
    <div className="space-y-12">
      <ImportBlock component="Table" />

      <section id="basic-table">
        <SectionTitle>Basic Table</SectionTitle>
        <ComponentPreview
          title="Data Grid"
          code={`import { Table } from '@danesh-ui/react';

<Table
  columns={[
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' }
  ]}
  data={data}
/>`}
        >
          <Table
            columns={[
              { header: 'Name', accessor: 'name' },
              { header: 'Email', accessor: 'email' },
              { header: 'Role', accessor: 'role' }
            ]}
            data={users}
          />
        </ComponentPreview>
      </section>

      <section id="custom-render">
        <SectionTitle>Custom Rendering</SectionTitle>
        <ComponentPreview
          title="Complex Row Content"
          code={`{ 
  header: 'Status', 
  render: (row) => <Badge variant={...}>{row.status}</Badge> 
}`}
        >
          <Table
            columns={[
              { 
                header: 'User', 
                render: (row) => (
                  <div className="flex items-center gap-3">
                    <Avatar src={row.avatar} size="sm" name={row.name} />
                    <div className="flex flex-col">
                      <span className="font-bold theme-text">{row.name}</span>
                      <span className="text-xs theme-text-tertiary">{row.email}</span>
                    </div>
                  </div>
                )
              },
              { header: 'Role', accessor: 'role' },
              { 
                header: 'Status', 
                render: (row) => {
                  const variants = { Active: 'success', Inactive: 'error', Pending: 'warning' };
                  return <Badge variant={variants[row.status]} size="sm">{row.status}</Badge>;
                }
              }
            ]}
            data={users}
          />
        </ComponentPreview>
      </section>

      <section id="api-reference">
        <SectionTitle>API Reference</SectionTitle>
        <PropsTable props={[
          { name: 'data', type: 'any[]', default: '[]', description: 'Array of data objects to display' },
          { name: 'columns', type: 'Column[]', default: '[]', description: 'Configuration for columns: { header, accessor?, render? }' },
          { name: 'variant', type: '"default" | "striped" | "hover"', default: '"default"', description: 'Visual style' },
          { name: 'emptyMessage', type: 'string', default: '"No data found"', description: 'Text to show when data is empty' },
        ]} />
      </section>
    </div>
  );
};

export default TableDoc;

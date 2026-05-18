import React from 'react';
import { 
  Users, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  Package, 
  Clock, 
  Search, 
  Filter, 
  Download,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight
} from 'daneshicons';
import Button from '../../lib/components/Button';
import Badge from '../../lib/components/Badge';
import Card from '../../lib/components/Card';
import Table from '../../lib/components/Table';
import Stat from '../../lib/components/Stat';

const ERPDashboard = () => {
  const transactions = [
    { id: '#ORD-742', customer: 'Arun Kumar', product: 'Cotton Fabric', amount: '$2,450.00', status: 'Completed', date: 'Oct 12, 2023' },
    { id: '#ORD-743', customer: 'Sarah Chen', product: 'Silk Thread', amount: '$1,200.00', status: 'Pending', date: 'Oct 12, 2023' },
    { id: '#ORD-744', customer: 'John Smith', product: 'Linen Roll', amount: '$850.00', status: 'Completed', date: 'Oct 11, 2023' },
    { id: '#ORD-745', customer: 'Priya Devi', product: 'Denim Wash', amount: '$3,100.00', status: 'Cancelled', date: 'Oct 11, 2023' },
    { id: '#ORD-746', customer: 'Mike Ross', product: 'Velvet Blue', amount: '$450.00', status: 'Completed', date: 'Oct 10, 2023' },
  ];

  return (
    <div className="space-y-8 p-1 animate-fade-in">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black theme-text tracking-tight">Production Overview</h3>
          <p className="text-sm theme-text-secondary">Real-time ERP insights for your manufacturing unit.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" icon={Download}>Export CSV</Button>
          <Button variant="glow" icon={TrendingUp}>View Growth</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Stat 
          title="Total Revenue" 
          value="$542,850" 
          icon={DollarSign} 
          trend="+12.5%" 
          trendType="up" 
          description="vs last month"
          className="theme-shadow-md"
        />
        <Stat 
          title="Active Orders" 
          value="1,240" 
          icon={ShoppingCart} 
          trend="+5.2%" 
          trendType="up" 
          description="Current production"
          className="theme-shadow-md"
        />
        <Stat 
          title="Inventory Levels" 
          value="85%" 
          icon={Package} 
          trend="-2.4%" 
          trendType="down" 
          description="Stock availability"
          className="theme-shadow-md"
        />
        <Stat 
          title="Active Workers" 
          value="482" 
          icon={Users} 
          trend="+3" 
          trendType="up" 
          description="On-shift now"
          className="theme-shadow-md"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Orders Table */}
        <div className="lg:col-span-2">
          <Card className="theme-shadow-md overflow-hidden">
            <div className="p-6 border-b theme-border-secondary flex items-center justify-between">
              <h4 className="font-bold theme-text">Recent Transactions</h4>
              <Button variant="ghost" size="sm" icon={Filter}>Filter</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="theme-bg-secondary/30 text-left border-b theme-border-secondary">
                    <th className="px-6 py-4 font-black theme-text text-[10px] uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-4 font-black theme-text text-[10px] uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-4 font-black theme-text text-[10px] uppercase tracking-wider">Product</th>
                    <th className="px-6 py-4 font-black theme-text text-[10px] uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 font-black theme-text text-[10px] uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y theme-border-secondary">
                  {transactions.map((t) => (
                    <tr key={t.id} className="hover:theme-bg-hover transition-colors">
                      <td className="px-6 py-4 font-mono font-medium theme-text-active">{t.id}</td>
                      <td className="px-6 py-4 theme-text font-medium">{t.customer}</td>
                      <td className="px-6 py-4 theme-text-secondary">{t.product}</td>
                      <td className="px-6 py-4 font-bold theme-text">{t.amount}</td>
                      <td className="px-6 py-4">
                        <Badge 
                          variant={t.status === 'Completed' ? 'success' : t.status === 'Pending' ? 'primary' : 'danger'}
                        >
                          {t.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Inventory Distribution */}
        <div className="lg:col-span-1">
          <Card className="theme-shadow-md">
            <div className="p-6 border-b theme-border-secondary">
              <h4 className="font-bold theme-text">Stock Distribution</h4>
            </div>
            <div className="p-6 space-y-6">
              {[
                { label: 'Cotton Fabric', value: 75, color: 'bg-[#E31B23]' },
                { label: 'Silk Thread', value: 45, color: 'bg-amber-500' },
                { label: 'Denim Wash', value: 92, color: 'bg-blue-500' },
                { label: 'Velvet Blue', value: 20, color: 'bg-violet-500' },
              ].map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="theme-text-secondary">{item.label}</span>
                    <span className="theme-text">{item.value}%</span>
                  </div>
                  <div className="h-2 w-full theme-bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-1000`} 
                      style={{ width: `${item.value}%` }} 
                    />
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <Button variant="outline" fullWidth iconRight={ArrowUpRight}>Manage Inventory</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ERPDashboard;

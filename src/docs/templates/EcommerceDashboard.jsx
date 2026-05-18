import React from 'react';
import { ShoppingCart, DollarSign, Users, TrendingUp, Bell, BarChart3, Star, Plus, AlertTriangle } from 'daneshicons';
import { clsx } from 'clsx';
import Badge from '../../lib/components/Badge';
import Button from '../../lib/components/Button';
import Stat from '../../lib/components/Stat';

const products = [
  { name: 'Wireless Headphones', price: '$79.99', sales: 1240, revenue: '$98,988', rating: 4.8, image: '🎧', trend: '+12%' },
  { name: 'Running Shoes Pro', price: '$129.99', sales: 856, revenue: '$111,267', rating: 4.6, image: '👟', trend: '+8%' },
  { name: 'Smart Watch Series', price: '$249.99', sales: 623, revenue: '$155,744', rating: 4.9, image: '⌚', trend: '+23%' },
  { name: 'Organic Skincare Kit', price: '$49.99', sales: 2101, revenue: '$105,031', rating: 4.7, image: '🧴', trend: '+45%' },
  { name: 'Portable Power Bank', price: '$39.99', sales: 1875, revenue: '$74,981', rating: 4.5, image: '🔋', trend: '+5%' },
  { name: 'Yoga Mat Premium', price: '$59.99', sales: 1432, revenue: '$85,910', rating: 4.4, image: '🧘', trend: '+18%' },
];

const EcommerceDashboard = () => {
  return (
    <div className="space-y-6 p-1 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black theme-text tracking-tight">Store Overview</h3>
          <p className="text-sm theme-text-secondary">Your e-commerce at a glance</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" icon={BarChart3}>Reports</Button>
          <Button variant="glow" size="sm" icon={Plus}>Add Product</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Stat title="Total Revenue" value="$845.2K" icon={DollarSign} trend="+18.2%" trendType="up" description="vs last month" size="sm" />
        <Stat title="Orders" value="6,482" icon={ShoppingCart} trend="+12.5%" trendType="up" description="this quarter" size="sm" />
        <Stat title="Customers" value="12,847" icon={Users} trend="+8.1%" trendType="up" description="active users" size="sm" />
        <Stat title="Conversion" value="3.24%" icon={TrendingUp} trend="+0.8%" trendType="up" description="rate" size="sm" />
      </div>

      {/* Top Products Table */}
      <div className="rounded-2xl border theme-border theme-bg-card overflow-hidden theme-shadow-md">
        <div className="p-5 border-b theme-border-secondary flex items-center justify-between">
          <h4 className="font-bold theme-text">Top Selling Products</h4>
          <div className="flex items-center gap-2 text-xs theme-text-tertiary">
            <span className="flex items-center gap-1"><Bell size={12} className="theme-icon" /> Updated 2 min ago</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="theme-bg-secondary/30 text-left border-b theme-border-secondary">
                <th className="px-5 py-3.5 font-black theme-text text-[10px] uppercase tracking-wider">Product</th>
                <th className="px-5 py-3.5 font-black theme-text text-[10px] uppercase tracking-wider">Price</th>
                <th className="px-5 py-3.5 font-black theme-text text-[10px] uppercase tracking-wider">Sales</th>
                <th className="px-5 py-3.5 font-black theme-text text-[10px] uppercase tracking-wider">Revenue</th>
                <th className="px-5 py-3.5 font-black theme-text text-[10px] uppercase tracking-wider">Rating</th>
                <th className="px-5 py-3.5 font-black theme-text text-[10px] uppercase tracking-wider">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y theme-border-secondary">
              {products.map((p, i) => (
                <tr key={i} className="hover:theme-bg-hover transition-colors cursor-pointer">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{p.image}</span>
                      <span className="font-bold theme-text">{p.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 theme-text-secondary">{p.price}</td>
                  <td className="px-5 py-3.5 font-bold theme-text">{p.sales.toLocaleString()}</td>
                  <td className="px-5 py-3.5 font-bold theme-text">{p.revenue}</td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1.5">
                      <Star size={12} className="text-amber-500 fill-amber-500" />
                      <span className="font-bold theme-text">{p.rating}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <Badge variant="success" size="sm">{p.trend}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: 'Pending Orders', value: '23', icon: Bell, color: 'from-amber-500 to-orange-600', bg: 'bg-amber-100 dark:bg-amber-900/30', iconColor: 'text-amber-600 dark:text-amber-400' },
          { label: 'Low Stock Items', value: '8', icon: AlertTriangle, color: 'from-rose-500 to-red-600', bg: 'bg-rose-100 dark:bg-rose-900/30', iconColor: 'text-rose-600 dark:text-rose-400' },
          { label: 'New Reviews', value: '47', icon: Star, color: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-100 dark:bg-emerald-900/30', iconColor: 'text-emerald-600 dark:text-emerald-400' },
        ].map((item, i) => (
          <div key={i} className="p-5 rounded-2xl border theme-border theme-bg-card hover:theme-shadow-md transition-all duration-200 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs theme-text-tertiary font-bold mb-1">{item.label}</p>
                <p className="text-3xl font-black theme-text">{item.value}</p>
              </div>
              <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center shrink-0', item.bg)}>
                <item.icon size={24} className={item.iconColor} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommerceDashboard;

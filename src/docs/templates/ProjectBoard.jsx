import React from 'react';
import { User, Bell } from 'daneshicons';
import { Plus, MessageSquare, Paperclip, ArrowUpRight, Calendar, Clock } from 'daneshicons';
import Badge from '../../lib/components/Badge';

const tasks = {
  backlog: [
    { title: 'Design system audit', priority: 'Low', users: 2, comments: 3, attachments: 1 },
    { title: 'API rate limiting', priority: 'Medium', users: 1, comments: 5, attachments: 2 },
  ],
  inProgress: [
    { title: 'User dashboard redesign', priority: 'High', users: 3, comments: 12, attachments: 4, due: '2 days' },
    { title: 'Payment integration', priority: 'High', users: 2, comments: 8, attachments: 3, due: '5 days' },
    { title: 'Dark mode support', priority: 'Medium', users: 1, comments: 6, attachments: 1 },
  ],
  review: [
    { title: 'Search optimization', priority: 'Medium', users: 2, comments: 4, attachments: 1 },
    { title: 'Mobile responsive fix', priority: 'High', users: 1, comments: 7, attachments: 2, due: '1 day' },
  ],
  done: [
    { title: 'Auth flow implementation', priority: 'High', users: 2, comments: 10, attachments: 3 },
    { title: 'Landing page v2', priority: 'Medium', users: 4, comments: 15, attachments: 5 },
    { title: 'Email templates', priority: 'Low', users: 1, comments: 3, attachments: 0 },
  ],
};

const priorityColors = {
  High: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-800',
  Medium: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800',
  Low: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800',
};

const TaskCard = ({ task }) => (
  <div className="p-4 rounded-xl border theme-border theme-bg-card hover:theme-shadow-md transition-all duration-200 cursor-pointer group">
    <div className="flex items-start justify-between mb-3">
      <h4 className="text-sm font-bold theme-text group-hover:text-[#E31B23] transition-colors">{task.title}</h4>
      <Badge variant="info" size="sm" className={`!text-[9px] !px-2 ${priorityColors[task.priority]}`}>{task.priority}</Badge>
    </div>
    <div className="flex items-center justify-between text-xs theme-text-tertiary">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1"><User size={12} className="theme-icon" />{task.users}</span>
        <span className="flex items-center gap-1"><MessageSquare size={12} />{task.comments}</span>
        <span className="flex items-center gap-1"><Paperclip size={12} />{task.attachments}</span>
      </div>
      {task.due && (
        <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-bold"><Clock size={12} />{task.due}</span>
      )}
    </div>
  </div>
);

const ProjectBoard = () => {
  const columns = [
    { id: 'backlog', label: 'Backlog', count: tasks.backlog.length, color: 'bg-slate-400' },
    { id: 'inProgress', label: 'In Progress', count: tasks.inProgress.length, color: 'bg-blue-500' },
    { id: 'review', label: 'Review', count: tasks.review.length, color: 'bg-amber-500' },
    { id: 'done', label: 'Done', count: tasks.done.length, color: 'bg-emerald-500' },
  ];

  return (
    <div className="animate-fade-in">
      {/* Board Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-black theme-text tracking-tight">Project Sprint</h3>
          <p className="text-sm theme-text-secondary">Q4 2025 · Product Dashboard</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {['#E31B23', '#6366f1', '#10b981', '#f59e0b'].map((color, i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 flex items-center justify-center text-white text-[10px] font-black" style={{ backgroundColor: color }}>
                {['DN', 'SC', 'AK', 'PM'][i]}
              </div>
            ))}
          </div>
          <span className="text-xs theme-text-tertiary font-bold">+2</span>
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map(col => (
          <div key={col.id} className="rounded-2xl border theme-border-secondary theme-bg-secondary/50 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${col.color}`} />
                <h4 className="text-sm font-bold theme-text">{col.label}</h4>
                <span className="text-xs px-1.5 py-0.5 rounded-full theme-bg-tertiary theme-text-tertiary font-bold">{col.count}</span>
              </div>
              <button className="w-6 h-6 rounded-lg border theme-border-secondary flex items-center justify-center theme-text-tertiary hover:theme-text hover:theme-bg-hover transition-all cursor-pointer">
                <Plus size={14} />
              </button>
            </div>
            <div className="space-y-3">
              {tasks[col.id].map((task, i) => (
                <TaskCard key={i} task={task} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBoard;

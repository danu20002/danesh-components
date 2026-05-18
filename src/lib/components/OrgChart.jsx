import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { clsx } from 'clsx';

const STYLE_ID = 'orgchart-tree-styles';

function injectTreeStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
.orgchart-tree-v ul {
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 24px;
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.orgchart-tree-v li {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 24px 14px 0 14px;
  list-style: none;
}
.orgchart-tree-v li::before,
.orgchart-tree-v li::after {
  content: '';
  position: absolute;
  top: 0;
  right: 50%;
  border-top: 2px solid var(--border-primary);
  width: 50%;
  height: 24px;
  z-index: 10;
  pointer-events: none;
}
.orgchart-tree-v li::after {
  right: auto;
  left: 50%;
  border-left: 2px solid var(--border-primary);
}
.orgchart-tree-v li:only-child::after,
.orgchart-tree-v li:only-child::before { display: none; }
.orgchart-tree-v li:only-child { padding-top: 0; }
.orgchart-tree-v li:first-child::before,
.orgchart-tree-v li:last-child::after { border: none; }
.orgchart-tree-v li:first-child::after { border-radius: 10px 0 0 0; }
.orgchart-tree-v li:last-child::before {
  border-right: 2px solid var(--border-primary);
  border-radius: 0 10px 0 0;
}
.orgchart-tree-v > ul::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  border-left: 2px solid var(--border-primary);
  width: 0;
  height: 24px;
  transform: translateX(-50%);
  z-index: 10;
  pointer-events: none;
}
.orgchart-tree-h {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.orgchart-tree-h > ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-left: 36px;
  margin: 0;
  list-style: none;
}
.orgchart-tree-h > ul::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  border-top: 2px solid var(--border-primary);
  width: 36px;
  height: 0;
  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;
}
.orgchart-tree-h li {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 10px 0 10px 36px;
  list-style: none;
}
.orgchart-tree-h li::before,
.orgchart-tree-h li::after {
  content: '';
  position: absolute;
  left: 0;
  width: 36px;
  border-left: 2px solid var(--border-primary);
  z-index: 10;
  pointer-events: none;
}
.orgchart-tree-h li::before {
  top: 0;
  height: 50%;
  border-bottom: 2px solid var(--border-primary);
}
.orgchart-tree-h li::after {
  bottom: 0;
  top: 50%;
  height: 50%;
  border-top: 2px solid var(--border-primary);
}
.orgchart-tree-h li:only-child::after,
.orgchart-tree-h li:only-child::before { display: none; }
.orgchart-tree-h li:only-child { padding-left: 36px; }
.orgchart-tree-h li:only-child::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 50%;
  width: 36px;
  height: 0;
  border-top: 2px solid var(--border-primary);
  border-left: none;
  z-index: 10;
  transform: translateY(-50%);
}
.orgchart-tree-h li:first-child::before,
.orgchart-tree-h li:last-child::after { border-left: none; }
.orgchart-tree-h li:first-child::after { border-radius: 0 0 0 10px; }
.orgchart-tree-h li:last-child::before { border-radius: 10px 0 0 0; }
`;
  document.head.appendChild(style);
}

const DEPARTMENTS = {
  Executive: { label: 'Executive', accent: '#f43f5e' },
  Engineering: { label: 'Engineering', accent: '#6366f1' },
  Product: { label: 'Product & Design', accent: '#a855f7' },
  Marketing: { label: 'Marketing', accent: '#f59e0b' },
  HR: { label: 'People Ops', accent: '#14b8a6' },
  Finance: { label: 'Finance', accent: '#06b6d4' },
  Operations: { label: 'Operations', accent: '#f97316' },
};

const countReports = (node) => {
  if (!node.children || node.children.length === 0) return 0;
  let count = node.children.length;
  node.children.forEach(c => { count += countReports(c); });
  return count;
};

const TreeNode = ({ node, expanded, onToggle, renderNode, onNodeClick, searchTerm, depth, direction, darkMode }) => {
  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = expanded[node.id];
  const isHorizontal = direction === 'horizontal';
  const deptInfo = DEPARTMENTS[node.department] || DEPARTMENTS.Engineering;

  const matchesSearch = useMemo(() => {
    if (!searchTerm) return true;
    const q = searchTerm.toLowerCase();
    const match = (val) => val?.toLowerCase().includes(q);
    return match(node.name) || match(node.role) || match(node.department) || match(node.email);
  }, [searchTerm, node]);

  useEffect(() => {
    if (hasChildren && searchTerm) {
      const q = searchTerm.toLowerCase();
      const childMatch = node.children.some(c =>
        c.name?.toLowerCase().includes(q) || c.role?.toLowerCase().includes(q)
      );
      if (childMatch && !isExpanded) onToggle(node.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const card = renderNode ? (
    renderNode(node)
  ) : (
    <div
      className={clsx(
        'employee-card relative w-64 rounded-xl border transition-all duration-300 cursor-pointer group hover:-translate-y-0.5',
        darkMode
          ? 'bg-zinc-900/80 border-zinc-800 hover:shadow-xl hover:shadow-black/20 hover:border-zinc-700 shadow-md shadow-black/10'
          : 'bg-white border-slate-200 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300 shadow-sm',
        matchesSearch ? '' : 'opacity-30'
      )}
      onClick={() => onNodeClick?.(node)}
    >
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{ backgroundColor: deptInfo.accent }} />
      <div className="flex items-start gap-3 px-4 py-4">
        <div className="relative shrink-0">
          <div className={clsx(
            'w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold overflow-hidden',
            darkMode ? 'ring-2 ring-zinc-700' : 'ring-2 ring-slate-100'
          )}
            style={{ background: `linear-gradient(135deg, ${deptInfo.accent}, ${deptInfo.accent}dd)` }}
          >
            {node.avatar ? (
              <img src={node.avatar} alt="" className="w-full h-full object-cover" />
            ) : (
              <span className="text-white">{node.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}</span>
            )}
          </div>
          <span className={clsx(
            'absolute -bottom-0.5 -right-0.5 w-3 h-3 border-2 rounded-full',
            darkMode ? 'bg-emerald-500 border-zinc-900' : 'bg-emerald-400 border-white'
          )} />
        </div>
        <div className="min-w-0 flex-1">
          <p className={clsx('text-sm font-bold truncate leading-tight', darkMode ? 'text-zinc-100' : 'text-slate-800')}>{node.name}</p>
          <p className={clsx('text-[11px] truncate leading-tight mt-0.5', darkMode ? 'text-zinc-400' : 'text-slate-400')}>{node.role}</p>
          <span className={clsx(
            'inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide mt-1.5',
            darkMode ? `bg-${deptInfo.accent}/10 text-${deptInfo.accent}/90` : `bg-${deptInfo.accent}/10 text-${deptInfo.accent}`
          )}
            style={{ backgroundColor: `${deptInfo.accent}15`, color: deptInfo.accent }}
          >
            {deptInfo.label}
          </span>
        </div>
      </div>
      <div className={clsx('mx-4 pb-3 pt-2 border-t flex items-center justify-between text-[10px]', darkMode ? 'border-zinc-800 text-zinc-500' : 'border-slate-100 text-slate-400')}>
        <span className="flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          {node.location || 'Office'}
        </span>
        {hasChildren && (
          <span className="font-semibold">{countReports(node)} reports</span>
        )}
      </div>
      {hasChildren && (
        <button
          onClick={(e) => { e.stopPropagation(); onToggle(node.id); }}
          className={clsx(
            'absolute top-2.5 right-2.5 w-5 h-5 rounded-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100',
            darkMode ? 'text-zinc-400 hover:text-zinc-200 bg-zinc-800 hover:bg-zinc-700' : 'text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200'
          )}
        >
          <svg className={clsx('w-3 h-3 transition-transform duration-200', isExpanded && 'rotate-90')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );

  if (isHorizontal) {
    return (
      <div className="flex flex-row items-center">
        {card}
        {hasChildren && (
          <div className="relative flex flex-row items-center">
            <div className="relative w-9 flex items-center justify-center" style={{ height: '2px' }}>
              <div className={clsx('absolute inset-0 border-t-2', darkMode ? 'border-zinc-700' : 'border-slate-200')} />
              <button
                onClick={(e) => { e.stopPropagation(); onToggle(node.id); }}
                className={clsx(
                  'absolute z-20 flex items-center justify-center w-6 h-6 border rounded-full shadow-sm hover:scale-110 transition-all text-xs font-bold leading-none',
                  darkMode
                    ? 'bg-zinc-800 border-zinc-600 text-zinc-400 hover:text-teal-400 hover:border-teal-500'
                    : 'bg-white border-slate-300 text-slate-500 hover:text-teal-600 hover:border-teal-500'
                )}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  {isExpanded ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  )}
                </svg>
              </button>
            </div>
            {isExpanded && (
              <div className="orgchart-tree-h">
                <ul>
                  {node.children.map((child) => (
                    <li key={child.id}>
                      <TreeNode
                        node={child}
                        expanded={expanded}
                        onToggle={onToggle}
                        renderNode={renderNode}
                        onNodeClick={onNodeClick}
                        searchTerm={searchTerm}
                        depth={depth + 1}
                        direction={direction}
                        darkMode={darkMode}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {card}
      {hasChildren && isExpanded && (
        <div className="orgchart-tree-v flex flex-col items-center">
          <div className="relative w-0.5 h-8 flex justify-center">
            <div className={clsx('absolute inset-0 border-l-2', darkMode ? 'border-zinc-700' : 'border-slate-200')} />
            <button
              onClick={(e) => { e.stopPropagation(); onToggle(node.id); }}
              className={clsx(
                'absolute top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-6 h-6 border rounded-full shadow-sm hover:scale-110 transition-all text-xs font-bold leading-none',
                darkMode
                  ? 'bg-zinc-800 border-zinc-600 text-zinc-400 hover:text-teal-400 hover:border-teal-500'
                  : 'bg-white border-slate-300 text-slate-500 hover:text-teal-600 hover:border-teal-500'
              )}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                {isExpanded ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                )}
              </svg>
            </button>
          </div>
          <ul>
            {node.children.map((child) => (
              <li key={child.id}>
                <TreeNode
                  node={child}
                  expanded={expanded}
                  onToggle={onToggle}
                  renderNode={renderNode}
                  onNodeClick={onNodeClick}
                  searchTerm={searchTerm}
                  depth={depth + 1}
                  direction={direction}
                  darkMode={darkMode}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const OrgChart = ({
  data,
  renderNode,
  onNodeClick,
  searchTerm: externalSearch,
  direction: externalDirection,
  zoomable = true,
  draggable = true,
  minZoom = 0.3,
  maxZoom = 2,
  className,
  defaultExpanded = true,
}) => {
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const [expanded, setExpanded] = useState(() => {
    if (defaultExpanded && data) {
      const collect = (node) => {
        const acc = {};
        if (node.children) {
          acc[node.id] = true;
          node.children.forEach(c => Object.assign(acc, collect(c)));
        }
        return acc;
      };
      return collect(data);
    }
    return {};
  });
  const [searchTerm, setSearchTerm] = useState(externalSearch || '');
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showSearch, setShowSearch] = useState(false);
  const [direction, setDirection] = useState(externalDirection || 'vertical');
  const containerRef = useRef(null);

  useEffect(() => {
    const checkDark = () => setDarkMode(
      document.documentElement.classList.contains('dark') ||
      document.documentElement.getAttribute('data-theme') === 'dark'
    );
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => { injectTreeStyles(); }, []);

  const root = data;

  const toggleNode = useCallback((id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleWheel = useCallback((e) => {
    if (!zoomable) return;
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.08 : 0.08;
    setZoom(z => Math.min(maxZoom, Math.max(minZoom, z + delta)));
  }, [zoomable, minZoom, maxZoom]);

  const handleMouseDown = useCallback((e) => {
    if (!draggable || e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  }, [draggable, pan]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !zoomable) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [zoomable, handleWheel]);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp]);

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => setZoom(z => Math.min(maxZoom, z + 0.15)), [maxZoom]);
  const zoomOut = useCallback(() => setZoom(z => Math.max(minZoom, z - 0.15)), [minZoom]);

  const filteredData = useMemo(() => {
    if (!searchTerm || !root) return root;
    const q = searchTerm.toLowerCase();
    const filter = (node) => {
      const match = [node.name, node.role, node.department, node.email, node.location].some(v => v?.toLowerCase().includes(q));
      const children = node.children ? node.children.map(filter).filter(Boolean) : [];
      if (match || children.length > 0) {
        return { ...node, children: children.length > 0 ? children : node.children };
      }
      return null;
    };
    return filter(root);
  }, [root, searchTerm]);

  const controls = (
    <div className={clsx(
      'flex items-center gap-2 p-2 rounded-xl border shadow-sm',
      darkMode ? 'bg-zinc-900/90 border-zinc-800 shadow-black/10' : 'bg-white/90 border-slate-200 shadow-slate-200/50'
    )}>
      <button
        onClick={zoomOut}
        className={clsx('w-8 h-8 rounded-lg flex items-center justify-center transition-all text-sm font-bold cursor-pointer', darkMode ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100')}
        title="Zoom Out"
      >−</button>
      <span className={clsx('text-xs font-mono min-w-[42px] text-center select-none', darkMode ? 'text-zinc-400' : 'text-slate-500')}>
        {Math.round(zoom * 100)}%
      </span>
      <button
        onClick={zoomIn}
        className={clsx('w-8 h-8 rounded-lg flex items-center justify-center transition-all text-sm font-bold cursor-pointer', darkMode ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100')}
        title="Zoom In"
      >+</button>
      <div className={clsx('w-px h-6', darkMode ? 'bg-zinc-800' : 'bg-slate-200')} />
      <button
        onClick={resetView}
        className={clsx('w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer', darkMode ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100')}
        title="Reset View"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      </button>
      <div className={clsx('w-px h-6', darkMode ? 'bg-zinc-800' : 'bg-slate-200')} />
      <button
        onClick={() => setDirection(d => d === 'vertical' ? 'horizontal' : 'vertical')}
        className={clsx('w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer', darkMode ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100')}
        title={`Switch to ${direction === 'vertical' ? 'horizontal' : 'vertical'} layout`}
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {direction === 'vertical' ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 8v12m0 0l4-4m-4 4l-4-4m6-8H4m0 0l4-4m-4 4l4 4" />
          )}
        </svg>
      </button>
      <div className={clsx('w-px h-6', darkMode ? 'bg-zinc-800' : 'bg-slate-200')} />
      <button
        onClick={() => setShowSearch(s => !s)}
        className={clsx(
          'w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer',
          showSearch
            ? darkMode ? 'text-teal-400 bg-zinc-800' : 'text-teal-600 bg-slate-100'
            : darkMode ? 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
        )}
        title="Search"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className={clsx('relative select-none', darkMode && 'dark', className)}
      style={{ '--border-primary': darkMode ? '#3f3f46' : '#e2e8f0' }}
    >
      <div className="absolute top-3 right-3 z-20">
        {controls}
      </div>
      {showSearch && (
        <div className="absolute top-3 left-3 z-20 animate-fade-in">
          <div className="relative">
            <svg className={clsx('absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4', darkMode ? 'text-zinc-500' : 'text-slate-400')} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search by name, role, department..."
              className={clsx(
                'w-72 pl-9 pr-4 py-2.5 text-sm rounded-xl border outline-none transition-all',
                darkMode
                  ? 'bg-zinc-900/90 border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'
                  : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'
              )}
              autoFocus
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className={clsx('absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer', darkMode ? 'text-zinc-500 hover:text-zinc-300' : 'text-slate-400 hover:text-slate-700')}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
      <div
        ref={containerRef}
        className={clsx(
          'relative overflow-hidden rounded-2xl border min-h-[500px] transition-colors duration-300',
          darkMode
            ? 'bg-[#0a0a0b] border-zinc-800'
            : 'bg-gradient-to-br from-slate-50/80 to-white border-slate-200',
          !isDragging && 'cursor-grab',
          isDragging && 'cursor-grabbing'
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        <div
          className={clsx(
            'min-h-[500px] p-8 transition-transform duration-75',
            direction === 'horizontal' ? 'flex items-start justify-start' : 'flex items-start justify-center'
          )}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: 'center center',
          }}
        >
          {filteredData ? (
            <TreeNode
              node={filteredData}
              expanded={expanded}
              onToggle={toggleNode}
              renderNode={renderNode}
              onNodeClick={onNodeClick}
              searchTerm={searchTerm}
              depth={0}
              direction={direction}
              darkMode={darkMode}
            />
          ) : (
            <div className="text-center py-16 w-full">
              <p className={clsx('text-sm', darkMode ? 'text-zinc-500' : 'text-slate-400')}>No matching employees found</p>
            </div>
          )}
        </div>
        {draggable && !isDragging && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
            <span className={clsx(
              'text-[10px] px-3 py-1 rounded-full backdrop-blur-sm border',
              darkMode ? 'text-zinc-500 bg-zinc-900/80 border-zinc-800' : 'text-slate-400 bg-white/80 border-slate-200'
            )}>
              Scroll to zoom · Drag to pan
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

OrgChart.displayName = 'OrgChart';

export const VerticalOrgChart = (props) => <OrgChart {...props} direction="vertical" />;
VerticalOrgChart.displayName = 'VerticalOrgChart';

export const HorizontalOrgChart = (props) => <OrgChart {...props} direction="horizontal" />;
HorizontalOrgChart.displayName = 'HorizontalOrgChart';

export default OrgChart;

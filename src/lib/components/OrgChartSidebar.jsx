import React, { useState, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { clsx } from 'clsx';

const ZOHO_TEAL = '#009688';
const INACTIVE_LIGHT = '#cbd5e1';
const INACTIVE_DARK = '#3f3f46';

const findNodeInTree = (node, id) => {
  if (!node) return null;
  if (node.id === id) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeInTree(child, id);
      if (found) return found;
    }
  }
  return null;
};

const getSubordinateCount = (node) => {
  if (!node?.children?.length) return 0;
  let count = node.children.length;
  node.children.forEach(child => { count += getSubordinateCount(child); });
  return count;
};

const getHPath = (x1, y1, x2, y2) => {
  const r = Math.min(10, Math.abs(x2 - x1) / 2, Math.abs(y2 - y1) / 2);
  if (Math.abs(y2 - y1) < 2) return `M ${x1} ${y1} L ${x2} ${y2}`;
  const xMid = x1 + (x2 - x1) / 2;
  const signY = y2 > y1 ? 1 : -1;
  return `M ${x1} ${y1} L ${xMid - r} ${y1} Q ${xMid} ${y1} ${xMid} ${y1 + r * signY} L ${xMid} ${y2 - r * signY} Q ${xMid} ${y2} ${xMid + r} ${y2} L ${x2} ${y2}`;
};

const getVPath = (x1, y1, x2, y2) => {
  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  if (dx < 2) return `M ${x1} ${y1} L ${x2} ${y2}`;
  const r = Math.min(10, dx / 2, dy / 2);
  const yMid = y1 + dy / 2;
  const dirX = x2 > x1 ? 1 : -1;
  return `M ${x1} ${y1} L ${x1} ${yMid - r} Q ${x1} ${yMid} ${x1 + r * dirX} ${yMid} L ${x2 - r * dirX} ${yMid} Q ${x2} ${yMid} ${x2} ${yMid + r} L ${x2} ${y2}`;
};

const OrgChartSidebar = ({ data, onNodeClick, defaultSelectedId, direction: initialDirection = 'horizontal', className }) => {
  const [selectedNodeId, setSelectedNodeId] = useState(defaultSelectedId || '4-7-1');
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));
  const [showTooltip, setShowTooltip] = useState(true);
  const [lines, setLines] = useState([]);
  const [badges, setBadges] = useState([]);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [tooltipAbove, setTooltipAbove] = useState(true);
  const [orientation, setOrientation] = useState(initialDirection);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const containerRef = useRef(null);
  const treeRef = useRef(null);

  useEffect(() => {
    const checkDark = () => setDarkMode(
      document.documentElement.classList.contains('dark') ||
      document.documentElement.getAttribute('data-theme') === 'dark'
    );
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => { setShowTooltip(true); }, [selectedNodeId]);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsPanning(true);
    setPanStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
    setHasMoved(false);
  };

  const handleMouseMove = (e) => {
    if (!isPanning) return;
    const dx = Math.abs(e.clientX - panStart.x - panOffset.x);
    const dy = Math.abs(e.clientY - panStart.y - panOffset.y);
    if (dx > 3 || dy > 3) setHasMoved(true);
    setPanOffset({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    setIsPanning(true);
    setPanStart({ x: touch.clientX - panOffset.x, y: touch.clientY - panOffset.y });
    setHasMoved(false);
  };

  const handleTouchMove = (e) => {
    if (!isPanning || e.touches.length !== 1) return;
    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - panStart.x - panOffset.x);
    const dy = Math.abs(touch.clientY - panStart.y - panOffset.y);
    if (dx > 3 || dy > 3) setHasMoved(true);
    setPanOffset({ x: touch.clientX - panStart.x, y: touch.clientY - panStart.y });
  };

  const handleTouchEnd = () => {
    setIsPanning(false);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isPanning]);

  const selectedNode = useMemo(() => findNodeInTree(data, selectedNodeId) || data, [data, selectedNodeId]);

  const selectedPathIds = useMemo(() => {
    const path = [];
    const traverse = (node) => {
      if (!node) return false;
      if (node.id === selectedNodeId) { path.push(node.id); return true; }
      if (node.children) {
        for (const child of node.children) {
          if (traverse(child)) { path.push(node.id); return true; }
        }
      }
      return false;
    };
    traverse(data);
    return path.reverse();
  }, [data, selectedNodeId]);

  const columnsData = useMemo(() => {
    const leadershipCircles = {
      root: data,
      level1: data?.children?.[0] || null,
      level2: data?.children?.[0]?.children || []
    };
    const detailedCardsLevel1 = [];
    const detailedCardsLevel2 = [];

    const l2id = selectedPathIds[2];
    if (l2id) {
      const n = leadershipCircles.level2.find(c => c.id === l2id);
      if (n) detailedCardsLevel1.push(...(n.children || []));
    }
    const l3id = selectedPathIds[3];
    if (l3id && detailedCardsLevel1.length > 0) {
      const n = detailedCardsLevel1.find(c => c.id === l3id);
      if (n) detailedCardsLevel2.push(...(n.children || []));
    }
    return { leadershipCircles, detailedCardsLevel1, detailedCardsLevel2 };
  }, [data, selectedPathIds]);

  const calculateLines = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const wrapper = container.querySelector('.tree-wrapper');
    if (!wrapper) return;
    const wrapperRect = wrapper.getBoundingClientRect();

    const newLines = [];
    const newBadges = [];

    const childElements = wrapper.querySelectorAll('[data-connector-child]');
    childElements.forEach(childEl => {
      const childId = childEl.getAttribute('data-connector-child');
      const parentId = childEl.getAttribute('data-connector-parent');
      if (!parentId) return;

      const parentEl = wrapper.querySelector(`[data-connector-parent-anchor="${parentId}"]`);
      if (!parentEl) return;

      const pRect = parentEl.getBoundingClientRect();
      const cRect = childEl.getBoundingClientRect();

      const isHorizontal = orientation === 'horizontal';

      const x1 = isHorizontal ? pRect.right - wrapperRect.left : pRect.left + pRect.width / 2 - wrapperRect.left;
      const y1 = isHorizontal ? pRect.top + pRect.height / 2 - wrapperRect.top : pRect.bottom - wrapperRect.top;
      const x2 = isHorizontal ? cRect.left - wrapperRect.left : cRect.left + cRect.width / 2 - wrapperRect.left;
      const y2 = isHorizontal ? cRect.top + cRect.height / 2 - wrapperRect.top : cRect.top - wrapperRect.top;

      const isActive = selectedPathIds.includes(childId) && selectedPathIds.includes(parentId);
      newLines.push({ id: `${parentId}-${childId}`, x1, y1, x2, y2, isActive });
    });

    const groupedByParent = {};
    newLines.forEach(line => {
      const parentId = line.id.split('-')[0];
      if (!groupedByParent[parentId]) groupedByParent[parentId] = [];
      groupedByParent[parentId].push(line);
    });

    Object.keys(groupedByParent).forEach(parentId => {
      const parentLines = groupedByParent[parentId];
      if (!parentLines.length) return;
      const node = findNodeInTree(data, parentId);
      if (!node) return;
      const count = getSubordinateCount(node);
      if (!count) return;
      const first = parentLines[0];
      const isHorizontal = orientation === 'horizontal';
      const mid = isHorizontal ? first.x1 + (first.x2 - first.x1) * 0.45 : first.y1 + (first.y2 - first.y1) * 0.45;
      const isActiveBadge = selectedPathIds.includes(parentId) && parentLines.some(l => l.isActive);
      newBadges.push({
        id: `badge-${parentId}`,
        x: isHorizontal ? mid : first.x1,
        y: isHorizontal ? first.y1 : mid,
        value: count,
        isActive: isActiveBadge
      });
    });

    childElements.forEach(childEl => {
      const childId = childEl.getAttribute('data-connector-child');
      const isCircle = childEl.getAttribute('data-is-circle') === 'true';
      if (!isCircle) return;
      const node = findNodeInTree(data, childId);
      if (!node || !node.reportsCount) return;
      const line = newLines.find(l => l.id.endsWith(`-${childId}`));
      if (!line) return;
      const isHorizontal = orientation === 'horizontal';
      const entry = isHorizontal ? line.x2 - 22 : line.y2 - 22;
      const isActiveBadge = selectedPathIds.includes(childId);
      newBadges.push({
        id: `entry-badge-${childId}`,
        x: isHorizontal ? entry : line.x2,
        y: isHorizontal ? line.y2 : entry,
        value: node.reportsCount,
        isActive: isActiveBadge
      });
    });

    let activeEl = wrapper.querySelector(`[data-connector-child="${selectedNodeId}"]`);
    if (!activeEl) {
      activeEl = wrapper.querySelector(`[data-connector-parent-anchor="${selectedNodeId}"]`);
    }
    if (activeEl) {
      const activeRect = activeEl.getBoundingClientRect();
      const spaceAbove = activeRect.top - wrapperRect.top;
      const above = spaceAbove > 300;
      setTooltipAbove(above);
      setTooltipPos({
        x: activeRect.left + activeRect.width / 2 - wrapperRect.left,
        y: above ? activeRect.top - wrapperRect.top : activeRect.bottom - wrapperRect.top + 14
      });
    }

    setLines(newLines);
    setBadges(newBadges);
  };

  useLayoutEffect(() => {
    calculateLines();
    window.addEventListener('resize', calculateLines);
    return () => window.removeEventListener('resize', calculateLines);
  }, [columnsData, selectedNodeId, orientation]);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      calculateLines();
      count++;
      if (count > 8) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [selectedNodeId, data, orientation]);

  const handleSelect = (id) => {
    if (hasMoved) return;
    setSelectedNodeId(id);
    onNodeClick?.(findNodeInTree(data, id) || data);
  };

  const inactiveColor = darkMode ? INACTIVE_DARK : INACTIVE_LIGHT;
  const { leadershipCircles, detailedCardsLevel1, detailedCardsLevel2 } = columnsData;
  const isHorizontal = orientation === 'horizontal';

  return (
    <div
      ref={containerRef}
      className={clsx('relative h-[600px] overflow-hidden rounded-2xl select-none transition-colors duration-300', darkMode && 'dark', className)}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Header with orientation toggle */}
      <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-center p-3 pointer-events-none">
        <div className={clsx(
          'flex items-center p-1 rounded-full border shadow-lg pointer-events-auto backdrop-blur-md',
          darkMode
            ? 'bg-zinc-900/80 border-zinc-800 shadow-black/20'
            : 'bg-white/80 border-slate-200 shadow-slate-200/60'
        )}>
          <button
            onClick={() => setOrientation('horizontal')}
            className={clsx(
              'px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer',
              orientation === 'horizontal'
                ? darkMode
                  ? 'bg-zinc-700 shadow-sm text-teal-400'
                  : 'bg-white shadow-sm text-teal-600'
                : darkMode
                  ? 'text-zinc-400 hover:text-zinc-200'
                  : 'text-slate-500 hover:text-slate-700'
            )}
          >
            Horizontal Layout
          </button>
          <button
            onClick={() => setOrientation('vertical')}
            className={clsx(
              'px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer',
              orientation === 'vertical'
                ? darkMode
                  ? 'bg-zinc-700 shadow-sm text-teal-400'
                  : 'bg-white shadow-sm text-teal-600'
                : darkMode
                  ? 'text-zinc-400 hover:text-zinc-200'
                  : 'text-slate-500 hover:text-slate-700'
            )}
          >
            Vertical Layout
          </button>
        </div>
      </div>

      <div className={clsx(
        'w-full h-full overflow-hidden flex items-center justify-center transition-colors duration-300',
        darkMode ? 'bg-[#0a0a0b]' : 'bg-gradient-to-br from-slate-50/80 to-white',
        !isPanning ? 'cursor-grab' : 'cursor-grabbing'
      )}>
        <div
          ref={treeRef}
          className="tree-wrapper relative p-16 flex items-center min-w-max min-h-max transition-transform duration-75"
          style={{ transform: `translate(${panOffset.x}px, ${panOffset.y}px)` }}
        >
          <svg className="absolute inset-0 pointer-events-none w-full h-full z-10">
            {lines.map(line => (
              <path
                key={line.id}
                d={orientation === 'vertical' ? getVPath(line.x1, line.y1, line.x2, line.y2) : getHPath(line.x1, line.y1, line.x2, line.y2)}
                fill="none"
                stroke={line.isActive ? ZOHO_TEAL : inactiveColor}
                strokeWidth={line.isActive ? 2.5 : 1.5}
                className="transition-all duration-500"
                style={{ filter: line.isActive ? 'drop-shadow(0 0 4px rgba(0,150,136,0.3))' : 'none' }}
              />
            ))}
          </svg>

          <div className="absolute inset-0 pointer-events-none z-20">
            {badges.map(badge => (
              <div
                key={badge.id}
                className={clsx(
                  'absolute px-2 py-0.5 rounded-full text-[10px] font-bold border leading-none transition-all duration-300 shadow-sm',
                  badge.isActive
                    ? 'bg-teal-500 text-white border-teal-400 shadow-teal-500/20'
                    : darkMode
                      ? 'bg-zinc-800 text-zinc-400 border-zinc-700'
                      : 'bg-white text-slate-500 border-slate-200 shadow-slate-200/50'
                )}
                style={{ left: `${badge.x}px`, top: `${badge.y}px`, transform: 'translate(-50%, -50%)' }}
              >
                {badge.value}
              </div>
            ))}
          </div>

          {/* Tooltip */}
          {showTooltip && selectedNode && tooltipPos.x !== 0 && (
            <div
              className={clsx(
                'absolute z-50 w-72 rounded-2xl shadow-2xl p-5 transition-all duration-300 -translate-x-1/2',
                tooltipAbove ? '-translate-y-[calc(100%+14px)]' : 'translate-y-[14px]',
                darkMode
                  ? 'bg-zinc-900/95 border border-zinc-800 shadow-black/40'
                  : 'bg-white border border-slate-200/90 shadow-slate-200/60'
              )}
              style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
            >
              {tooltipAbove ? (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[8px] w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-t-[9px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.05)]"
                  style={darkMode
                    ? { borderTopColor: '#27272a' }
                    : { borderTopColor: 'white' }
                  }
                />
              ) : (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[8px] w-0 h-0 border-l-[9px] border-l-transparent border-r-[9px] border-r-transparent border-b-[9px] drop-shadow-[0_-2px_2px_rgba(0,0,0,0.05)]"
                  style={darkMode
                    ? { borderBottomColor: '#27272a' }
                    : { borderBottomColor: 'white' }
                  }
                />
              )}

              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative shrink-0">
                    <img
                      src={selectedNode.avatar}
                      alt={selectedNode.name}
                      className={clsx('w-12 h-12 rounded-full object-cover', darkMode ? 'ring-2 ring-zinc-700' : 'ring-2 ring-slate-100')}
                    />
                    <span className={clsx('absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full', darkMode ? 'bg-green-500 border-zinc-900' : 'bg-green-400 border-white')} />
                  </div>
                  <div className="min-w-0">
                    <h4 className={clsx('text-sm font-bold truncate pr-4', darkMode ? 'text-zinc-100' : 'text-slate-800')}>
                      {selectedNode.name}
                    </h4>
                    <p className={clsx('text-[11px] mt-0.5 truncate leading-tight', darkMode ? 'text-zinc-400' : 'text-slate-400')}>
                      {selectedNode.role}
                    </p>
                    <span className={clsx('inline-block mt-1.5 px-2 py-0.5 rounded-full text-[8px] font-extrabold uppercase tracking-wider', darkMode ? 'bg-teal-950/40 text-teal-300' : 'bg-teal-50 text-teal-700')}>
                      {selectedNode.department || 'Staff'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
                  className={clsx('text-sm font-bold w-5 h-5 flex items-center justify-center rounded-full transition-colors shrink-0 cursor-pointer', darkMode ? 'text-zinc-500 hover:text-zinc-300 bg-zinc-800 hover:bg-zinc-700' : 'text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200')}
                >
                  ×
                </button>
              </div>

              {selectedNode.bio && (
                <p className={clsx('text-[11px] italic leading-relaxed mt-3 pt-3 border-t', darkMode ? 'text-zinc-400 border-zinc-800' : 'text-slate-500 border-slate-100')}>
                  &ldquo;{selectedNode.bio}&rdquo;
                </p>
              )}

              <div className={clsx('mt-3.5 space-y-2 text-[11px] pt-3 border-t', darkMode ? 'text-zinc-300 border-zinc-800' : 'text-slate-600 border-slate-100')}>
                <div className="flex items-center space-x-2.5 truncate">
                  <span className="shrink-0 opacity-60">✉</span>
                  <span className="truncate">{selectedNode.email || `${selectedNode.name.toLowerCase().replace(/\s/g, '')}@talentcorp.com`}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="shrink-0 opacity-60">📞</span>
                  <span>{selectedNode.phone || '+91 98765 00000'}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="shrink-0 opacity-60">📍</span>
                  <span>{selectedNode.location || 'Bengaluru, India'}</span>
                </div>
              </div>

              {selectedNode.skills?.length > 0 && (
                <div className={clsx('mt-4 pt-3 border-t', darkMode ? 'border-zinc-800' : 'border-slate-100')}>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.skills.map(skill => (
                      <span
                        key={skill}
                        className={clsx('text-[10px] px-2 py-0.5 rounded-md font-medium', darkMode ? 'bg-zinc-800 text-zinc-300 border border-zinc-700' : 'bg-slate-50 text-slate-600 border border-slate-200')}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Columns */}
          <div className={clsx('relative z-30', isHorizontal ? 'flex items-center space-x-16' : 'flex flex-col items-center space-y-14')}>
            <div className={clsx('shrink-0', isHorizontal ? 'flex items-center space-x-14' : 'flex flex-col items-center space-y-10')}>
              <div className="flex flex-col items-center justify-center relative" data-connector-parent-anchor={leadershipCircles.root?.id}>
                <button onClick={() => handleSelect(leadershipCircles.root?.id)} className={clsx(
                  'relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300',
                  selectedPathIds.includes(leadershipCircles.root?.id)
                    ? 'ring-[3px] ring-teal-500 ring-offset-4 scale-105 shadow-xl shadow-teal-500/20'
                    : 'ring-2 ring-slate-200 hover:ring-slate-300 shadow-md',
                  darkMode && !selectedPathIds.includes(leadershipCircles.root?.id) && 'ring-zinc-700 hover:ring-zinc-500'
                )}>
                  {leadershipCircles.root?.avatar ? (
                    <img src={leadershipCircles.root.avatar} alt={leadershipCircles.root.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">{leadershipCircles.root?.name?.charAt(0)}</div>
                  )}
                </button>
              </div>

              {leadershipCircles.level1 && (
                <div
                  className="flex flex-col items-center justify-center relative"
                  data-connector-child={leadershipCircles.level1.id}
                  data-connector-parent={leadershipCircles.root?.id}
                  data-connector-parent-anchor={leadershipCircles.level1.id}
                  data-is-circle="true"
                >
                  <button onClick={() => handleSelect(leadershipCircles.level1.id)} className={clsx(
                    'relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300',
                    selectedPathIds.includes(leadershipCircles.level1.id)
                      ? 'ring-[3px] ring-teal-500 ring-offset-4 scale-105 shadow-xl shadow-teal-500/20'
                      : 'ring-2 ring-slate-200 hover:ring-slate-300 shadow-md',
                    darkMode && !selectedPathIds.includes(leadershipCircles.level1.id) && 'ring-zinc-700 hover:ring-zinc-500'
                  )}>
                    {leadershipCircles.level1.avatar ? (
                      <img src={leadershipCircles.level1.avatar} alt={leadershipCircles.level1.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">{leadershipCircles.level1.name?.charAt(0)}</div>
                    )}
                  </button>
                </div>
              )}

              {leadershipCircles.level2.length > 0 && (
                <div className={clsx('relative', isHorizontal ? 'flex flex-col space-y-6' : 'flex flex-row space-x-6')}>
                  {leadershipCircles.level2.map(node => {
                    const isActive = selectedPathIds.includes(node.id);
                    return (
                      <div
                        key={node.id}
                        className="flex items-center relative"
                        data-connector-child={node.id}
                        data-connector-parent={leadershipCircles.level1?.id}
                        data-connector-parent-anchor={isActive ? node.id : undefined}
                        data-is-circle="true"
                      >
                        <button onClick={() => handleSelect(node.id)} className={clsx(
                          'relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300',
                          isActive
                            ? 'ring-[3px] ring-teal-500 ring-offset-4 scale-105 shadow-xl shadow-teal-500/20'
                            : 'ring-2 ring-slate-200 hover:ring-slate-300 shadow-md',
                          darkMode && !isActive && 'ring-zinc-700 hover:ring-zinc-500'
                        )}>
                          {node.avatar ? (
                            <img src={node.avatar} alt={node.name} className="w-full h-full rounded-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">{node.name?.charAt(0)}</div>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {detailedCardsLevel1.length > 0 && (
              <div className={clsx(
                'shrink-0 py-8 justify-center min-w-[240px]',
                isHorizontal ? 'flex flex-col space-y-3' : 'flex flex-row space-x-3'
              )}>
                {detailedCardsLevel1.map(node => {
                  const isSelected = selectedPathIds.includes(node.id);
                  return (
                    <div
                      key={node.id}
                      data-connector-child={node.id}
                      data-connector-parent={selectedPathIds[2]}
                      data-connector-parent-anchor={isSelected ? node.id : undefined}
                      onClick={() => handleSelect(node.id)}
                      className={clsx(
                        'h-[52px] rounded-xl border flex items-center px-3 py-1 cursor-pointer transition-all duration-300',
                        !darkMode && 'bg-white shadow-sm',
                        isSelected
                          ? 'border-teal-500 shadow-md ring-1 ring-teal-500/30'
                          : darkMode
                            ? 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:shadow-md hover:bg-zinc-900'
                            : 'border-slate-200 hover:border-slate-300 hover:shadow-md',
                        darkMode && !isSelected && 'shadow-sm shadow-black/10'
                      )}
                    >
                      <img
                        src={node.avatar}
                        alt={node.name}
                        className={clsx(
                          'w-9 h-9 rounded-full object-cover shrink-0 mr-3',
                          isSelected ? 'ring-2 ring-teal-400/60' : darkMode ? 'ring-1 ring-zinc-700' : 'ring-1 ring-slate-200'
                        )}
                      />
                      <div className="min-w-0 flex-1">
                        <p className={clsx('text-xs font-bold truncate', isSelected ? 'text-teal-700' : darkMode ? 'text-zinc-200' : 'text-slate-800')}>{node.name}</p>
                        <p className={clsx('text-[10px] truncate mt-0.5', isSelected ? 'text-teal-600/80' : darkMode ? 'text-zinc-500' : 'text-slate-400')}>{node.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {detailedCardsLevel2.length > 0 && (
              <div className={clsx(
                'shrink-0 py-8 justify-center min-w-[240px]',
                isHorizontal ? 'flex flex-col space-y-3' : 'flex flex-row space-x-3'
              )}>
                {detailedCardsLevel2.map(node => {
                  const isSelected = selectedPathIds.includes(node.id);
                  return (
                    <div
                      key={node.id}
                      data-connector-child={node.id}
                      data-connector-parent={selectedPathIds[3]}
                      data-connector-parent-anchor={isSelected ? node.id : undefined}
                      onClick={() => handleSelect(node.id)}
                      className={clsx(
                        'h-[52px] rounded-xl border flex items-center px-3 py-1 cursor-pointer transition-all duration-300',
                        !darkMode && 'bg-white shadow-sm',
                        isSelected
                          ? 'border-teal-500 shadow-md ring-1 ring-teal-500/30'
                          : darkMode
                            ? 'border-zinc-800 bg-zinc-900/60 hover:border-zinc-700 hover:shadow-md hover:bg-zinc-900'
                            : 'border-slate-200 hover:border-slate-300 hover:shadow-md',
                        darkMode && !isSelected && 'shadow-sm shadow-black/10'
                      )}
                    >
                      <img
                        src={node.avatar}
                        alt={node.name}
                        className={clsx(
                          'w-9 h-9 rounded-full object-cover shrink-0 mr-3',
                          isSelected ? 'ring-2 ring-teal-400/60' : darkMode ? 'ring-1 ring-zinc-700' : 'ring-1 ring-slate-200'
                        )}
                      />
                      <div className="min-w-0 flex-1">
                        <p className={clsx('text-xs font-bold truncate', isSelected ? 'text-teal-700' : darkMode ? 'text-zinc-200' : 'text-slate-800')}>{node.name}</p>
                        <p className={clsx('text-[10px] truncate mt-0.5', isSelected ? 'text-teal-600/80' : darkMode ? 'text-zinc-500' : 'text-slate-400')}>{node.role}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

OrgChartSidebar.displayName = 'OrgChartSidebar';

export const VerticalOrgChartSidebar = (props) => <OrgChartSidebar {...props} direction="vertical" />;
VerticalOrgChartSidebar.displayName = 'VerticalOrgChartSidebar';

export const HorizontalOrgChartSidebar = (props) => <OrgChartSidebar {...props} direction="horizontal" />;
HorizontalOrgChartSidebar.displayName = 'HorizontalOrgChartSidebar';

export default OrgChartSidebar;

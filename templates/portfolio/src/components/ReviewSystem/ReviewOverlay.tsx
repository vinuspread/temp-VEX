'use client';

import React, { useState, useEffect } from 'react';
import { useReview, Annotation } from './ReviewProvider';
import { 
  MessageSquarePlus, X, CheckCircle2, Trash2, 
  Clock, FileCode, ChevronRight, Filter,
  AlertCircle, PlayCircle, CheckCircle
} from 'lucide-react';

const cn = (...classes: (string | undefined | boolean)[]) => classes.filter(Boolean).join(' ');

export const ReviewOverlay: React.FC = () => {
  const { isReviewMode, annotations, addAnnotation, updateAnnotationStatus, removeAnnotation } = useReview();
  const [tempPin, setTempPin] = useState<{ x: number; y: number; w?: number; h?: number } | null>(null);
  const [inputText, setInputText] = useState('');
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [dragCurrent, setDragCurrent] = useState<{ x: number; y: number } | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);

  // Auto-scroll logic for VS Code linking simulation
  useEffect(() => {
    if (selectedId) {
      const el = document.getElementById(`card-${selectedId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [selectedId]);

  if (!isReviewMode) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('.review-pin') || target.closest('.review-modal') || target.closest('.review-sidebar')) return;
    
    setDragStart({ x: e.pageX, y: e.pageY });
    setDragCurrent({ x: e.pageX, y: e.pageY });
    setSelectedId(null);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragStart) {
      setDragCurrent({ x: e.pageX, y: e.pageY });
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!dragStart) return;

    const x = Math.min(dragStart.x, e.pageX);
    const y = Math.min(dragStart.y, e.pageY);
    const w = Math.abs(dragStart.x - e.pageX);
    const h = Math.abs(dragStart.y - e.pageY);

    if (w < 10 && h < 10) {
      setTempPin({ x: dragStart.x, y: dragStart.y });
    } else {
      setTempPin({ x, y, w, h });
    }

    setDragStart(null);
    setDragCurrent(null);
  };

  const handleAdd = () => {
    if (tempPin && inputText.trim()) {
      addAnnotation(tempPin.x, tempPin.y, inputText.trim(), {
        width: tempPin.w,
        height: tempPin.h,
        category: 'design',
        priority: 'medium'
      });
      setTempPin(null);
      setInputText('');
    }
  };

  const statusIcons: Record<Annotation['status'], any> = {
    pending: <Clock className="text-amber-500" size={12} />,
    'in-progress': <PlayCircle className="text-blue-500" size={12} />,
    done: <CheckCircle className="text-emerald-500" size={12} />,
    rejected: <AlertCircle className="text-rose-500" size={12} />
  };

  const statusLabels: Record<Annotation['status'], string> = {
    pending: 'Pending',
    'in-progress': 'In Progress',
    done: 'Done',
    rejected: 'Rejected'
  };

  return (
    <div 
      className="absolute top-0 left-0 w-full min-h-full z-[100000] cursor-crosshair bg-black/5 select-none font-sans"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* ── Sidebar ── */}
      <div className={cn(
        "review-sidebar fixed right-0 top-0 h-full w-[360px] bg-[#0e0e10]/95 backdrop-blur-3xl border-l border-white/10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)] z-[100010] flex flex-col transition-transform duration-500 ease-out",
        showSidebar ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <div>
            <h2 className="text-white font-black text-xl tracking-tighter flex items-center gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
              DesignReview
            </h2>
            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1">Master's Command Center</p>
          </div>
          <button onClick={() => setShowSidebar(false)} className="text-gray-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {annotations.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-4 p-8 text-center">
               <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                  <Filter size={24} />
               </div>
               <p className="text-sm">No notes registered yet..<br/>Click on the screen to leave your first instruction!</p>
            </div>
          ) : (
            annotations.map((a, idx) => (
              <div 
                key={a.id}
                id={`card-${a.id}`}
                onClick={() => setSelectedId(a.id)}
                className={cn(
                  "p-5 rounded-2xl border transition-all cursor-pointer group",
                  selectedId === a.id 
                    ? "bg-pink-500/10 border-pink-500/50 shadow-[0_10px_30px_rgba(236,72,153,0.15)]" 
                    : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20"
                )}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-pink-500 bg-pink-500/10 px-2 py-0.5 rounded-md">#{idx + 1}</span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/5 border border-white/5">
                      {statusIcons[a.status]}
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{statusLabels[a.status]}</span>
                    </div>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={(e) => { e.stopPropagation(); removeAnnotation(a.id); }}
                      className="p-1.5 rounded-lg hover:bg-rose-500/20 text-gray-500 hover:text-rose-500 transition-all"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-200 font-medium leading-relaxed mb-4">{a.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3 text-[10px] text-gray-500">
                    <span className="flex items-center gap-1"><Clock size={10} /> {new Date(a.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    {a.filePath && (
                      <span className="flex items-center gap-1 text-blue-400 font-mono"><FileCode size={10} /> {a.filePath.split('/').pop()}:{a.line}</span>
                    )}
                  </div>
                  <div className="flex gap-1">
                    {(['pending', 'in-progress', 'done'] as const).map(s => (
                      s !== a.status && (
                        <button 
                          key={s}
                          onClick={(e) => { e.stopPropagation(); updateAnnotationStatus(a.id, s); }}
                          className="w-6 h-6 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white transition-all border border-white/5"
                        >
                          {s === 'done' ? <CheckCircle2 size={10} /> : <PlayCircle size={10} />}
                        </button>
                      )
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {!showSidebar && (
        <button 
          onClick={() => setShowSidebar(true)}
          className="fixed right-0 top-1/2 -translate-y-1/2 bg-pink-500 text-white p-2 rounded-l-xl shadow-2xl z-[100011] hover:pr-4 transition-all"
        >
          <ChevronRight size={20} className="rotate-180" />
        </button>
      )}

      {/* ── Annotation Markers ── */}
      {annotations.map((a, idx) => (
        <div 
          key={a.id}
          className={cn(
            "review-pin absolute z-[100001] transition-all duration-300",
            selectedId === a.id ? "scale-110" : "hover:scale-105"
          )}
          style={{ 
            left: a.x, 
            top: a.y, 
            width: a.width || 0, 
            height: a.height || 0,
            transform: a.width ? 'none' : 'translate(-50%, -50%)'
          }}
          onClick={(e) => { e.stopPropagation(); setSelectedId(a.id); setShowSidebar(true); }}
        >
          {a.width && a.height ? (
            <div className={cn(
              "w-full h-full border-2 border-dashed rounded-xl transition-all",
              selectedId === a.id 
                ? "border-pink-500 bg-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.3)]" 
                : "border-pink-500/40 bg-pink-500/5 hover:bg-pink-500/10"
            )} />
          ) : (
            <div className={cn(
              "w-10 h-10 rounded-full border-4 border-[#0e0e10] shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all",
              selectedId === a.id 
                ? "bg-pink-500 scale-125 shadow-[0_0_30px_#ec4899]" 
                : "bg-pink-500/80 hover:bg-pink-500"
            )}>
              <span className="text-white text-xs font-black italic">{idx + 1}</span>
            </div>
          )}
        </div>
      ))}

      {/* ── Selection Rect ── */}
      {dragStart && dragCurrent && (
        <div 
          className="absolute border-2 border-dashed border-pink-500 bg-pink-500/10 pointer-events-none rounded-xl"
          style={{
            left: Math.min(dragStart.x, dragCurrent.x),
            top: Math.min(dragStart.y, dragCurrent.y),
            width: Math.abs(dragStart.x - dragCurrent.x),
            height: Math.abs(dragStart.y - dragCurrent.y),
          }}
        />
      )}

      {/* ── Input Modal ── */}
      {tempPin && (
        <div 
          className="review-modal absolute bg-[#1a1a1e] p-7 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.7)] border border-white/10 backdrop-blur-3xl min-w-[380px] z-[100003] animate-in slide-in-from-bottom-5 duration-500"
          style={{ 
            left: tempPin.w ? tempPin.x : tempPin.x + 20, 
            top: tempPin.h ? tempPin.y + tempPin.h + 20 : tempPin.y + 20 
          }}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-5">
            <div>
              <h3 className="text-white font-black text-lg tracking-tight flex items-center gap-2">
                <MessageSquarePlus size={18} className="text-pink-500" />
                New Instruction
              </h3>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Master's Insight</p>
            </div>
            <button onClick={() => setTempPin(null)} className="text-gray-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>
          <textarea 
            autoFocus
            className="w-full p-5 rounded-2xl border border-white/5 bg-white/5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all h-32 resize-none leading-relaxed"
            placeholder="마스터, 여기에 수정 지시를 남겨주세요..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div className="flex gap-2 mt-4">
            <button 
              onClick={handleAdd}
              className="flex-1 bg-pink-500 text-white py-4 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-pink-400 transition-all shadow-lg active:scale-[0.98]"
            >
              Add Command
            </button>
          </div>
        </div>
      )}

      {/* ── Global Styles ── */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.1); }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </div>
  );
};

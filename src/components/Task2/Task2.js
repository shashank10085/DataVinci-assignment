import React, { useMemo, useState, useEffect, useRef } from 'react';
import './task2.css';

const initial = [
  { id: 'fruits', label: 'Fruits', children: [
    { id: 'apple', label: 'Apple' },
    { id: 'banana', label: 'Banana' },
    { id: 'orange', label: 'Orange' }
  ]},
  { id: 'vegetables', label: 'Vegetables', children: [
    { id: 'carrot', label: 'Carrot' },
    { id: 'broccoli', label: 'Broccoli' },
    { id: 'potato', label: 'Potato' }
  ]}
];

export default function Task2(){
  const data = useMemo(()=>initial,[]);
  const [state, setState] = useState({}); // id -> boolean
  const selectAllRef = useRef(null);

  const allChildIds = data.flatMap(c => c.children.map(ch => ch.id));
  const allChecked = allChildIds.every(id => state[id]);
  const noneChecked = allChildIds.every(id => !state[id]);
  const selectAllInd = !allChecked && !noneChecked;

  useEffect(()=>{
    if(selectAllRef.current) selectAllRef.current.indeterminate = selectAllInd;
  },[selectAllInd]);

  const toggleSelectAll = (checked) => {
    const updates = {};
    data.forEach(cat => {
      updates[cat.id] = checked;
      cat.children.forEach(ch => updates[ch.id] = checked);
    });
    setState(prev => ({...prev, ...updates}));
  };

  const toggleParent = (parentId, checked) => {
    const cat = data.find(d => d.id === parentId);
    const updates = {[parentId]: checked};
    cat.children.forEach(ch => updates[ch.id] = checked);
    setState(prev => ({...prev, ...updates}));
  };

  const toggleChild = (parentId, childId, checked) => {
    setState(prev => {
      const next = {...prev, [childId]: checked};
      const cat = data.find(d => d.id === parentId);
      const childVals = cat.children.map(ch => next[ch.id] || false);
      const all = childVals.every(Boolean);
      const none = childVals.every(v => !v);
      next[parentId] = all ? true : none ? false : undefined;
      return next;
    });
  };

  return (
    <div className="nested-card">
      <h2>Nested Checkbox</h2>
      <label className="row">
        <input ref={selectAllRef} type="checkbox" checked={allChecked} onChange={(e)=>toggleSelectAll(e.target.checked)} />
        <span>Select All</span>
      </label>
      <div className="categories">
        {data.map(cat => {
          const parentRef = useRef(null);
          const childVals = cat.children.map(ch => state[ch.id] || false);
          const parentAll = childVals.every(Boolean);
          const parentNone = childVals.every(v => !v);
          const parentInd = !parentAll && !parentNone;

          useEffect(()=>{
            if(parentRef.current) parentRef.current.indeterminate = parentInd;
          },[parentInd]);

          return (
            <div className="category" key={cat.id}>
              <label className="row">
                <input ref={parentRef} type="checkbox" checked={parentAll} onChange={(e)=>toggleParent(cat.id, e.target.checked)} />
                <span>{cat.label}</span>
              </label>
              <div className="children">
                {cat.children.map(ch => (
                  <label className="row child" key={ch.id}>
                    <input type="checkbox" checked={!!state[ch.id]} onChange={(e)=>toggleChild(cat.id, ch.id, e.target.checked)} />
                    <span>{ch.label}</span>
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

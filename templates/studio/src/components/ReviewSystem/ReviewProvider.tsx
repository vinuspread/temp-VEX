'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Annotation {
  id: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  text: string;
  status: 'pending' | 'in-progress' | 'done' | 'rejected';
  category: string;
  priority: 'low' | 'medium' | 'high';
  filePath?: string;
  line?: number;
  timestamp: string;
}

interface ReviewContextType {
  isReviewMode: boolean;
  setReviewMode: (mode: boolean) => void;
  annotations: Annotation[];
  addAnnotation: (x: number, y: number, text: string, options?: { width?: number; height?: number; category?: string; priority?: 'low' | 'medium' | 'high'; filePath?: string; line?: number }) => void;
  updateAnnotationStatus: (id: string, status: Annotation['status']) => void;
  removeAnnotation: (id: string) => void;
  saveAnnotations: (updatedAnnotations?: Annotation[]) => Promise<void>;
}

const ReviewContext = createContext<ReviewContextType | undefined>(undefined);

export const ReviewProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReviewMode, setReviewMode] = useState(false);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);

  useEffect(() => {
    const fetchAnnotations = async () => {
      try {
        const res = await fetch('/api/review');
        if (res.ok) {
          const data = await res.json();
          setAnnotations(data.annotations || []);
        }
      } catch (error) {
        console.error('Failed to fetch annotations:', error);
      }
    };
    fetchAnnotations();
  }, []);

  const addAnnotation = (x: number, y: number, text: string, options?: { width?: number; height?: number; category?: string; priority?: 'low' | 'medium' | 'high'; filePath?: string; line?: number }) => {
    const newAnnotation: Annotation = {
      id: Math.random().toString(36).substr(2, 9),
      x,
      y,
      width: options?.width,
      height: options?.height,
      text,
      status: 'pending',
      category: options?.category || 'general',
      priority: options?.priority || 'medium',
      filePath: options?.filePath,
      line: options?.line,
      timestamp: new Date().toISOString(),
    };
    const newList = [...annotations, newAnnotation];
    setAnnotations(newList);
    saveAnnotations(newList);
  };

  const updateAnnotationStatus = (id: string, status: Annotation['status']) => {
    const newList = annotations.map(a => a.id === id ? { ...a, status } : a);
    setAnnotations(newList);
    saveAnnotations(newList);
  };

  const removeAnnotation = (id: string) => {
    const newList = annotations.filter((a) => a.id !== id);
    setAnnotations(newList);
    saveAnnotations(newList);
  };

  const saveAnnotations = async (updatedAnnotations?: Annotation[]) => {
    try {
      const listToSave = updatedAnnotations || annotations;
      await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ annotations: listToSave }),
      });
    } catch (error) {
      console.error('Failed to save annotations:', error);
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        isReviewMode,
        setReviewMode,
        annotations,
        addAnnotation,
        updateAnnotationStatus,
        removeAnnotation,
        saveAnnotations,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};

export const useReview = () => {
  const context = useContext(ReviewContext);
  if (!context) throw new Error('useReview must be used within a ReviewProvider');
  return context;
};

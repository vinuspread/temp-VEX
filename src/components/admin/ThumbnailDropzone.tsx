"use client";

import { useMemo, useRef, useState } from "react";

interface ThumbnailDropzoneProps {
  name: string;
  required?: boolean;
  minimumCount?: number;
}

export function ThumbnailDropzone({ name, required = false, minimumCount = 3 }: ThumbnailDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const helperText = useMemo(() => {
    if (!files.length) {
      return `이미지 파일을 드래그앤드롭하거나 클릭해서 ${minimumCount}장 이상 선택해 주세요.`;
    }
    return `${files.length}장 선택됨`;
  }, [files, minimumCount]);

  const assignFiles = (nextFiles: File[]) => {
    const imageFiles = nextFiles.filter((file) => file.type.startsWith("image/"));
    setFiles(imageFiles);

    if (inputRef.current) {
      const transfer = new DataTransfer();
      imageFiles.forEach((file) => transfer.items.add(file));
      inputRef.current.files = transfer.files;
    }
  };

  return (
    <div className="space-y-3">
      <input
        ref={inputRef}
        name={name}
        type="file"
        accept="image/*"
        multiple
        required={required}
        className="hidden"
        onChange={(event) => assignFiles(Array.from(event.target.files ?? []))}
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(event) => {
          event.preventDefault();
          setIsDragging(false);
        }}
        onDrop={(event) => {
          event.preventDefault();
          setIsDragging(false);
          assignFiles(Array.from(event.dataTransfer.files ?? []));
        }}
        className={`w-full rounded-lg border border-dashed px-4 py-8 text-left transition ${
          isDragging
            ? "border-emerald-500 bg-emerald-950/30 text-emerald-200"
            : "border-zinc-700 bg-zinc-950 text-zinc-300 hover:border-zinc-500"
        }`}
      >
        <p className="text-sm font-medium">썸네일 이미지 업로드</p>
        <p className="mt-1 text-xs opacity-90">{helperText}</p>
      </button>

      {files.length ? (
        <ul className="space-y-1 text-xs text-zinc-400">
          {files.map((file) => (
            <li key={`${file.name}-${file.lastModified}`}>{file.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

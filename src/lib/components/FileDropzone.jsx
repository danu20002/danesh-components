import { useState, useRef, useCallback } from 'react';
import { clsx } from 'clsx';
import { Upload, File, X, Image, FileText, FileSpreadsheet, FileArchive, FileCode, AlertCircle } from 'daneshicons';

const FILE_ICONS = {
  image: Image,
  pdf: FileText,
  spreadsheet: FileSpreadsheet,
  archive: FileArchive,
  code: FileCode,
  default: File,
};

const getFileType = (mime) => {
  if (mime.startsWith('image/')) return 'image';
  if (mime.includes('pdf')) return 'pdf';
  if (mime.includes('spreadsheet') || mime.includes('excel') || mime.includes('csv')) return 'spreadsheet';
  if (mime.includes('zip') || mime.includes('rar') || mime.includes('tar') || mime.includes('gz')) return 'archive';
  if (mime.includes('javascript') || mime.includes('json') || mime.includes('html') || mime.includes('css') || mime.includes('xml')) return 'code';
  return 'default';
};

const formatSize = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const FileDropzone = ({
  label,
  error,
  hint,
  value = [],
  onChange,
  accept,
  maxSize = 5 * 1024 * 1024,
  maxFiles = 5,
  multiple = true,
  disabled = false,
  size = 'md',
  className = '',
  showPreview = true,
  ...props
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [fileErrors, setFileErrors] = useState([]);
  const inputRef = useRef(null);

  const processFiles = useCallback((files) => {
    const fileArray = Array.from(files);
    const errors = [];
    const valid = [];

    for (const file of fileArray) {
      if (maxSize && file.size > maxSize) {
        errors.push(`"${file.name}" exceeds ${formatSize(maxSize)} limit`);
      } else if (valid.length + value.length < maxFiles) {
        valid.push(file);
      } else {
        errors.push(`Max ${maxFiles} files allowed`);
        break;
      }
    }

    setFileErrors(errors);
    if (valid.length > 0) {
      const newFiles = multiple ? [...value, ...valid] : valid.slice(0, 1);
      onChange?.(newFiles);
    }
  }, [value, maxFiles, maxSize, multiple, onChange]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (disabled) return;
    processFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleClick = () => {
    if (!disabled) inputRef.current?.click();
  };

  const handleFileInput = (e) => {
    if (e.target.files.length > 0) {
      processFiles(e.target.files);
    }
    e.target.value = '';
  };

  const removeFile = (idx) => {
    const newFiles = value.filter((_, i) => i !== idx);
    onChange?.(newFiles);
  };

  const sizes = {
    sm: { dropzone: 'p-6 min-h-[120px]', text: 'text-xs', icon: 20 },
    md: { dropzone: 'p-8 min-h-[160px]', text: 'text-sm', icon: 28 },
    lg: { dropzone: 'p-10 min-h-[200px]', text: 'text-base', icon: 36 },
  };
  const s = sizes[size];

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-xs font-semibold theme-text-secondary ml-1 flex items-center gap-1">
          {label}
          {props.required && <span className="text-red-500">*</span>}
          {maxFiles > 1 && <span className="theme-text-tertiary font-normal">({value.length}/{maxFiles})</span>}
        </label>
      )}

      <div
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={clsx(
          s.dropzone,
          'relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer',
          dragOver
            ? 'border-[#E31B23] bg-red-50/50 dark:bg-red-950/20 scale-[1.02]'
            : 'theme-border hover:border-slate-400 dark:hover:border-slate-500 hover:bg-red-50/20 dark:hover:bg-red-950/10',
          error ? '!border-red-400 !bg-red-50/50 dark:!bg-red-950/20' : '',
          disabled ? 'opacity-50 cursor-not-allowed' : '',
          className
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
          disabled={disabled}
          className="hidden"
          {...props}
        />

        {value.length > 0 && showPreview ? (
          <div className="w-full space-y-2">
            {value.map((file, idx) => {
              const FileIcon = FILE_ICONS[getFileType(file.type)] || FILE_ICONS.default;
              const isImage = file.type.startsWith('image/');
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl theme-bg border theme-border-secondary group transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  {isImage ? (
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 theme-bg-tertiary">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/30 flex items-center justify-center shrink-0">
                      <FileIcon size={18} className="text-[#E31B23]" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium theme-text truncate">{file.name}</p>
                    <p className="text-[11px] theme-text-tertiary">{formatSize(file.size)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(idx)}
                    className="p-1.5 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-50 dark:hover:bg-red-950/30 theme-text-tertiary hover:text-red-500 transition-all cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                </div>
              );
            })}
            {value.length < maxFiles && (
              <div className="flex items-center justify-center gap-2 pt-2 theme-text-tertiary">
                <Upload size={14} />
                <span className={clsx(s.text)}>Drop more files here</span>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className={clsx(
              'p-4 rounded-2xl mb-3 transition-all',
              dragOver ? 'bg-[#E31B23]/10 scale-110' : 'theme-bg-tertiary'
            )}>
              <Upload
                size={s.icon}
                className={dragOver ? 'text-[#E31B23]' : 'theme-text-tertiary'}
              />
            </div>
            <p className={clsx(s.text, 'font-medium theme-text-secondary')}>
              <span className="text-[#E31B23] font-bold">Click to upload</span> or drag and drop
            </p>
            {accept && (
              <p className="text-[11px] theme-text-tertiary mt-1">
                {accept.split(',').map(a => a.trim()).join(', ')}
              </p>
            )}
            <p className="text-[11px] theme-text-tertiary">
              Max {formatSize(maxSize)} per file{maxFiles > 1 ? ` · up to ${maxFiles} files` : ''}
            </p>
          </>
        )}
      </div>

      {fileErrors.length > 0 && (
        <div className="space-y-1">
          {fileErrors.map((err, i) => (
            <p key={i} className="text-[11px] text-red-500 font-medium ml-1 flex items-center gap-1">
              <AlertCircle size={11} /> {err}
            </p>
          ))}
        </div>
      )}

      {error && <p className="text-[11px] text-red-500 font-medium ml-1">{error}</p>}
      {hint && !error && !fileErrors.length && <p className="text-[11px] theme-text-tertiary ml-1">{hint}</p>}
    </div>
  );
};

export default FileDropzone;

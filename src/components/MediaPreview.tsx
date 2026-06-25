"use client";

import { useState } from "react";
import type { AssetType } from "@/utils/projects";

interface MediaPreviewProps {
  src: string;
  name: string;
  type: AssetType;
}

const DownloadIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const CopyIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const FileIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

function Thumbnail({ src, name, type }: MediaPreviewProps) {
  if (type === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        className="w-full h-full object-cover object-center block"
      />
    );
  }

  if (type === "video") {
    return (
      <>
        <video
          src={`${src}#t=0.001`}
          className="w-full h-full object-cover object-center block"
          muted
          preload="metadata"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white pl-1">
            <PlayIcon />
          </div>
        </div>
      </>
    );
  }

  if (type === "pdf") {
    return (
      <div className="w-full h-full text-muted flex flex-col justify-end px-6 py-6">
        <div className="flex flex-col items-start justify-center gap-2">
          <FileIcon />
          <span className="text-sm font-jetbrains-mono text-center line-clamp-2 break-all">
            {name}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center text-muted text-xs px-2 text-center break-all">
      {name}
    </div>
  );
}

const btnClass =
  "w-8 h-8 bg-muted-15 border border-faint rounded-lg flex items-center justify-center hover:border-accent transition-colors duration-150 text-primary";

export default function MediaPreview({ src, name, type }: MediaPreviewProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = src;
    a.download = name;
    a.click();
  };

  const handleShare = async () => {
    const url = window.location.origin + src;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-[180px] h-[180px] rounded-xl overflow-hidden border border-faint flex-shrink-0 relative group cursor-pointer bg-muted-5"
      >
        <Thumbnail src={src} name={name} type={type} />
        {type !== "other" && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-150 flex items-end justify-center pb-4">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-black/50 px-3 py-1 rounded-full">
              자세히 보기
            </span>
          </div>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative flex flex-col items-end gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 툴바 */}
            <div className="flex flex-row gap-2">
              <button
                onClick={handleShare}
                className={btnClass}
                title={copied ? "복사됨" : "링크 복사"}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
              <button
                onClick={handleDownload}
                className={btnClass}
                title="다운로드"
              >
                <DownloadIcon />
              </button>
              <button
                onClick={() => setOpen(false)}
                className={btnClass}
                title="닫기"
              >
                <CloseIcon />
              </button>
            </div>

            {/* 콘텐츠 */}
            {type === "image" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={name}
                className="max-w-[90vw] max-h-[80vh] rounded-2xl border border-faint object-contain block"
              />
            )}
            {type === "video" && (
              <video
                src={src}
                controls
                autoPlay
                className="max-w-[90vw] max-h-[80vh] rounded-2xl border border-faint"
              />
            )}
            {type === "pdf" && (
              <iframe
                src={src}
                title={name}
                className="w-[80vw] h-[80vh] rounded-2xl border border-faint bg-white"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

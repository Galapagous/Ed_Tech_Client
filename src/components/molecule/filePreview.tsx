// src/components/molecule/filePreview.tsx  (or PdfViewer.tsx)

import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

interface PdfViewerProps {
  fileUrl: string;
  pdfHeight?: string;
}

export default function PdfViewer({ fileUrl, pdfHeight = '80vh' }: PdfViewerProps) {
  if (!fileUrl) return <div className="text-center py-10">No PDF to display</div>;

  return (
    <div style={{ height: pdfHeight, width: '100%' }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@4.4.0/build/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} />
      </Worker>
    </div>
  );
}

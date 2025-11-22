import { useState } from 'react';
import { AiFillFilePdf } from 'react-icons/ai';
import { BiDownload } from 'react-icons/bi';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';

const DocPreview = ({ doc }: { doc: any }) => {
  const [deletingDoc, setDeletingDoc] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewMethod, setViewMethod] = useState<'google' | 'direct'>('google');

  const handleDeleteDocument = (docId: string) => {
    alert(`doc ${docId} request deletion`);
  };

  const handlePreviewDocument = () => {
    setShowPreview(true);
    setLoading(true);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = doc.url;
    link.download = doc.name || 'document.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFileName = () => {
    if (doc.name) return doc.name;
    try {
      const urlParts = doc.url.split('/');
      const filename = urlParts[urlParts.length - 1];
      return filename.replace('.pdf', '') || 'Document';
    } catch {
      return 'Document';
    }
  };

  const getGoogleViewerUrl = () => {
    return `https://docs.google.com/viewer?url=${encodeURIComponent(doc.url)}&embedded=true`;
  };

  const getPdfJsViewerUrl = () => {
    return `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(doc.url)}`;
  };

  return (
    <>
      <div
        className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 hover:bg-white/15 transition-all duration-200 ${
          deletingDoc === doc.id ? 'opacity-50 scale-95' : ''
        }`}
      >
        <div className="flex justify-center mb-4">
          <div className="bg-red-500/20 p-4 rounded-lg">
            <AiFillFilePdf size={48} className="text-red-400" />
          </div>
        </div>

        <h3 className="text-center font-medium text-white mb-4 truncate px-2" title={getFileName()}>
          {getFileName()}
        </h3>

        <div className="flex gap-2">
          <button
            onClick={handlePreviewDocument}
            className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 py-2 px-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
            title="Preview PDF"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>Preview</span>
          </button>
          <button
            onClick={handleDownload}
            className="bg-green-500/20 hover:bg-green-500/30 text-green-300 py-2 px-3 rounded-md transition-colors duration-200"
            title="Download PDF"
          >
            <BiDownload size={16} />
          </button>
          <button
            onClick={() => handleDeleteDocument(doc.id)}
            disabled={deletingDoc === doc.id}
            className="bg-red-500/20 hover:bg-red-500/30 text-red-300 py-2 px-3 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            title="Delete PDF"
          >
            <RiDeleteBin6Fill size={16} />
          </button>
        </div>
      </div>

      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gray-900 rounded-lg w-full max-w-6xl h-[90vh] flex flex-col shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h2 className="text-white font-semibold text-lg truncate flex-1 mr-4">
                {getFileName()}
              </h2>
              <div className="flex gap-2">
                <div className="flex bg-gray-800 rounded-md p-1 mr-2">
                  <button
                    onClick={() => {
                      setViewMethod('google');
                      setLoading(true);
                    }}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      viewMethod === 'google'
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Google
                  </button>
                  <button
                    onClick={() => {
                      setViewMethod('direct');
                      setLoading(true);
                    }}
                    className={`px-3 py-1 rounded text-sm transition-colors ${
                      viewMethod === 'direct'
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Direct
                  </button>
                </div>

                <button
                  onClick={handleDownload}
                  className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 py-2 px-4 rounded-md transition-colors duration-200 flex items-center gap-2"
                >
                  <BiDownload size={18} />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => {
                    setShowPreview(false);
                    setLoading(false);
                  }}
                  className="bg-red-500/20 hover:bg-red-500/30 text-red-300 p-2 rounded-md transition-colors duration-200"
                  title="Close"
                >
                  <IoClose size={24} />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden relative bg-gray-800">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 z-10">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading PDF...</p>
                    <p className="text-gray-500 text-sm mt-2">
                      Using {viewMethod === 'google' ? 'Google Viewer' : 'Direct View'}
                    </p>
                  </div>
                </div>
              )}

              {viewMethod === 'google' ? (
                <iframe
                  key="google-viewer"
                  src={getGoogleViewerUrl()}
                  className="w-full h-full"
                  title="PDF Preview - Google Viewer"
                  frameBorder="0"
                  onLoad={() => {
                    setLoading(false);
                  }}
                  onError={() => {
                    setLoading(false);
                    console.error('Google Viewer failed to load');
                  }}
                />
              ) : (
                <iframe
                  key="direct-viewer"
                  src={doc.url}
                  className="w-full h-full"
                  title="PDF Preview - Direct"
                  frameBorder="0"
                  onLoad={() => {
                    setLoading(false);
                  }}
                  onError={() => {
                    setLoading(false);
                    console.error('Direct viewer failed to load');
                  }}
                />
              )}
            </div>

            <div className="p-3 border-t border-gray-700 bg-gray-800/50 flex items-center justify-between">
              <p className="text-gray-400 text-sm">
                PDF not displaying correctly?{' '}
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Open in new tab
                </a>
                {' or '}
                <a
                  href={getPdfJsViewerUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  use PDF.js viewer
                </a>
              </p>
              <p className="text-gray-500 text-xs">Try switching viewers above</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DocPreview;

import { useState } from 'react';
import { AiFillFilePdf } from 'react-icons/ai';
import { BiDownload } from 'react-icons/bi';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const DocPreview = ({ doc, setDocuments }: any) => {
  const [deletingDoc, setDeletingDoc] = useState<string | null>(null);
  const handleDeleteDocument = (docName: string) => {
    setDeletingDoc(docName);
    // Simulate delete action - replace with actual API call
    setTimeout(() => {
      setDocuments((prev: any) => prev.filter((doc: any) => doc !== docName));
      setDeletingDoc(null);
    }, 300);
  };

  const handlePreviewDocument = (docName: string) => {
    // Implement PDF preview logic here
    console.log('Preview:', docName);
    // You can open in new tab, modal, or inline viewer
  };

  return (
    <div
      className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-5 hover:bg-white/15 transition-all duration-200 ${
        deletingDoc === doc ? 'opacity-50 scale-95' : ''
      }`}
    >
      {/* PDF Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-red-500/20 p-4 rounded-lg">
          <AiFillFilePdf size={48} className="text-red-400" />
        </div>
      </div>

      {/* Document Name */}
      <h3 className="text-center font-medium text-white mb-4 truncate px-2" title={doc}>
        {doc}
      </h3>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => handlePreviewDocument(doc)}
          className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 py-2 px-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium"
          title="Preview PDF"
        >
          <BiDownload size={16} />
          <span>Preview</span>
        </button>
        <button
          onClick={() => handleDeleteDocument(doc)}
          disabled={deletingDoc === doc}
          className="bg-red-500/20 hover:bg-red-500/30 text-red-300 py-2 px-3 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Delete PDF"
        >
          <RiDeleteBin6Fill size={16} />
        </button>
      </div>
    </div>
  );
};

export default DocPreview;

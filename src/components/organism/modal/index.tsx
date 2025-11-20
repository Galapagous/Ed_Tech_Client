// import { div } from 'framer-motion/client';
// import type { ReactNode } from 'react';
// import { BiX } from 'react-icons/bi';

// export enum ModalWidth {
//   SMALL = '100px',
//   MEDIUM = '200px',
//   LARGE = '300px',
// }

// interface IModal {
//   width: ModalWidth;
//   children: ReactNode;
//   close: () => void;
//   showModal: boolean;
// }

// const Modal = ({ width, children, close, showModal }: IModal) => {
//   return (
//     <div
//       className={`${showModal ? 'visible' : 'hidden'} absolute w-screen h-screen top-0 left-0 bg-black flex items-center justify-center flex-col text-white z-30 opacity-45`}
//     >
//       <div
//         style={{ width: width }}
//         className={`${showModal ? 'visible' : 'hidden'} relative z-40 bg-white px-10 py-5 text-black`}
//       >
//         <button className="absolute top-3 right-3 text-red-500" onClick={close}>
//           <BiX />
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;

import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';
import { BiX } from 'react-icons/bi';

export enum ModalWidth {
  SMALL = '400px',
  MEDIUM = '600px',
  LARGE = '800px',
}

interface IModal {
  width: ModalWidth;
  children: ReactNode;
  close: () => void;
  showModal: boolean;
  title?: string;
}

const Modal = ({ width, children, close, showModal, title }: IModal) => {
  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={close}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              style={{ width: width, maxWidth: '90vw' }}
              className="relative bg-inherit rounded-lg shadow-2xl max-h-[90vh] overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              {title && (
                <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-200">{title}</h2>
                  <button
                    className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                    onClick={close}
                    aria-label="Close modal"
                  >
                    <BiX size={24} />
                  </button>
                </div>
              )}

              {/* Close button when no title */}
              {!title && (
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100 z-10"
                  onClick={close}
                  aria-label="Close modal"
                >
                  <BiX size={24} />
                </button>
              )}

              {/* Body */}
              <div className="px-6 py-5 overflow-y-auto max-h-[calc(90vh-100px)] text-gray-900">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;

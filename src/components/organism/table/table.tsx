import { useState } from 'react';
import { CgMoreVertical } from 'react-icons/cg';

interface IAction {
  label: string;
  action: () => void;
}

interface ITableProps {
  tableHead: string[];
  tableData: any[];
  showAction?: boolean;
  actionMenu?: IAction[];
  handleCurrent?: (data: any) => void;
}

const Table = ({ tableHead, tableData, showAction, actionMenu, handleCurrent }: ITableProps) => {
  const [activeSelection, setActiveSelection] = useState<number | null>(null);
  const handleMenuClick = (index: number, id: string) => {
    setActiveSelection(prev => (prev !== null ? null : index));
    if (handleCurrent) handleCurrent(id as any);
  };
  return (
    <div className="overflow-x-auto shadow-sm bg-transparent text-white">
      <table className="min-w-full text-sm text-left text-gray-600 bg-transparent">
        <thead className="bg-transparent text-gray-400 uppercase text-xs font-semibold tracking-wider">
          <tr>
            {tableHead?.map(head => (
              <th key={head} className="px-6 py-4 border-b border-gray-200">
                {head}
              </th>
            ))}
            {showAction && <td className="px-6 py-4 border-b border-gray-200">Action</td>}
          </tr>
        </thead>

        <tbody>
          {tableData?.map((data: any, index: number) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? 'bg-transparent' : 'bg-primary_300'
              } hover:bg-indigo-50 hover:text-gray-950 transition-colors duration-200 text-white relative`}
            >
              {tableHead?.map((head: string) => (
                <td key={head} className="px-6 py-4 border-b border-gray-100 capitalize">
                  {data[head.toLowerCase() as keyof typeof data]}
                </td>
              ))}
              {showAction && (
                <td className="px-6 py-4 border-b border-gray-100 capitalize">
                  <CgMoreVertical
                    className="cursor-pointer"
                    onClick={() => handleMenuClick(index, data?.id)}
                  />
                  {activeSelection === index && (
                    <div className="absolute top-2 right-0 bg-white text-black flex flex-col items-start px-4 py-2 rounded-sm gap-2 h-fit font-semibold z-50">
                      {actionMenu?.map(({ label, action }) => (
                        <button className="" onClick={action}>
                          {label}
                        </button>
                      ))}
                    </div>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// === v2 ===
// import { useState, useRef, useEffect } from 'react';
// import { CgMoreVertical } from 'react-icons/cg';
// import { HiDotsVertical } from 'react-icons/hi';

// interface IAction {
//   label: string;
//   action: (data?: any) => void;
//   icon?: React.ReactNode;
//   variant?: 'default' | 'danger';
// }

// export enum ITheme {
//   LIGHT = 'light',
//   DARK = 'dark',
// }

// interface ITableProps {
//   tableHead: string[];
//   tableData: any[];
//   showAction?: boolean;
//   actionMenu?: IAction[];
//   emptyMessage?: string;
//   striped?: boolean;
//   hoverable?: boolean;
//   theme?: ITheme;
// }

// const Table = ({
//   tableHead,
//   tableData,
//   showAction,
//   actionMenu,
//   emptyMessage = 'No data available',
//   striped = true,
//   hoverable = true,
//   theme = ITheme.LIGHT,
// }: ITableProps) => {
//   const [activeSelection, setActiveSelection] = useState<number | null>(null);
//   const menuRef = useRef<HTMLDivElement>(null);

//   const isDark = theme === ITheme.DARK;

//   const handleMenuClick = (index: number) => {
//     setActiveSelection(prev => (prev === index ? null : index));
//   };

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setActiveSelection(null);
//       }
//     };

//     if (activeSelection !== null) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [activeSelection]);

//   return (
//     <div
//       className={`w-full overflow-hidden rounded-xl border shadow-lg ${
//         isDark
//           ? 'border-gray-700/50 bg-gray-900/50 backdrop-blur-sm'
//           : 'border-gray-200/50 bg-white/50 backdrop-blur-sm'
//       }`}
//     >
//       <div className="overflow-x-auto">
//         <table className="min-w-full text-sm">
//           <thead
//             className={`border-b ${
//               isDark
//                 ? 'bg-gradient-to-r from-gray-800 to-gray-800/80 border-gray-700'
//                 : 'bg-gradient-to-r from-gray-50 to-gray-100/80 border-gray-200'
//             }`}
//           >
//             <tr>
//               {tableHead?.map((head, idx) => (
//                 <th
//                   key={head}
//                   className={`px-6 py-4 text-left text-xs font-bold uppercase tracking-wider ${
//                     isDark ? 'text-gray-300' : 'text-gray-700'
//                   } ${idx === 0 ? 'rounded-tl-xl' : ''}`}
//                 >
//                   {head}
//                 </th>
//               ))}
//               {showAction && (
//                 <th
//                   className={`px-6 py-4 text-center text-xs font-bold uppercase tracking-wider rounded-tr-xl ${
//                     isDark ? 'text-gray-300' : 'text-gray-700'
//                   }`}
//                 >
//                   Actions
//                 </th>
//               )}
//             </tr>
//           </thead>

//           <tbody className={`divide-y ${isDark ? 'divide-gray-700/50' : 'divide-gray-100'}`}>
//             {tableData?.length === 0 ? (
//               <tr>
//                 <td
//                   colSpan={tableHead.length + (showAction ? 1 : 0)}
//                   className="px-6 py-12 text-center"
//                 >
//                   <div className="flex flex-col items-center justify-center">
//                     <svg
//                       className={`w-16 h-16 mb-4 ${isDark ? 'text-gray-600' : 'text-gray-300'}`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={1.5}
//                         d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
//                       />
//                     </svg>
//                     <p className={`font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
//                       {emptyMessage}
//                     </p>
//                   </div>
//                 </td>
//               </tr>
//             ) : (
//               tableData?.map((data: any, index: number) => (
//                 <tr
//                   key={index}
//                   className={`
//                     ${
//                       striped && index % 2 === 0
//                         ? isDark
//                           ? 'bg-gray-900/30'
//                           : 'bg-white'
//                         : isDark
//                           ? 'bg-gray-800/30'
//                           : 'bg-gray-50/30'
//                     }
//                     ${
//                       hoverable
//                         ? isDark
//                           ? 'hover:bg-gray-700/50 hover:shadow-md'
//                           : 'hover:bg-blue-50/50 hover:shadow-sm'
//                         : ''
//                     }
//                     transition-all duration-200 group
//                   `}
//                 >
//                   {tableHead?.map((head: string, cellIdx: number) => (
//                     <td
//                       key={head}
//                       className={`px-6 py-4 font-medium ${
//                         cellIdx === 0
//                           ? isDark
//                             ? 'font-semibold text-gray-100'
//                             : 'font-semibold text-gray-900'
//                           : isDark
//                             ? 'text-gray-300'
//                             : 'text-gray-800'
//                       }`}
//                     >
//                       <div className="flex items-center">
//                         <span className="capitalize">
//                           {data[head.toLowerCase() as keyof typeof data] || '-'}
//                         </span>
//                       </div>
//                     </td>
//                   ))}

//                   {showAction && (
//                     <td className="px-6 py-4 text-center relative">
//                       <button
//                         onClick={() => handleMenuClick(index)}
//                         className={`inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
//                           isDark
//                             ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700 focus:ring-blue-500'
//                             : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:ring-blue-500'
//                         }`}
//                         aria-label="Actions menu"
//                       >
//                         <HiDotsVertical className="w-5 h-5" />
//                       </button>

//                       {activeSelection === index && (
//                         <div
//                           ref={menuRef}
//                           className={`absolute right-8 top-12 rounded-lg shadow-xl border py-2 min-w-[180px] z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${
//                             isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
//                           }`}
//                         >
//                           {actionMenu?.map(({ label, action, icon, variant = 'default' }, idx) => (
//                             <button
//                               key={idx}
//                               onClick={e => {
//                                 e.stopPropagation();
//                                 action(data);
//                                 setActiveSelection(null);
//                               }}
//                               className={`
//                                 w-full px-4 py-2.5 text-left text-sm font-medium flex items-center gap-3 transition-colors duration-150
//                                 ${
//                                   variant === 'danger'
//                                     ? 'text-red-500 hover:bg-red-500/10'
//                                     : isDark
//                                       ? 'text-gray-200 hover:bg-gray-700'
//                                       : 'text-gray-700 hover:bg-gray-50'
//                                 }
//                                 ${idx === 0 ? 'rounded-t-lg' : ''}
//                                 ${idx === actionMenu.length - 1 ? 'rounded-b-lg' : ''}
//                               `}
//                             >
//                               {icon && <span className="flex-shrink-0">{icon}</span>}
//                               <span>{label}</span>
//                             </button>
//                           ))}
//                         </div>
//                       )}
//                     </td>
//                   )}
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Optional: Footer with row count */}
//       {tableData?.length > 0 && (
//         <div
//           className={`border-t px-6 py-3 ${
//             isDark ? 'bg-gray-800/30 border-gray-700' : 'bg-gray-50/50 border-gray-200'
//           }`}
//         >
//           <p className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
//             Showing{' '}
//             <span className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
//               {tableData.length}
//             </span>{' '}
//             {tableData.length === 1 ? 'entry' : 'entries'}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Table;

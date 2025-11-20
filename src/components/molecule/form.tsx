// import { useForm } from 'react-hook-form';
// import Button, { IButtonType } from '../atom/button/button';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useRef, useState } from 'react';
// import { BsEye, BsEyeSlash } from 'react-icons/bs';
// import { FaUpLong } from 'react-icons/fa6';

// export enum IelementType {
//   TEXT = 'text',
//   SELECT = 'select',
//   PASSWORD = 'password',
//   FILE = 'file',
//   TEXTAREA = 'textarea',
// }

// export enum ITheme {
//   LIGHT = 'light',
//   DARK = 'dark',
// }

// interface IFormElement {
//   type: IelementType;
//   label?: string;
//   options?: { text: string; value: string }[];
//   placeholder?: string;
//   name: string;
//   border?: boolean;
//   theme?: ITheme;
// }

// interface IFormProps {
//   showSubmit?: boolean;
//   elements: IFormElement[];
//   onSubmit?: (data: any) => void;
//   schema?: any;
//   loading?: boolean;
// }

// const Form = ({ elements, schema, onSubmit, loading }: IFormProps) => {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     watch,
//     trigger,
//   } = useForm({ resolver: schema ? yupResolver(schema) : undefined });
//   const fileRef: any = useRef(null);
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const handleTogglePassword = () => {
//     setShowPassword((prev: boolean) => !prev);
//   };
//   return (
//     <form className="mx-auto" onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}>
//       {elements?.map(({ label, type, options, placeholder, name, border, theme }, index) => {
//         return (
//           <div key={index} className="w-full mb-3">
//             {label ? <label>{label}</label> : null}
//             {type === IelementType.TEXT && (
//               <input
//                 className={`${theme === ITheme.DARK ? 'bg-neutral-900 text-neutral-200' : 'bg-neutral-200 text-neutral-900'} font-semibold p-2 px-4 py-4 outline-none w-full ${border ? 'border-[1px]' : null}`}
//                 placeholder={placeholder}
//                 {...register(name)}
//                 onBlur={() => trigger(name)}
//               />
//             )}
//             {type === IelementType.PASSWORD && (
//               <div className="text-neutral-900 font-semibold p-2 px-4 py-4 outline-none w-full bg-white flex items-center gap-1">
//                 <input
//                   className="w-full h-full outline-none border-none bg-white"
//                   placeholder={placeholder}
//                   {...register(name)}
//                   onBlur={() => trigger(name)}
//                   type={showPassword ? 'text' : 'password'}
//                 />
//                 {showPassword ? (
//                   <BsEyeSlash className="cursor-pointer" onClick={handleTogglePassword} />
//                 ) : (
//                   <BsEye className="cursor-pointer" onClick={handleTogglePassword} />
//                 )}
//               </div>
//             )}
//             {type === IelementType.SELECT && (
//               <select {...register(name)} onChange={() => trigger(name)}>
//                 {options?.map((option, i) => (
//                   <option key={i} value={option.value}>
//                     {option.text}
//                   </option>
//                 ))}
//               </select>
//             )}
//             {type === IelementType.FILE && (
//               <div
//                 className={`${theme === ITheme.DARK ? 'bg-neutral-900 text-neutral-200' : 'bg-neutral-200 text-neutral-900'} font-semibold p-2 px-4 py-4 outline-none`}
//               >
//                 <div
//                   className={`p-14 ${theme === ITheme.DARK ? 'border-neutral-200' : 'border-neutral-900'} border-[1px] rounded-full w-fit mx-auto cursor-pointer hover:opacity-80 transition-opacity`}
//                   onClick={() => fileRef?.current?.click()}
//                 >
//                   <FaUpLong className="cursor-pointer" />
//                 </div>

//                 <h3 className="text-center mt-3">{watch(name)?.[0]?.name || 'Upload file'}</h3>

//                 <input
//                   className="hidden"
//                   type="file"
//                   {...register(name)}
//                   ref={e => {
//                     register(name).ref(e);
//                     fileRef.current = e;
//                   }}
//                   onChange={e => {
//                     register(name).onChange(e);
//                     trigger(name);
//                   }}
//                 />
//               </div>
//             )}
//             {type === IelementType.TEXTAREA && (
//               <textarea
//                 className="text-neutral-900 font-semibold p-2 px-4 py-4 outline-none w-full"
//                 placeholder={placeholder}
//                 {...register(name)}
//                 onBlur={() => trigger(name)}
//               />
//             )}
//             <p className="text-red-400 sm:text-sm text-xs text-start">
//               {errors[name]?.message as string}
//             </p>
//           </div>
//         );
//       })}
//       {onSubmit && (
//         <div className="w-full flex justify-center mt-2">
//           <Button loading={loading} shadow={false} text="Submit" type={IButtonType.SECONDARY} />
//         </div>
//       )}
//     </form>
//   );
// };

// export default Form;

// == v2 ==

import { useForm } from 'react-hook-form';
import Button, { IButtonType } from '../atom/button/button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { FaUpLong } from 'react-icons/fa6';

export enum IelementType {
  TEXT = 'text',
  SELECT = 'select',
  PASSWORD = 'password',
  FILE = 'file',
  TEXTAREA = 'textarea',
}

export enum ITheme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface IFormElement {
  type: IelementType;
  label?: string;
  options?: { text: string; value: string }[];
  placeholder?: string;
  name: string;
  border?: boolean;
  theme?: ITheme;
}

interface IFormProps {
  showSubmit?: boolean;
  elements: IFormElement[];
  onSubmit?: (data: any) => void;
  schema?: any;
  loading?: boolean;
}

const Form = ({ elements, schema, onSubmit, loading }: IFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    trigger,
  } = useForm({ resolver: schema ? yupResolver(schema) : undefined });
  const fileRef: any = useRef(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleTogglePassword = () => {
    setShowPassword((prev: boolean) => !prev);
  };

  return (
    <form className="mx-auto" onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}>
      {elements?.map(({ label, type, options, placeholder, name, border, theme }, index) => {
        const isDark = theme === ITheme.DARK;
        const isFocused = focusedField === name;
        const hasError = !!errors[name];

        return (
          <div key={index} className="w-full mb-5">
            {label && (
              <label
                className={`block mb-2 text-sm font-medium transition-colors ${
                  isDark ? 'text-neutral-300' : 'text-neutral-700'
                } ${isFocused ? (isDark ? 'text-blue-400' : 'text-blue-600') : ''} ${
                  hasError ? 'text-red-500' : ''
                }`}
              >
                {label}
              </label>
            )}

            {type === IelementType.TEXT && (
              <input
                className={`${
                  isDark
                    ? 'bg-neutral-900/50 text-neutral-200 border-neutral-700'
                    : 'bg-white text-neutral-900 border-neutral-300'
                } font-medium px-4 py-3 outline-none w-full rounded-lg border-2 transition-all duration-200 ${
                  isFocused
                    ? isDark
                      ? 'border-blue-500 ring-2 ring-blue-500/20'
                      : 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'hover:border-neutral-400'
                } ${hasError ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
                placeholder={placeholder}
                {...register(name)}
                onFocus={() => setFocusedField(name)}
                onBlur={() => {
                  setFocusedField(null);
                  trigger(name);
                }}
              />
            )}

            {type === IelementType.PASSWORD && (
              <div
                className={`${
                  isDark ? 'bg-neutral-900/50 border-neutral-700' : 'bg-white border-neutral-300'
                } font-medium px-4 py-3 outline-none w-full rounded-lg border-2 flex items-center gap-2 transition-all duration-200 ${
                  isFocused
                    ? isDark
                      ? 'border-blue-500 ring-2 ring-blue-500/20'
                      : 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'hover:border-neutral-400'
                } ${hasError ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              >
                <input
                  className={`w-full h-full outline-none border-none ${
                    isDark ? 'bg-transparent text-neutral-200' : 'bg-transparent text-neutral-900'
                  }`}
                  placeholder={placeholder}
                  {...register(name)}
                  onFocus={() => setFocusedField(name)}
                  onBlur={() => {
                    setFocusedField(null);
                    trigger(name);
                  }}
                  type={showPassword ? 'text' : 'password'}
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className={`transition-colors ${
                    isDark
                      ? 'text-neutral-400 hover:text-neutral-200'
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  {showPassword ? (
                    <BsEyeSlash className="w-5 h-5" />
                  ) : (
                    <BsEye className="w-5 h-5" />
                  )}
                </button>
              </div>
            )}

            {type === IelementType.SELECT && (
              <select
                className={`${
                  isDark
                    ? 'bg-neutral-900/50 text-neutral-200 border-neutral-700'
                    : 'bg-white text-neutral-900 border-neutral-300'
                } font-medium px-4 py-3 outline-none w-full rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                  isFocused
                    ? isDark
                      ? 'border-blue-500 ring-2 ring-blue-500/20'
                      : 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'hover:border-neutral-400'
                } ${hasError ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
                {...register(name)}
                onFocus={() => setFocusedField(name)}
                onBlur={() => {
                  setFocusedField(null);
                }}
                onChange={() => trigger(name)}
              >
                {options?.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.text}
                  </option>
                ))}
              </select>
            )}

            {type === IelementType.FILE && (
              <div
                className={`${
                  isDark ? 'bg-neutral-900/50 border-neutral-700' : 'bg-white border-neutral-300'
                } rounded-lg border-2 p-8 transition-all duration-200 ${
                  isFocused
                    ? isDark
                      ? 'border-blue-500 ring-2 ring-blue-500/20'
                      : 'border-blue-500 ring-2 ring-blue-500/20'
                    : ''
                } ${hasError ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
              >
                <div className={`relative group`} onClick={() => fileRef?.current?.click()}>
                  <div
                    className={`p-8 ${
                      isDark
                        ? 'border-neutral-600 bg-neutral-800/50'
                        : 'border-neutral-400 bg-neutral-50'
                    } border-2 border-dashed rounded-xl w-fit mx-auto cursor-pointer transition-all duration-300 hover:scale-105 hover:border-blue-500 group-hover:shadow-lg`}
                  >
                    <FaUpLong
                      className={`w-8 h-8 mx-auto transition-colors ${
                        isDark
                          ? 'text-neutral-400 group-hover:text-blue-400'
                          : 'text-neutral-600 group-hover:text-blue-600'
                      }`}
                    />
                  </div>

                  <div className="mt-4 text-center">
                    <h3
                      className={`font-medium ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}
                    >
                      {watch(name)?.[0]?.name || (
                        <>
                          <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
                            Click to upload
                          </span>
                          <span className={isDark ? 'text-neutral-500' : 'text-neutral-500'}>
                            {' '}
                            or drag and drop
                          </span>
                        </>
                      )}
                    </h3>
                    {!watch(name)?.[0]?.name && (
                      <p
                        className={`text-xs mt-1 ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}
                      >
                        PNG, JPG, PDF up to 10MB
                      </p>
                    )}
                  </div>
                </div>

                <input
                  className="hidden"
                  type="file"
                  {...register(name)}
                  ref={e => {
                    register(name).ref(e);
                    fileRef.current = e;
                  }}
                  onFocus={() => setFocusedField(name)}
                  onBlur={() => setFocusedField(null)}
                  onChange={e => {
                    register(name).onChange(e);
                    trigger(name);
                  }}
                />
              </div>
            )}

            {type === IelementType.TEXTAREA && (
              <textarea
                className={`${
                  isDark
                    ? 'bg-neutral-900/50 text-neutral-200 border-neutral-700'
                    : 'bg-white text-neutral-900 border-neutral-300'
                } font-medium px-4 py-3 outline-none w-full rounded-lg border-2 transition-all duration-200 resize-y min-h-[120px] ${
                  isFocused
                    ? isDark
                      ? 'border-blue-500 ring-2 ring-blue-500/20'
                      : 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'hover:border-neutral-400'
                } ${hasError ? 'border-red-500 ring-2 ring-red-500/20' : ''}`}
                placeholder={placeholder}
                {...register(name)}
                onFocus={() => setFocusedField(name)}
                onBlur={() => {
                  setFocusedField(null);
                  trigger(name);
                }}
              />
            )}

            {hasError && (
              <div className="flex items-start gap-1 mt-2">
                <svg
                  className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-red-500 text-sm font-medium">
                  {errors[name]?.message as string}
                </p>
              </div>
            )}
          </div>
        );
      })}
      {onSubmit && (
        <div className="w-full flex justify-center mt-6">
          <Button loading={loading} shadow={false} text="Submit" type={IButtonType.SECONDARY} />
        </div>
      )}
    </form>
  );
};

export default Form;

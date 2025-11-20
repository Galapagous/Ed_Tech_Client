import type { IconType } from 'react-icons';
import { CgSpinner } from 'react-icons/cg';

enum IButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IButton {
  text: string;
  type: IButtonType;
  shadow?: boolean;
  icon?: IconType;
  onClick?: () => void;
  loading?: boolean;
  // Add these for better testing
  'data-testid'?: string;
  disabled?: boolean;
}

const Button = ({
  text,
  type,
  shadow,
  icon: Icon,
  onClick,
  loading,
  'data-testid': testId,
  disabled,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      data-testid={testId}
      className={`
        ${shadow ? 'shadow-md' : ''} 
        ${
          type === IButtonType.PRIMARY
            ? 'bg-primary_700'
            : type === IButtonType.SECONDARY
              ? 'border-2 border-white'
              : ''
        } 
        text-white flex items-center gap-2 
        lg:px-10 md:px-6 px-5 
        lg:py-2 py-1 
        lg:text-lg text-sm 
        rounded-full
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {loading ? (
        <CgSpinner className="animate-spin" data-testid="loading-spinner" />
      ) : (
        <>
          {Icon && <Icon data-testid="button-icon" />}
          {text}
        </>
      )}
    </button>
  );
};

export default Button;
export { IButtonType };

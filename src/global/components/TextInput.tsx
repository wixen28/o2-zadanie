import { useState, useEffect } from "react"

export enum TextInputState {
  ENABLED = "enabled",
  FOCUS = "focus",
  ERROR = "error",
  DISABLED = "disabled",
  WARNING = "warning",
  SUCCESS = "success"
}

export enum TextInputLabelSize {
  LABEL_M = "label-m",
  LABEL_S = "label-s",
}

export enum TextInputBodySize {
  BODY_M = "body-m"
}

type TextInputProps = {
  type: React.HTMLInputTypeAttribute
  label?: string
  placeholder?: string
  state?: TextInputState
  labelSize?: TextInputLabelSize
  bodySize?: TextInputBodySize   
  className?: string
  id?: string
  required?: boolean
  disabled?: boolean
  onValidationChange?: (isValid: boolean) => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>


const TextInput = ({ 
  type = "text",
  label, 
  placeholder, 
  state = TextInputState.ENABLED, 
  labelSize = TextInputLabelSize.LABEL_S, 
  bodySize = TextInputBodySize.BODY_M,  
  disabled = false, 
  className,
  id,
  required,
  value,
  onChange
}: TextInputProps) => {

  const [inputState, setInputState] = useState<TextInputState>(state)

  useEffect(() => {
    setInputState(state)
  }, [state])

  //states
  const getStateClasses = () => {
    switch (inputState) {
      case TextInputState.FOCUS:
        return 'border-o2-state-defaultFocus border-[3px] caret-o2-surface-brand'
      case TextInputState.ERROR:
        return 'border-o2-surface-danger border-[3px]'
      case TextInputState.DISABLED:
        return 'border-o2-content-onNeutral-low bg-[${COLORS.surface.xLow}] cursor-not-allowed'
      default:
        return 'border-o2-surface-xHigh border-[1px]'
      }
  }
  
  //label sizes
  const getLabelSizeClasses = () => {
    switch (labelSize) {
      case TextInputLabelSize.LABEL_S:
        return 'text-sm font-[400] leading-[17px] tracking-[0.16px]'
      case TextInputLabelSize.LABEL_M:
        return 'text-base font-medium leading-[22px] tracking-[0.16px]'
      default:
        return 'text-sm font-[400] leading-[17px] tracking-[0.16px]'
    }
  }

  //body sizes
  const getBodySizeClasses = () => {
    switch (bodySize) {
      case TextInputBodySize.BODY_M:
        return 'text-base font-normal leading-[22px] tracking-[0.01px] space-y-[20px] pl-[16px]'
      default:
        return 'text-sm font-normal leading-[20px] tracking-[0.01px]'
    }
  }

  const handleFocus = () => {
    setInputState(TextInputState.FOCUS)
  }

  const handleBlur = () => {
    setInputState(TextInputState.ENABLED)
  }

  return (
    <div className='flex flex-col'>
       { label && (
        <label 
          htmlFor={id} 
          className={`flex gap-2 mt-[24px] ${getLabelSizeClasses()} ${disabled ? 'text-o2-content-onNeutral-low' : ''}`}
        >
          {label}
          <span className='text-o2-content-onNeutral-low'>Optional</span>
        </label>
      )}
      <input 
        type={type}
        placeholder={ inputState === TextInputState.FOCUS ? "" : placeholder}
        required={required}
        className={`w-[300px] md:w-[400px] h-[48px] mt-[8px] rounded-[12px] border-[1px] outline-none ${getStateClasses()} ${getBodySizeClasses()} ${className}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value || ""}
        onChange={onChange}         
        disabled={disabled}
      />
    </div>
  )
}

export default TextInput
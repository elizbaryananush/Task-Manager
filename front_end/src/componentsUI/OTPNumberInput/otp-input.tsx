import { Ref, useRef } from 'react';

type OTPInputProps = {
  length?: number;
  onChange?: (code: string) => void;
};

export default function OTPInput({ length = 6, onChange }: OTPInputProps) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/, ''); // allow only digits
    e.target.value = value;

    if (value && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    const code = inputs.current.map(input => input?.value ?? '').join('');
    onChange?.(code);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          inputMode="numeric"
          className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl focus:border-blue-500 focus:outline-none"
          ref={(el => (inputs.current[i] = el)) as unknown as Ref<HTMLInputElement>}
          onChange={e => handleChange(e, i)}
          onKeyDown={e => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
}

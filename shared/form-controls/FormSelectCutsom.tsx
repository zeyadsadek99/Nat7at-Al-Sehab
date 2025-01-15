import React from 'react';
import { useFormContext } from 'react-hook-form';
import Select, { Props } from 'react-select';
import { FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { useTranslations } from 'next-intl';
interface FormSelectCutsomProps extends Props {
  options: { label: string; value: string }[];
  name: string;
  label?: string;
  className?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  [x: string]: any;
}

const FormSelectCutsom: React.FC<FormSelectCutsomProps> = ({
  options,
  name,
  label,
  value,
  defaultValue,
  customStyle,
  showRequired,
  onChange,
  placeholder,
  ...props
}) => {
  const form = useFormContext();
  const t = useTranslations('LABELS');
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '100%',
      minHeight: '64px',
      backgroundColor: '#F9F7F7',
      borderColor: '#e2e8f0',
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none',
    }),
  };

  const defualutStyles = {
    control: (provided: any) => ({
      ...provided,
      width: '100%',
      minHeight: '48px',
      backgroundColor: '#F9F7F7',
      borderColor: '#e2e8f0',
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: 'none',
    }),
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {t(label)}{' '}
            {showRequired && <span className='text-destructive'>*</span>}
          </FormLabel>

          <Select
            {...field}
            options={options}
            onChange={(option) => {
              //@ts-ignore

              form.setValue(name, option.id as string);
            }}
            styles={customStyle ? customStyles : defualutStyles}
            defaultValue={options.find((option) => option.value == field.value)}
            value={options.find((option) => option.value == field.value)}
            placeholder={t(placeholder)}
            {...props}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSelectCutsom;

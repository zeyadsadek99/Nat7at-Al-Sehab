import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input, InputProps } from "@/shared/ui/input";
import { useTranslations } from "next-intl";
import React from "react";
import { useFormContext } from "react-hook-form";

export interface FormInputProps extends InputProps {
  label?: React.ReactNode;
  labelExtra?: React.ReactNode;
  labelIcon?: any;
  showRequired?: any;
  name: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  labelExtra,
  labelIcon,
  showRequired,
  ...props
}) => {
  const form = useFormContext();
  const t = useTranslations("LABELS");

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex items-center gap-2">
            {labelIcon && labelIcon}
            {label && (
              <FormLabel
                className=" text-secondary font-medium text-xl leading-8 mys-4 px-2"
                style={{ marginBottom: "20px" }}
              >
                {t(label)}
                {labelExtra && (
                  <span className="text-[14px] text-placeholder mx-2">
                    {(`( ${t(`${labelExtra}`)} )`)}
                  </span>
                )}
                {showRequired && <span className="text-destructive">*</span>}
              </FormLabel>
            )}
          </div>
          <FormControl>
            <Input {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;

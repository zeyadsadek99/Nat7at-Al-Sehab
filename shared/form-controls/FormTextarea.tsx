import React from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Textarea, TextareaProps } from "@/shared/ui/textarea";
import { useTranslations } from "next-intl";

interface FormTextareaProps extends TextareaProps {
  label?: React.ReactNode;
  name: string;
  placeholder?: any;
  showRequired?: any;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  name,
  label,
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
          {label && (
            <FormLabel
              className=" text-secondary font-medium text-xl leading-8 mys-4 px-2"
              style={{ marginBottom: "20px" }}
            >
              {t(label)}{" "}
              {showRequired && <span className="text-destructive">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <Textarea {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextarea;

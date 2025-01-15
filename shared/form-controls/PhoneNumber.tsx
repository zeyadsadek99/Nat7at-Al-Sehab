import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Controller, useFormContext } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { formatPhoneNumber } from "@/utils/helpers";
import { useTranslations } from "next-intl";

interface PhoneNumberProps {
  label?: any;
  throwErrorPhone?: boolean;
  showRequired?: boolean;
  labelImage?: any;
  country?: string;
  placeholder?: string;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  label,
  throwErrorPhone,
  labelImage,
  showRequired,
  placeholder,
  ...props
}) => {
  const form = useFormContext();
  const t = useTranslations("LABELS");

  const {
    formState: { errors },
  } = form;

  const { phone, phone_code } = form.getValues();
  const { setValue } = form;
  // const [phoneNumber, setPhoneNumber] = useState(formValues.phone)

  return (
    <Controller
      control={form.control}
      name="phone"
      render={({ field }) => (
        <FormItem>
          {label ? (
            <div
              className="text-secondary font-medium text-xl leading-8 my-4s px-2"
              style={{ marginBottom: "20px" }}
            >
              {t(`${label}`)}
              {showRequired && <span className="text-destructive">*</span>}
            </div>
          ) : (
            <FormLabel>
              phone
              {showRequired && <span className="text-destructive">*</span>}
            </FormLabel>
          )}
          <FormControl>
            <div dir="ltr" className="!m-0">
              <PhoneInput
                placeholder={`${t(placeholder)}`}
                buttonClass="hover:bg-[green]"
                containerStyle={{
                  borderRadius: "12px",
                }}
                inputStyle={{
                  // background: "#FCFCFB",
                  borderColor: "#EAEDF0",
                  width: "100%",
                  borderRadius: "12px",
                  height: "64px",
                  paddingLeft: "60px",
                }}
                buttonStyle={{
                  marginLeft: "10px",
                  height: "40px",
                  width: "40px",
                  marginTop: "12px",
                  borderRadius: "50%",
                  border: "none",
                  // background: "#FCFCFB",
                }}
                {...field}
                value={formatPhoneNumber(phone_code, phone)}
                onChange={(value, data: any, event, formattedValue) => {
                  const phone = +value
                    .slice(data?.dialCode.length)
                    .trim()
                    .split(" ")
                    .join("");

                  setValue("phone", phone);
                  // @ts-ignore
                  setValue("phone_code", data.dialCode);
                }}
                {...props}
              />

              {(errors.phone || errors.phone_code || throwErrorPhone) && (
                <p
                  role="alert"
                  style={{ color: "#ef233c " }}
                  className="text-red-500 text-sm rtl:text-end"
                >
                  {throwErrorPhone && t("The phone field must be a number")}
                  {errors.phone && t(errors.phone?.message)}
                  {errors.phone_code && t(errors.phone_code?.message)}
                </p>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PhoneNumber;

import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

type Props = {};

export default function FormUploadFile({}: Props) {
  const t = useTranslations("LABELS");
  const [nationalFile, setNationalFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [available_job_id, setAvailable_job_id] = useState(0);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setNationalFile(event.target.files[0]);
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="input-box mb-f4 inline-block w-full relative">
      <label className="text-secondary font-medium text-xl leading-8 inline-block my-2 mb-3">
        {t("uploadFile")}
      </label>
      <div className="w-full h-16 relative outline-0	border-[1px] border-[#EAEDF0] rounded-[14px] p-2  ">
        {filePreview ? (
          <div className="flex justify-between items-center px-4">
            {/* <button onClick={()=>{setFilePreview(null); setNationalFile(null)}} className='absolute top-0 right-0 text-2xl'>X</button> */}
            <button
              className="absolue top-0 right-0"
              onClick={() => {
                setFilePreview(null);
                setNationalFile(null);
              }}
            >
              <IoMdClose className="text-primary" size={40} />
            </button>
            <p>{nationalFile?.name}</p>
          </div>
        ) : (
          <div className="upload-box flex justify-end">
            <label
              htmlFor="nationalID"
              className="upload-icon cursor-pointer  bg-primary text-white p-2 px-6  font-bold w-fit rounded-lg"
            >
              {t("uploadFile")}
            </label>
            <input
              type="file"
              id="nationalID"
              // accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

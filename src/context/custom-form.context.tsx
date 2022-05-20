import { useForm, FormProvider } from "react-hook-form";
import { useState, createContext } from "react";

const CustomFormContext = createContext({
  disabled: false,
  setDisabled: (isDisabled: boolean) => {},
} as any);

const CustomFormProvider = ({ isDisabled, children }: Props) => {
  const [disabled, setDisabled] = useState(isDisabled);
  const methods = useForm();

  return (
    <CustomFormContext.Provider value={{ disabled, setDisabled, ...methods }}>
      <FormProvider {...methods}>{children}</FormProvider>
    </CustomFormContext.Provider>
  );
};

type Props = {
  isDisabled?: boolean;
  children: any;
};

export { CustomFormContext, CustomFormProvider };

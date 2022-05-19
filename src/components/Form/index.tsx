import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { createClass } from "utils/generic.util";

const Form = ({ children, onSubmit, className, preFill }: Props) => {
  const methods = useForm();
  const classes = createClass(
    { submitted: methods.formState.isSubmitted },
    className
  );

  useEffect(() => methods.reset(preFill), [preFill]);

  return (
    <FormProvider {...methods}>
      <form className={classes} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

type Props = {
  children: any;
  onSubmit: any;
  className?: string;
  preFill?: any;
};

export default Form;

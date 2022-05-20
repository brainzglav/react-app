import {
  CustomFormContext,
  CustomFormProvider,
} from "context/custom-form.context";
import { useContext } from "react";
import { useEffect } from "react";
import { createClass } from "utils/generic.util";

const Form = ({
  children,
  onSubmit,
  className,
  preFill,
  isDisabled,
}: Props) => {
  const methods = useContext(CustomFormContext);
  const classes = createClass(
    { submitted: methods.formState.isSubmitted },
    className
  );

  useEffect(() => methods.reset(preFill), [preFill, methods]);

  return (
    <CustomFormProvider isDisabled={isDisabled}>
      <form className={classes} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </CustomFormProvider>
  );
};

type Props = {
  children: any;
  onSubmit: any;
  className?: string;
  preFill?: any;
  isDisabled?: boolean;
};

export default Form;

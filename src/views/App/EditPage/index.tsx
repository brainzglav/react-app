import { faUser } from "@fortawesome/free-solid-svg-icons";
import InputField from "components/InputField";
import { FormEvent } from "react";
import { useLocation, useParams } from "react-router-dom";
import { parseUrlParams, validators } from "utils/generic.util";
import { useForm } from "react-hook-form";

const EditPage = () => {
  const params = useParams();
  const { search } = useLocation();
  const { isReadonly } = parseUrlParams(search);
  const { register, handleSubmit, formState } = useForm();

  console.log({ params, isReadonly });

  const submitHandler = (data: any) => {
    console.log("Submitted", { data, formState });
  };

  setInterval(() => console.log(formState.errors), 3000);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <InputField
        className="w-px-150"
        label="First name:"
        icon={faUser}
        isDisabled={!!isReadonly}
        formControl={[
          "name",
          validators({ required: true, maxLength: 10, pattern: /[x]/ }),
        ]}
      >
        <input type="text" placeholder="First name" />
      </InputField>
      <button>Submit</button>
    </form>
  );
};

export default EditPage;

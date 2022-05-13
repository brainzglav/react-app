import { useParams } from "react-router-dom";

const EditPage = () => {
  const params = useParams();

  console.log(params);

  return <div>Edit</div>;
};

export default EditPage;

import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function DeleteCat() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const deleteCat = (id) =>
    axiosPrivate.delete(`/cats/${id}`).then(() => {
      navigate("/cats/");
    });
  const no = () => navigate("/cats/");

  const { id } = useParams();
  return (
    <div>
      Do you want to delete?{" "}
      <button
        onClick={() => {
          deleteCat(id);
        }}
      >
        Yes
      </button>
      <button onClick={no}>No</button>
    </div>
  );
}

import { Get } from "../config/apimethods";

export default function Course() {
  const getCourse = () => {
    Get("course", {
      pageNo: 1,
      pageSize: 3,
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <button onClick={getCourse}>Get Course</button>
    </>
  );
}

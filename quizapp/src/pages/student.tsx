import { useSelector } from "react-redux";

export default function Student() {
  
  const userData = useSelector((a: any) => a.user);
  console.log(userData);

  return (
    <>
      <h2>Student {userData.name}</h2>
    </>
  );
}

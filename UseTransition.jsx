import { useState, useTransition } from "react";

function UseTransitionData() {
  const [data, setData] = useState(null);

  const [isPending, startTransition] = useTransition();

  const fetchData = () => {
    startTransition(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((result) => setData(result));
    });
  };

  return (
    <div>
      {data ? (
        <>
          {data.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })}
        </>
      ) : (
        <p>No data</p>
      )}
      {isPending && <p>Loading...</p>}
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default UseTransitionData;

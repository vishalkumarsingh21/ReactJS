function Card() {
  const user = "Satyam Prakash";
  const age = 25;

  return (
    <>
      <div className="card">
        <h1> Meet {user} !! </h1>
        <p> He is a freaking {age} year old selfish guy </p>
      </div>
    </>
  );
}

export default Card;

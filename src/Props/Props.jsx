const Props = ({ name, age, salary, onClick, hobbiess }) => {
  console.log(name, age, salary, hobbiess);

  return (
    <>
      <div className="Props">
        <h1>{name}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          praesentium impedit asperiores laborum. Dolore mollitia ad cupiditate
          labore enim! Possimus error debitis inventore, animi ab amet rem fugit
          illum optio.
        </p>
        <button onClick={onClick}>View Profile</button>
        <p>My age is {age}</p>
        <p>My salary is Rs. {salary}</p>
      </div>

      <ol>
        {hobbiess.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ol>
    </>
  );
};

export default Props;





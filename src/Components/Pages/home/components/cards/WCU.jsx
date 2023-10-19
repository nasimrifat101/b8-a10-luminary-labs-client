/* eslint-disable react/prop-types */

const WCU = ({ card }) => {
  const { image, name, details } = card;
  return (
    <div>
      <div className="card border hover:shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="text-md font-bold">{name}</h2>
          <p className="text-sm">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default WCU;

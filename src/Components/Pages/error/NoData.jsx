import { Link } from "react-router-dom";

const NoData = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold">Sorry No  Phones Added Yet</h1>
            <p className="py-6">
             but keep an eye here. well be adding product soon. sorry for inconvenience
            </p>
           <Link to='/'> <button className="btn btn-primary">Go Home</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoData;

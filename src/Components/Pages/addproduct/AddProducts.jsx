import Navbar from "../navbar/Navbar";
import AddProBanner from "./AddProBanner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = () => {
  const Addinput = (e) => {
    e.preventDefault();
    const form = e.target;
   const image = form.image.value;
   const name = form.name.value;
   const brand = form.brand.value;
   const type = form.type.value;
   const price = form.price.value;
   const description = form.description.value;
   const rating = form.rating.value;

   const product ={image, name, brand, type, price, description, rating}
   console.log(product)

    fetch("http://localhost:5000/phones", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product added successfully!");
        form.reset();
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <AddProBanner></AddProBanner>
      <div>
        <div className="hero">
          <div className="hero-content">
            <div className="card w-full hover:shadow-2xl ">
              <form onSubmit={Addinput} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    className="input input-bordered "
                    required
                  />
                </div>
                {/* flex */}
                <div className="lg:flex lg:space-x-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Brand Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Brand Name"
                      name="brand"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                {/* flex */}
                <div className="lg:flex lg:space-x-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Type</span>
                    </label>
                    <input
                      type="text"
                      name="type"
                      placeholder="ex: Phone"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Product Price"
                      name="price"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                {/* flex */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Rate this product from 1-10"
                      name="rating"
                      className="input input-bordered"
                      required
                    />
                  </div>
                {/* flex */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <textarea
                      type="text"
                      placeholder="Short Description"
                      name="description"
                      className="input input-bordered"
                      required
                    />
                  </div>

                <div className="form-control mt-6">
                  <button className="btn btn-accent">Add Product</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default AddProducts;

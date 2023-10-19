
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../navbar/Navbar';

import { useLoaderData, useParams } from 'react-router-dom';
import UpdateBanner from './UpdateBanner';



const Update = () => {
    const { id } = useParams();
    console.log(id) 
    const user = useLoaderData()
    console.log(user);
    const { image, name, brand, price, rating, description, type } = user;


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

    fetch(`http://localhost:5000/phones/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Product updated successfully!");
        form.reset();
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <UpdateBanner></UpdateBanner>
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
                    defaultValue={image}
                    name="image"
                    className="input input-bordered "
                    required
                  />
                </div>
                {/* flex */}
                <div className="flex space-x-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder={name}
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
                      placeholder={brand}
                      name="brand"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                {/* flex */}
                <div className="flex space-x-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Type</span>
                    </label>
                    <input
                      type="text"
                      name="type"
                      placeholder={type}
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
                      placeholder={price}
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
                      placeholder={`${rating} out of 10`}
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
                      defaultValue={description}
                      name="description"
                      className="input input-bordered"
                      required
                    />
                  </div>

                <div className="form-control mt-6">
                  <button className="btn btn-accent">Update Product</button>
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

export default Update;

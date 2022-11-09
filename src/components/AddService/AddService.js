import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const photoURL = form.photoURL.value;
    const description = form.description.value;
    // console.log(title, price, rating, photoURL, description);
    const add = {
      title: title,
      price: price,
      rating: rating,
      img: photoURL,
      description: description,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(add),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Add placed successfully");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleAddUser} className="p-40 checkout-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <input
            required
            name="title"
            type="text"
            placeholder="Title Name"
            className="input input-bordered input-accent w-full"
          />
          <input
            required
            name="price"
            type="text"
            placeholder="Price"
            className="input input-bordered input-accent w-full"
          />
          <input
            required
            name="rating"
            type="text"
            placeholder="Rating"
            className="input input-bordered input-accent w-full"
          />
          <input
            required
            name="photoURL"
            type="text"
            placeholder="photoURL"
            className="input input-bordered input-accent w-full"
          />
        </div>
        <div className="mt-10">
          <textarea
            required
            name="description"
            className="textarea textarea-accent textarea-block w-full h-40"
            placeholder="Description"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-success btn-block mt-5">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;

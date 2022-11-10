import React from "react";

const MyReviewCard = ({ myReview, handleDelete, handleStatusUpdate }) => {
  const { title, message, _id } = myReview;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{message}</p>
        <div className="card-actions justify-center">
          <button onClick={() => handleStatusUpdate(_id)}>
            <label htmlFor="my-modal-3" className="btn btn-primary">
              Edit
            </label>
          </button>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="py-4">{message}</p>
            </div>
          </div>
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;

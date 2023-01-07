import React, { useState } from "react";
import "./MyReviewCard.css";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";

const MyReviewCard = ({ myReview, handleDelete, refetch, isLoading }) => {
  const { title, message, _id } = myReview;

  const [isUpdating, setIsUpdating] = useState("");

  const handleStatusUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.edit.value;

    const updateDoc = {
      message: message,
    };

    fetch(
      `https://react-assignment-four-server.vercel.app/reviews/${isUpdating}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateDoc),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        toast.success("Updated successfully");
        setIsUpdating("");
      });
  };

  const cancelUpdate = () => {
    setIsUpdating("");
  };

  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    );
  }

  return (
    <div className="card sm:w-1/3 md:w-1/3 lg:1/3 card-width bg-base-100 shadow-2xl dark:bg-black border dark:border-white mx-auto mb-16 mt-16">
      {isUpdating === _id ? (
        <div>
          <div className="card-body">
            <h2 className="card-title dark:text-white mx-auto">{title}</h2>
            <form onSubmit={handleStatusUpdate}>
              <div>
                <div className="flex justify-center">
                  <input
                    type="text"
                    name="edit"
                    defaultValue={message}
                    placeholder="Edit"
                    className="input input-bordered input-accent "
                  />
                </div>

                <div className="flex justify-center mt-2 space-x-2">
                  <button
                    type="submit"
                    className="text-gray-900 bg-white btn btn-outline btn-success btn-sm border border-green-500  dark:focus:ring-gray-700"
                  >
                    <Icon
                      icon="material-symbols:update-rounded"
                      className="text-green-700"
                      width="22"
                    ></Icon>
                  </button>
                  <button
                    onClick={cancelUpdate}
                    title="click for edit"
                    type="button"
                    className="text-gray-900 bg-white border border-red-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1 mr-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <Icon
                      icon="material-symbols:cancel-outline"
                      className="text-red-500"
                      width="22"
                    ></Icon>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="card-body">
          <h2 className="card-title dark:text-white mx-auto">{title}</h2>
          <p className="dark:text-white mx-auto pb-3">{message}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => {
                setIsUpdating(_id);
              }}
              title="click for edit"
              type="button"
              className="text-gray-900 bg-white focus:outline-none outline-green hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <label
                className="btn btn-outline btn-sm border border-green-500"
                htmlFor="review"
              >
                <Icon
                  icon="line-md:edit"
                  className="text-green-500"
                  width="22"
                ></Icon>
              </label>
            </button>

            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-outline btn-sm btn-error text-gray-900 bg-white border border-red-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3.5 py-1.5 mr-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Icon
                icon="material-symbols:delete"
                className="text-red-700"
                width="18"
              ></Icon>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviewCard;

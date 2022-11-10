import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthProvider";
import MyReviewCard from "./MyReviewCard";
import "react-toastify/dist/ReactToastify.css";
import TitleHooks from "../Shared/TitleHooks";

const MyReviews = () => {
  TitleHooks("My Reviews");
  const { user, LogOut } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://react-assignment-four-server.vercel.app/reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("sports-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return LogOut();
        }

        return res.json();
      })
      .then((data) => {
        setMyReviews(data);
      });
  }, [user?.email, LogOut]);

  const handleDelete = (id) => {
    const processed = window.confirm("Are you sure want to delete");
    if (processed) {
      fetch(`https://react-assignment-four-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully");
            const remaining = myReviews.filter((r) => r._id !== id);
            setMyReviews(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://react-assignment-four-server.vercel.app/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Updated" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Updated successfully");
          const remaining = myReviews.filter((re) => re !== id);
          const approving = myReviews.find((re) => re === id);
          approving.status = "Updated";
          const newReview = [approving, ...remaining];
          setMyReviews(newReview);
        }
      });
  };

  return (
    <div className="py-40">
      {myReviews.length === 0 ? (
        <h1 className="text-center font-bold text-5xl">
          "No reviews were added"
        </h1>
      ) : (
        <>
          {myReviews.map((myReview) => (
            <MyReviewCard
              key={myReview._id}
              myReview={myReview}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
            ></MyReviewCard>
          ))}
        </>
      )}
    </div>
  );
};

export default MyReviews;

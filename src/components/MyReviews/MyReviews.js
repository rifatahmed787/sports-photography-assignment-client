import React, { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthProvider";
import MyReviewCard from "./MyReviewCard";
import "react-toastify/dist/ReactToastify.css";
import TitleHooks from "../Shared/TitleHooks";
import { useQuery } from "@tanstack/react-query";

const MyReviews = () => {
  TitleHooks("My Reviews");
  const { user } = useContext(AuthContext);

  const {
    data: myReviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(
        `https://react-assignment-four-server.vercel.app/reviews/${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("sports-token")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

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
            refetch();
          }
        });
    }
  };
  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    );
  }
  return (
    <div>
      {myReviews?.length < 1 ? (
        <h1 className="flex py-40 justify-center text-center font-bold text-5xl dark:text-white">
          "No reviews were added"
        </h1>
      ) : (
        <div className="lg:pb-20">
          {myReviews?.length > 0 &&
            myReviews?.map((myReview) => (
              <MyReviewCard
                key={myReview._id}
                myReview={myReview}
                handleDelete={handleDelete}
                refetch={refetch}
              ></MyReviewCard>
            ))}
        </div>
      )}
    </div>
  );
};

export default MyReviews;

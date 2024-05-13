// import { Rating } from "@mui/material";
// import { formatDate } from "../../Uitils/getRatings";
// import useAuth from "../../hooks/useAuth";
// import { useState } from "react";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

// const ReviewModal = ({productId}) => {
//     console.log(productId)
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure()
//   const [rating, setRating] = useState(0);
//   console.log(user);
//   const handleRatingChange = (event, newValue) => {
//     setRating(newValue);
//   };

//   const handleAddReview = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const review_title = form.review_title.value;
//     const comment = form.comment.value;

//     console.log(review_title, comment);
//     const date = new Date();
//     const dateMDY = formatDate(date);
//     console.log(dateMDY);

//     const reviewDetails = {
//       review_title,
//       reviewer: user?.displayName,
//       reviewer_image: user?.photoURL,
//       comment,
//       reviewing_time: dateMDY,
//       rating,
//     };
//     console.log(reviewDetails)
//     axiosSecure.post("/review", reviewDetails).then((res) => {
//         console.log(res.data);
//       }).catch(console.log('Review Not saved'))
//   };

//   return (
    
//   );
// };

// export default ReviewModal;

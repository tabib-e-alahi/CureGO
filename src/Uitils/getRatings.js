const getReviews = (reviews) =>{
    const reviewCount = reviews?.length;
  const totalRating = reviews?.reduce(
    (total, item) => total + item["rating"],
    0
  );
  const avgRatings = totalRating / reviewCount;

  return {avgRatings,reviewCount}
}
export default getReviews
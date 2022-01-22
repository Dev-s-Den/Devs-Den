const switchCommentShow = (showComments, setShowComments) => setShowComments(showComments ? false : true);

//Handles change on the input in Post,
const handleChange = (e, setComment, user_id) => {
  const { name, value } = e.target;
  if (!user_id) {
    setComment({ [name]: value });
  }
  setComment({
    [name]: value,
  });
};



export { switchCommentShow, handleChange };

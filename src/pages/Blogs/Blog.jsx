const Blog = ({ blog }) => {
  return (
    <>
      <div className="border-2 p-5 bg-white rounded-md hover:rounded-xl hover:bg-white backdrop-blur-lg">
        <h2 className="text-center text-2xl opacity-80 mb-2">
          {blog?.question}
        </h2>
        <div>
          {blog?.answer &&
            blog.answer.map((ans, index) => {
              return (
                <div key={index}>
                  <p className="opacity-60">
                    <small>{ans}</small>
                  </p>
                </div>
              );
            })}
        </div>
        <div>
          <p>
            <small className="ms-2">{blog?.author}</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Blog;

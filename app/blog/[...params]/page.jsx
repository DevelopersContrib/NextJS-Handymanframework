import BlogSlugPage from "@/modules/blog/slug";

const BlogPost = async ({ params }) => {
  const [id, slug] = params.params;

  return (
    <>
      <div className="tw-min-h-screen tw-pt-5 tw-pb-5 tw-mt-8tw-mb-8">
        <BlogSlugPage id={id} />
      </div>
    </>
  );
};

export default BlogPost;

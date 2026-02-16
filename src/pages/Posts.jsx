function Posts() {
  const posts = [
    {
      id: 1,
      video: `${import.meta.env.BASE_URL}video1.mp4`,
      title: 'Post 1',
      description: 'Experience the ambience of Lalith Palace.'
    },
    {
      id: 2,
      video: `${import.meta.env.BASE_URL}video2.mp4`,
      title: 'Post 2',
      description: 'Host Parties at Lalith Palace.'
    }
  ];

  return (
    <div className="p-8 md:px-16 md:py-8 max-w-[1400px] mx-auto">
      <h1 className="text-accent font-serif text-center mb-12 text-[2.5rem]">POSTS</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {posts.map(post => (
          <div key={post.id} className="bg-black/5 shadow-2xl rounded-xl overflow-hidden border border-accent/30 hover:border-accent transition-all duration-500 hover:shadow-accent/20 group">
            <div className="aspect-video w-full bg-black relative">
                <video controls className="w-full h-full object-contain">
                    <source src={post.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="p-6 bg-white">
                <h3 className="text-2xl font-serif text-text-primary mb-2">{post.title}</h3>
                <p className="text-subtext font-light">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;

import { motion } from 'framer-motion';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="p-8 md:px-16 md:py-8 max-w-[1400px] mx-auto"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-accent font-serif text-center mb-12 text-[2.5rem]"
      >
        POSTS
      </motion.h1>
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
      >
        {posts.map(post => (
          <motion.div 
            key={post.id} 
            variants={itemVariants}
            className="bg-black/5 shadow-2xl rounded-xl overflow-hidden border border-accent/30 hover:border-accent transition-all duration-500 hover:shadow-accent/20 group"
          >
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
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Posts;


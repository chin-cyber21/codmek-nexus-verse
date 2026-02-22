import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { blogPosts, getCategories } from "@/data/blogPosts";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const categories = ["All", ...getCategories()];

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Blog"
        description="Insights on AI research, engineering, and innovation from Codmek Softech — covering AGI, neural interpretability, computational biology, responsible AI, and more."
        path="/blog"
        keywords="AI blog, artificial intelligence articles, machine learning insights, AGI research, AI engineering, Codmek blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Codmek Blog",
          "url": "https://codmek.com/blog",
          "description": "AI research, engineering insights, and industry perspectives from Codmek Softech.",
          "publisher": {
            "@type": "Organization",
            "name": "Codmek Softech",
            "url": "https://codmek.com"
          }
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold mb-6 holographic-text"
          >
            Codmek Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-foreground/60 max-w-2xl mx-auto"
          >
            Thoughts on AI research, engineering, and the future of intelligence.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-8 pb-8">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary/20 text-primary border border-primary/40"
                  : "glass-panel text-foreground/60 hover:text-foreground border border-border/30"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-8 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {filtered.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <motion.article
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`glass-panel h-full p-8 rounded-xl border border-border/40 hover:border-primary/40 transition-all duration-300 group relative overflow-hidden`}
                >
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.coverGradient}`} />

                  <div className="flex items-center gap-3 text-xs text-foreground/50 mb-4 font-mono">
                    <span className="px-2 py-1 rounded bg-primary/10 text-primary/80">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:holographic-text transition-all duration-300 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-2 text-xs text-foreground/40">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-foreground/40 group-hover:text-primary transition-colors">
                      Read more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

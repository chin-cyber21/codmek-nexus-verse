import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getPostBySlug } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  // Simple markdown-like rendering for ## headings, **bold**, lists
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      // Heading
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold mt-10 mb-4 holographic-text">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="text-xl font-bold mt-8 mb-3 text-foreground/90">
            {block.replace("### ", "")}
          </h3>
        );
      }

      // Numbered list
      if (/^\d+\./.test(block)) {
        const items = block.split("\n").filter(Boolean);
        return (
          <ol key={i} className="list-decimal list-inside space-y-2 my-4 text-foreground/75 leading-relaxed">
            {items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: formatInline(item.replace(/^\d+\.\s*/, "")) }} />
            ))}
          </ol>
        );
      }

      // Bullet list
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="space-y-2 my-4 text-foreground/75">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3">
                <span className="text-primary/60 mt-1.5">▸</span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(item.replace("- ", "")) }} />
              </li>
            ))}
          </ul>
        );
      }

      // Paragraph
      return (
        <p
          key={i}
          className="text-foreground/70 leading-relaxed my-4 text-lg"
          dangerouslySetInnerHTML={{ __html: formatInline(block) }}
        />
      );
    });
  };

  const formatInline = (text: string) =>
    text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground/90 font-semibold">$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        keywords={post.tags.join(", ")}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.excerpt,
          "author": { "@type": "Organization", "name": post.author },
          "datePublished": post.date,
          "publisher": { "@type": "Organization", "name": "Codmek Softech", "url": "https://codmek.com" },
          "url": `https://codmek.com/blog/${post.slug}`
        }}
      />
      <Navbar />

      <article className="relative pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-foreground/50 hover:text-foreground transition-colors mb-10 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 text-sm text-foreground/50 mb-4 font-mono">
              <span className="px-3 py-1 rounded bg-primary/10 text-primary/80">{post.category}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-foreground/50 mb-4">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
              <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {post.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-xs px-3 py-1 rounded-full glass-panel text-foreground/50 border border-border/30">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Bottom CTA */}
          <div className="mt-16 pt-8 border-t border-border/20">
            <div className="glass-panel p-8 rounded-xl text-center border border-primary/20">
              <p className="text-foreground/70 mb-4">Interested in collaborating on AI research or solutions?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:scale-105 transition-transform"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;

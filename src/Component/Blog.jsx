import React from 'react'
import { Phone, Mail, MapPin, CheckCircle, Users, Award, Clock, ArrowUp, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Blog = () => {

  const blogPosts = [
    {
      id: 1,
      title: "5 Mobile UI Trends to Watch in 2025",
      snippet: "Explore the latest design trends reshaping the mobile experience — from neumorphism to glassmorphism and beyond.",
      author: "John Smith",
      date: "June 15, 2025",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Technology",
    },
    {
      id: 2,
      title: "Why Speed Matters in Mobile Websites",
      snippet: "Discover how fast-loading mobile sites improve user engagement, reduce bounce rate, and drive conversions.",
      author: "Sarah Johnson",
      date: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Design",
    },
    {
      id: 3,
      title: "Top 10 Tools for Mobile Web Developers",
      snippet: "A curated list of tools every developer should know when building fast and responsive mobile-first websites.",
      author: "Mike Davis",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Business",
    },
  ];
  return (
    <div>
        <section id="blog" className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest From Our Blog
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Stay updated with the latest insights, trends, and best practices in technology and business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post, index) => (
                <div
                  key={post.id}
                  className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.snippet}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <button className="group text-sm text-primary hover:underline">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      
    </div>
  )
}

export default Blog

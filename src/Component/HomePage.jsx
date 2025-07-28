
import React, { useState, useEffect } from 'react';

// Sample product data (replace with API call in production)
const sampleProducts = [
  { id: 1, name: "Smartphone X", price: 699, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Smartphone Y", price: 499, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartphone Z", price: 899, image: "https://via.placeholder.com/150" },
];

// Product Card Component
const ProductCard = React.memo(({ product }) => (
  <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
    <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
    <p className="text-gray-600">${product.price}</p>
    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      Add to Cart
    </button>
  </div>
));

// Home Page Component
function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(sampleProducts);

  // Simulate fetching products (replace with real API call)
  useEffect(() => {
    // Example: fetch("/api/products").then(res => res.json()).then(data => setProducts(data));
    setProducts(sampleProducts);
  }, []);

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle newsletter signup (replace with API call)
  const handleNewsletterSignup = (email) => {
    alert(`Subscribed with ${email}`);
    // Example: fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="bg-gray-400 text-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Discover the Latest Smartphones</h2>
          <p className="text-lg mb-6">Shop top brands at unbeatable prices!</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
            Shop Now
          </button>
        </div>
      </section>

      {/* Search Bar */}
      <section className="container mx-auto py-8">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for phones..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-600">No products found.</p>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-200 py-12 text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6">Subscribe to our newsletter for exclusive deals!</p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="newsletter-email"
            />
            <button
              onClick={() => handleNewsletterSignup(document.getElementById("newsletter-email").value)}
              className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Mobile Shop. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 mr-4 hover:underline">Privacy Policy</a>
            <a href="#" className="text-gray-400 mr-4 hover:underline">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:underline">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;

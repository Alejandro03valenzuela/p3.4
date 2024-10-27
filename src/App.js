import React, { useState } from "react";
import "./App.css";

function HomePage() {
  return (
    <div className="p-8">
      Bienvenido a Trendy Voyage
      ¡Embárcate en un viaje emocionante hacia las últimas tendencias y descubrimientos! En Trendy Voyage, exploramos lo mejor de la moda, estilo de vida y tecnología, ofreciéndote contenido fresco y relevante que te inspirará. Únete a nuestra comunidad y mantente al tanto de lo que está marcando la pauta en el mundo moderno.
    </div>
  );
}

function AboutUs() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">Acerca de Nosotros</h2>
      Nosotros En Trendy Voyage, somos un equipo apasionado de exploradores de tendencias, dedicados a brindarte contenido que no solo sea informativo, sino también inspirador. Desde las últimas novedades en moda y estilo de vida hasta innovaciones tecnológicas que están cambiando el mundo, nuestro objetivo es conectar contigo a través de experiencias únicas y emocionantes. Creemos en el poder de la comunidad, donde cada voz cuenta y cada historia tiene el potencial de inspirar. Únete a nosotros en este viaje para descubrir lo que está marcando la pauta y ser parte de nuestra aventura.
    </div>
  );
}

function PopularItems() {
  const popularProducts = [
    { id: 1, name: "Camiseta Básica", img: "imagen/adi.1.jpg" },
    { id: 2, name: "Pantalones", img: "imagen/adi.2.jpg" },
    { id: 3, name: "Chaqueta", img: "imagen/adi.3.jpg" },
    { id: 4, name: "Zapatillas", img: "imagen/adi.4.jpg" },
    { id: 5, name: "Sudadera", img: "imagen/adi.5.jpg" },
  ];

  return (
    <div className="popular-items p-8">
      <h2 className="text-3xl font-bold mb-4">Prendas más pedidas</h2>
      <div className="grid grid-cols-2 gap-4">
        {popularProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} className="product-image" />
            <h3 className="product-name">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function Catalog({ onProductSelect }) {
  const products = [
    { id: 1, name: "Camiseta Básica", price: "$15.00", img: "imagen/adi.1.jpg" },
    { id: 2, name: "Pantalones", price: "$25.00", img: "imagen/adi.2.jpg" },
    { id: 3, name: "Chaqueta", price: "$45.00", img: "imagen/adi.3.jpg" },
    { id: 4, name: "Zapatillas", price: "$60.00", img: "imagen/adi.4.jpg" },
    { id: 5, name: "Sudadera", price: "$30.00", img: "imagen/adi.5.jpg" },
    { id: 6, name: "Vestido", price: "$35.00", img: "imagen/adi.6.jpg" },
    { id: 7, name: "Falda", price: "$20.00", img: "imagen/adi.7.jpg" },
    { id: 8, name: "Cinturón", price: "$10.00", img: "imagen/adi.8.jpg" },
    { id: 9, name: "Gorra", price: "$12.00", img: "imagen/adi.9.jpg" },
    { id: 10, name: "Bufanda", price: "$15.00", img: "imagen/adi.10.jpg" },
  ];

  return (
    <div className="catalog p-8">
      <h2 className="text-3xl font-bold mb-4">Catálogo</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => onProductSelect(product)}>
            <img src={product.img} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="button-sale">Comprar</button>
          </div>
        ))}
      </div>
      <PopularItems />
    </div>
  );
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState("home");

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutUs />;
      case "catalog":
        return <Catalog onProductSelect={handleProductSelect} />;
      case "contact":
        return <div className="p-8">.</div>;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <button className="nav-button" onClick={() => setCurrentPage("home")}>Inicio</button>
        <button className="nav-button" onClick={() => setCurrentPage("catalog")}>Productos</button>
        <button className="nav-button" onClick={() => setCurrentPage("about")}>Nosotros</button>
        <button className="nav-button" onClick={() => setCurrentPage("contact")}>Contacto</button>
      </nav>
      {renderPage()}
      {selectedProduct && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.img} alt={selectedProduct.name} className="product-image" />
            <p>Precio: {selectedProduct.price}</p>
            <button className="button-popup" onClick={handleClosePopup}>Cerrar</button>
          </div>
        </div>
      )}
      <footer className="bg-blue-500 text-white p-4">
        <p>© 2024 Tienda de ropa de Alejandro. Todos los derechos reservados a Alejandro yo xd.</p>
      </footer>
    </div>
  );
}

export default App;

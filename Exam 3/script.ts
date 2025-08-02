const product = {
      brand: "Samsung",
      model: "Galaxy S24",
      price: 899
    };

    const user = {
      firstName: "ნინო",
      lastName: "გაბრიაძე",
      email: "nino@example.com",
      phone: "591000000"
    };

    document.body.innerHTML = `
      <h3>Product</h3>
      <p>Brand: ${product.brand}</p>
      <p>Model: ${product.model}</p>
      <p>Price: $${product.price}</p>

      <h3>User</h3>
      <p>Name: ${user.firstName} ${user.lastName}</p>
      <p>Email: ${user.email}</p>
      <p>Phone: ${user.phone}</p>
    `;
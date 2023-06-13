import * as postMethods from "./api/posts/index.mjs";


async function postFeed() {
    const posts = await postMethods.readPosts();
    const container = document.querySelector("#products");

    const searchInput = document.querySelector("#searchInput");
  const searchButton = document.querySelector("#searchButton");

  searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPosts = posts.products.filter(post => {
      const title = post.title.toLowerCase();
      const description = post.description.toLowerCase();
      return title.includes(searchTerm) || description.includes(searchTerm);
    });

    container.innerHTML = ""; // Clear previous results

    filteredPosts.forEach(post => {
      const postElement = createPostElement(post);
      container.appendChild(postElement);
    });
  });

  posts.products.forEach(post => {
    const postElement = createPostElement(post);
    container.appendChild(postElement);
  });
  
    posts.products.forEach(post => {
      const postElement = createPostElement(post);
      container.appendChild(postElement);
    });
  }
  
  function createPostElement(post) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
  
    const postTitle = document.createElement("h3");
    postTitle.textContent = post.title;

      // Create anchor tag
  const productLink = document.createElement("a");
  productLink.href = `singleProduct.html?id=${post.id}`; // Replace "product.html" with the actual HTML page name
  productLink.textContent = "more info";

  // Append the anchor tag to the postTitle element
  postTitle.appendChild(productLink);
  
    const postDescription = document.createElement("p");
    postDescription.textContent = post.description;

    const postThumbnail = document.createElement('img');
    postThumbnail.src = post.thumbnail;
    postThumbnail.alt = `Image from ${post.title}`;
        
    
  
    postElement.appendChild(postTitle);
    postElement.appendChild(postDescription);
    postElement.appendChild(postThumbnail);
  
    return postElement;
  }
  
  postFeed();
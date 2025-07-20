# Cookies & Local Storage

This project demonstrates various implementations of web storage technologies including cookies, localStorage, and sessionStorage. Each HTML file showcases different aspects of client-side data persistence in web browsers.

## 📚 Learning Objectives

- Understand the differences between cookies, localStorage, and sessionStorage
- Implement client-side data persistence
- Handle browser storage limitations and compatibility
- Create interactive web applications with state management
- Work with JSON serialization for complex data storage

## 🛠️ Technologies Used

- HTML5
- JavaScript (ES6+)
- Web Storage API (localStorage, sessionStorage)
- Cookies API
- DOM manipulation

## 📁 Project Structure

```
Cookies_local_storage/
├── 0-index.html          # Basic cookie implementation
├── 1-index.html          # Cookie with expiration
├── 2-index.html          # Cookie deletion
├── 3-index.html          # Basic localStorage usage
├── 4-index.html          # localStorage with data persistence
├── 5-index.html          # localStorage data removal
├── 6-index.html          # sessionStorage implementation
├── 7-index.html          # Advanced sessionStorage shopping cart
├── package.json          # Project dependencies
├── package-lock.json     # Dependency lock file
└── README.md            # Project documentation
```

## 🚀 File Descriptions

### 0-index.html - Basic Cookie Implementation
- Demonstrates basic cookie creation and reading
- Shows how to set and retrieve simple cookie values
- Introduces cookie syntax and browser storage

### 1-index.html - Cookie with Expiration
- Implements cookies with expiration dates
- Shows how to set cookies that persist for specific time periods
- Demonstrates cookie expiration handling

### 2-index.html - Cookie Deletion
- Shows how to delete cookies programmatically
- Demonstrates cookie removal by setting expiration to past date
- Covers cookie cleanup techniques

### 3-index.html - Basic localStorage Usage
- Introduces localStorage API
- Shows basic key-value storage operations
- Demonstrates localStorage persistence across browser sessions

### 4-index.html - localStorage with Data Persistence
- Implements more complex localStorage operations
- Shows data persistence across page reloads
- Demonstrates localStorage data management

### 5-index.html - localStorage Data Removal
- Shows how to remove specific localStorage items
- Demonstrates localStorage.clear() functionality
- Covers localStorage cleanup techniques

### 6-index.html - sessionStorage Implementation
- Introduces sessionStorage API
- Shows session-based storage that persists only during browser session
- Demonstrates sessionStorage vs localStorage differences

### 7-index.html - Advanced sessionStorage Shopping Cart
- **Complete shopping cart application using sessionStorage**
- Features:
  - Product catalog with clickable items
  - Add items to cart with quantity tracking
  - Remove individual items from cart
  - Clear entire cart functionality
  - Real-time cart display updates
  - Session persistence during browser session

## 🎯 Key Features of 7-index.html (Advanced Implementation)

### Available Products
- Shampoo
- Soap
- Sponge
- Water

### Functionality
- **Add to Cart**: Click any product to add it to your cart
- **Quantity Tracking**: Multiple clicks on same item increase quantity
- **Remove Items**: Click "(remove)" next to any item to remove it
- **Clear Cart**: Click "Clear my cart" to remove all items
- **Session Persistence**: Cart data persists during browser session
- **Real-time Updates**: Cart display updates immediately after any action

### Technical Implementation
- Uses `sessionStorage` for data persistence
- JSON serialization for complex cart object storage
- Event-driven DOM manipulation
- Error handling for browser compatibility
- Clean separation of concerns with modular functions

## 🔧 How to Use

1. **Clone or download** this repository
2. **Open any HTML file** in a modern web browser
3. **Interact with the application** to see web storage in action
4. **For 7-index.html**: Try adding products to cart and observe session persistence

## 🌐 Browser Compatibility

This project works with all modern browsers that support:
- HTML5
- ES6+ JavaScript
- Web Storage API
- Cookies API

**Minimum Requirements:**
- Chrome 4+
- Firefox 3.5+
- Safari 4+
- Internet Explorer 8+

## 📖 Web Storage Concepts Covered

### Cookies
- **Purpose**: Small text files stored on user's computer
- **Capacity**: ~4KB per cookie
- **Expiration**: Can be set with expiration dates
- **Scope**: Sent with every HTTP request to the server
- **Use Cases**: User preferences, session management, tracking

### localStorage
- **Purpose**: Persistent client-side storage
- **Capacity**: ~5-10MB (varies by browser)
- **Expiration**: Never expires (until manually cleared)
- **Scope**: Same-origin policy
- **Use Cases**: User preferences, application state, offline data

### sessionStorage
- **Purpose**: Session-based client-side storage
- **Capacity**: ~5-10MB (varies by browser)
- **Expiration**: Cleared when browser tab/window closes
- **Scope**: Same-origin policy, per tab/window
- **Use Cases**: Temporary session data, form data, shopping carts

## 🚨 Important Notes

- **Browser Privacy**: Users can disable or clear web storage
- **Storage Limits**: Be mindful of storage capacity limits
- **Security**: Never store sensitive information in client-side storage
- **Cross-Origin**: Storage is restricted by same-origin policy
- **Mobile Considerations**: Mobile browsers may have different storage limits

## 🧪 Testing

To test the applications:
1. Open the HTML files in different browser tabs
2. Try refreshing the page to see data persistence
3. Close and reopen the browser to test sessionStorage behavior
4. Use browser developer tools to inspect stored data
5. Test on different devices and browsers for compatibility

## 📝 License

This project is part of the Holberton School curriculum and is intended for educational purposes.

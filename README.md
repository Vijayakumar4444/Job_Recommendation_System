# 💼 Job Recommendation System using Advanced Data Structures

## 📌 Overview
The Job Recommendation System is a browser-based application designed to efficiently manage and retrieve job-related information using advanced data structures. It focuses on optimizing key operations such as searching, filtering, and tracking user interactions to deliver a fast and responsive experience.

---

## 🎯 Key Functionalities

### 🔹 Job Search
- Allows users to search jobs using keywords such as job title or required skills  
- Implements prefix-based searching for faster retrieval  
- Returns relevant job listings with reduced search time  

### 🔹 Recently Viewed Jobs
- Tracks user interactions dynamically  
- Displays the most recently accessed jobs at the top  
- Improves accessibility for frequently viewed jobs  

### 🔹 Job Filtering
- Filters jobs based on salary conditions (e.g., less than or greater than a threshold)  
- Supports combining multiple filtered datasets  
- Displays results in sorted order for better readability  

---

## 🧠 Data Structures Used

### 🔹 Trie
- Used for efficient keyword-based job search  
- Supports prefix matching to quickly retrieve relevant jobs  
- Reduces search complexity compared to linear search  

### 🔹 Splay Tree
- Used to manage recently viewed jobs dynamically  
- Moves the most recently accessed job to the top  
- Improves performance for repeated access operations  

### 🔹 Leftist Heap
- Used for filtering jobs based on salary  
- Supports efficient merging of multiple datasets  
- Maintains jobs in sorted order based on priority  

---

## ⚙️ Technology Stack

- **React:** Builds a dynamic and responsive user interface  
- **JavaScript:** Handles frontend logic and data communication  
- **C++:** Implements advanced data structures with high performance  
- **WebAssembly (WASM):** Executes C++ code in the browser and connects it with JavaScript  

---

## 🔄 System Workflow

1. User performs an action such as search, apply, or filter  
2. Input is captured through the React frontend  
3. JavaScript passes the request to C++ modules via WebAssembly  
4. Data structures process the request efficiently  
5. Results are returned and dynamically rendered in the UI  

---

## 🚀 Highlights

- Efficient implementation of advanced data structures in a real-world application  
- Faster search and filtering compared to traditional approaches  
- Seamless integration of C++ with frontend using WebAssembly  
- Optimized performance with scalable design  

---

## 📌 Conclusion

This project demonstrates the practical application of advanced data structures to improve system efficiency and responsiveness. By integrating Trie, Splay Tree, and Leftist Heap with WebAssembly, the system achieves optimized performance and delivers a smooth user experience.

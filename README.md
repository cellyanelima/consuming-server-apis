## 🌐 **Consuming External APIs from Our Server - Choose Your Own Adventure**

### **Project Description**  
This project explores consuming external APIs using **JavaScript**, **Node.js**, and **React**. The application fetches data from a public API, processes it on the server, and displays it on the client side. The goal was to build a functional application that demonstrates the ability to read API documentation, manipulate data, and implement best development practices.

**Technologies and Tools Used:**  
- **Front-end:** React.js  
- **Back-end:** Node.js with Express  
- **Package Management:** npm  
- **Environment Variables:** dotenv to protect API keys  
- **Local Server:** Development using `npm run dev`  
- **External API:** [Example: PokeAPI](https://pokeapi.co/docs/v2) (or other chosen API)  
- **Version Control:** Git and GitHub  

---

### **Motivations**  
This project was created to:  
1. Practice consuming **RESTful APIs** on both the **client-side** and **server-side**.  
2. Learn how to handle APIs requiring **environment variables** (API keys) and protect sensitive data using `.env`.  
3. Explore public APIs and learn to interpret their **documentation** for effective HTTP calls.  
4. Work with **CORS** (Cross-Origin Resource Sharing) restrictions and use a server-side **proxy** as a solution.  

---

### **What I Learned**  
Through the development of this project, I learned:  
- How to set up a Node.js/Express server to act as a **proxy** between the client and external APIs.  
- How to handle HTTP requests using **fetch** in React and create reusable functions in `apiClient.ts`.  
- The importance of protecting **API keys** in projects using the `.env` file and providing a `.env.sample` for collaborators.  
- How to handle **errors and exceptions** when consuming API data.  

---

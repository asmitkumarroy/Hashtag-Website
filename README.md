# Hashtag Society - Official Website

Welcome to the official digital platform for the Hashtag Society of JIMS Greater Noida. This project is a modern, feature-rich React application built with Vite, designed to be the central hub for society members, showcasing our team, events, alumni, and technical blog.

**[View Live Demo](https://hashtag-official.vercel.app)** *(Currently In development Phase)*

---

## ✨ Key Features

This website was built from the ground up with a focus on a highly interactive and modern user experience.

* **Interactive UI/UX:**
    * **macOS-style Dock Navigation:** A unique, magnifying dock for primary site navigation, built with Framer Motion.
    * **Advanced Profile Cards:** Highly interactive, animated profile cards with 3D tilt and holographic lighting effects that react to the user's cursor.
    * **Dynamic Text Animations:** Multiple custom components for text effects, including decryption, variable font proximity, and shine animations to create an engaging visual hierarchy.
    * **Animated Backgrounds:** A subtle animated starfield background that matches the society's aesthetic.

* **Dynamic Content Management:**
    * **Headless CMS for Blog:** The entire "Blogs" section is powered by **Sanity.io**. This allows team members to write, edit, and publish posts through an easy-to-use admin panel without touching any code.
    * **Functional Contact Form:** The contact page uses **Web3Forms** for a serverless backend solution, ensuring all inquiries are sent directly to the society's email.

* **Feature-Rich Pages:**
    * **Detailed Team Page:** Features a tabbed interface to browse different departments (Technical, Graphics, etc.), each with a dedicated "Head" and "Member" section.
    * **Expansive Alumni Grid:** A dedicated page to showcase former members in a responsive grid layout using a unique profile card design.
    * **PDF Certificate Generator:** A client-side tool allowing users to enter their name and event details to download a custom-generated PDF certificate.

* **Fully Responsive:** The entire website is designed with a mobile-first approach, ensuring a seamless experience on all devices, from phones and tablets to desktops.

---

## 🛠️ Tech Stack & Tools

This project leverages a modern, efficient, and scalable technology stack.

| Category | Technology / Library |
| :--- | :--- |
| **Core Framework** | **React.js**, **Vite** |
| **Routing** | **React Router DOM** |
| **Animation** | **Framer Motion** |
| **Styling** | **CSS** (with a component-based file structure) |
| **Icons** | **React Icons** |
| **PDF Generation** | **jsPDF**, **html2canvas** |
| **Backend Services** | **Sanity.io** (Headless CMS), **Web3Forms** (Form Handling) |
| **Deployment** | **Vercel** (Frontend), **Sanity** (Studio) |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v16 or later)
* npm (or your package manager of choice)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install Frontend Dependencies:**
    * Navigate to the root of the project (the folder with `package.json`).
    ```sh
    npm install
    ```

3.  **Install Sanity Studio Dependencies:**
    * Navigate into the Sanity folder (e.g., `hashtag-website-blog`).
    ```sh
    cd hashtag-website-blog
    npm install
    cd .. 
    ```

4.  **Set Up Environment Variables:**
    * In the **root directory** of the project, create a new file named `.env`.
    * Add your Sanity project details to this file. You can find these in your `sanity.cli.js` file or at [manage.sanity.io](https://manage.sanity.io).
    ```env
    VITE_SANITY_PROJECT_ID="your_project_id_here"
    ```
    * In your `Contact.jsx` file, remember to replace `"YOUR_ACCESS_KEY_HERE"` with your actual key from Web3Forms.

### Running the Project

You need to run **two** development servers simultaneously in two separate terminals.

1.  **Start the React Frontend:**
    * In the root directory, run:
    ```sh
    npm run dev
    ```
    * Your website will be available at `http://localhost:5173`.

2.  **Start the Sanity Studio Backend:**
    * In a new terminal, navigate into your Sanity folder and run:
    ```sh
    cd hashtag-website-blog
    sanity start
    ```
    * Your content management studio will be available at `http://localhost:3333`.

---

## 🌐 Deployment

This project uses a two-part deployment process:

* **Sanity Studio:** Deployed via the Sanity CLI using the `sanity deploy` command.
* **React Frontend:** Deployed on **Vercel** by connecting the GitHub repository and adding the necessary environment variables.

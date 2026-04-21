# 📁 File Record Manager (Node.js)

A simple Node.js server that performs basic file operations like insert, modify, and delete using HTTP routes.

---

## 🚀 Features

- 📄 Read records from a file  
- ➕ Insert new data into file  
- ✏️ Modify existing data  
- ❌ Remove specific data  
- 🌐 Access operations via browser (URL routes)

---

## 🛠️ Tech Stack

- Node.js (Core Modules)
- HTTP Module
- File System (fs/promises)

---

## 📂 Project Structure

project-folder/
│
├── server.js
├── record.txt
└── README.md


---

## ⚙️ How to Run

### 🔹 Step 1: Install Node.js
Make sure Node.js is installed on your system.

---

### 🔹 Step 2: Run the server

```bash
node server.js
```
🔹 Step 3: Open in Browser

Go to:
```
http://localhost:3000
```
🌐 API Routes
🔹 Home
/
Displays current file content.
🔹 Insert Data
/insert?item=Hello
🔹 Modify Data
/modify?prev=Hello&curr=Hi
🔹 Remove Data
/remove?item=Hi

## 📌 Example Workflow
Open /insert?item=Hello → adds "Hello"
Open /modify?prev=Hello&curr=Hi → replaces it
Open /remove?item=Hi → removes it

## ⚠️ Notes

record.txt must exist in the same directory
Data is stored line-by-line
No database is used (file-based storage)
🚀 Future Improvements
🔐 Add validation & error handling
🧠 Convert into REST API (JSO
N-based)
💾 Use database (MongoDB/MySQL)
🎨 Add frontend UI
🙌 Author

Krishna Gupta

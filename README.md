[README.md](https://github.com/user-attachments/files/30019146/README.md)
# 🍕 Eat-N-Split

A React application that helps you **split bills with your friends** and keep track of who owes whom. Built with **React 19** and **Vite 8**, this app provides an intuitive interface to manage shared expenses effortlessly.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Component Breakdown](#component-breakdown)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Responsive Design](#responsive-design)

---

## 🔎 Overview

**Eat-N-Split** is designed to solve a common real-world problem: splitting restaurant bills or shared expenses between friends. The app lets you maintain a list of friends, select a friend to split a bill with, enter the total bill and your expense, choose who is paying, and automatically calculate and track balances. At a glance, you can see whether a friend owes you money, you owe them, or you're even.

---

## ✨ Features

### 1. 👥 Friends List Management

- The app starts with a **pre-loaded list of friends** (Clark, Sarah, and Anthony), each with an avatar image, name, and an initial balance.
- Each friend card displays:
  - A **profile avatar** (fetched from [pravatar.cc](https://pravatar.cc)).
  - The friend's **name**.
  - A **balance status** showing one of three states:
    - 🔴 **You owe them** – displayed in red (e.g., _"You Owe Clark 7€"_).
    - 🟢 **They owe you** – displayed in green (e.g., _"Sarah Owe You 20€"_).
    - ⚪ **Even** – displayed in neutral text (e.g., _"You And Anthony Are Even"_).
  - A **Select / Close button** to toggle the bill-splitting form for that friend.

### 2. ➕ Add a New Friend

- Click the **"Add Friend"** button at the bottom of the sidebar to reveal the add-friend form.
- The form includes two fields:
  - **🧑‍🤝‍🧑 Friend Name** – Enter the name of your new friend.
  - **📷 Image URL** – Provide a URL for their profile picture.
- Upon submission:
  - The new friend is added to the list with a **balance of 0** (even).
  - A **unique ID** is generated using `Date.now()`.
  - The form fields are **reset automatically**.
- Input validation ensures both fields are filled before submission.
- A **"Close"** button lets you collapse the add-friend form without adding anyone.

### 3. 💰 Split a Bill

- **Select a friend** from the list by clicking their "Select" button — the friend card becomes **highlighted** and the bill-splitting form appears on the right side.
- The bill-splitting form includes:
  - **💰 Bill Value** – Enter the total bill amount.
  - **🧍‍♂️ Your Expense** – Enter how much you spent.
  - **🧑‍🤝‍🧑 Friend's Expense** – Automatically calculated as `Bill Value - Your Expense` (this field is **disabled / read-only**).
  - **🤑 Who is Paying the Bill** – A dropdown to select either **"You"** or the **friend's name**.
- When you submit the form:
  - If **you are paying**, the friend's expense is added to their balance (they owe you more).
  - If the **friend is paying**, your expense is subtracted from their balance (you owe them more).
  - The selected friend is **deselected** and the form closes.
  - The friend's balance in the sidebar **updates immediately** to reflect the new amount.

### 4. 🔄 Friend Selection & State Reset

- Clicking **"Select"** on a friend opens the bill-splitting form for that specific friend.
- Clicking **"Close"** (or selecting the same friend again) **deselects** them and hides the form.
- Switching between friends **resets the bill form fields** (bill value, your expense, and payer) to prevent stale data from carrying over.
- Opening the **"Add Friend"** form automatically **deselects** any currently selected friend, ensuring a clean UI state.

### 5. 🎨 Visual Balance Indicators

- **Color-coded balance messages** make it easy to scan at a glance:
  - **Red text** (`.red`) for negative balances — you owe the friend.
  - **Green text** (`.green`) for positive balances — the friend owes you.
  - **Neutral text** for zero balances — you're even.

### 6. 📱 Responsive Design

- The layout adapts to different screen sizes using **CSS Grid** and **media queries**:
  - **Desktop (> 900px):** Two-column grid layout — sidebar on the left, bill form on the right.
  - **Tablet (≤ 900px):** Single-column layout, stacked vertically.
  - **Mobile (≤ 600px):** Simplified grid for friend cards, full-width form fields, and full-width buttons for easy tapping.

---

## 🛠️ Tech Stack

| Technology   | Version  | Purpose                          |
| ------------ | -------- | -------------------------------- |
| **React**    | ^19.2.7  | UI library for building components |
| **React DOM**| ^19.2.7  | DOM rendering for React          |
| **Vite**     | ^8.1.1   | Fast build tool & dev server     |
| **ESLint**   | ^10.6.0  | Code linting & quality           |
| **Vanilla CSS** | —     | Custom styling with CSS variables |

---

## 📁 Project Structure

```
eat-n-split/
├── public/
│   ├── assets/               # Static assets
│   ├── favicon.svg           # App favicon
│   └── icons.svg             # SVG icon sprites
├── src/
│   ├── components/
│   │   ├── Button.jsx        # Reusable button component
│   │   ├── FormAddFriend.jsx  # Form to add a new friend
│   │   ├── FormSplitBill.jsx  # Form to split a bill
│   │   ├── FriendList.jsx     # Individual friend card
│   │   └── Friends.jsx        # Sidebar: friend list + add form
│   ├── App.jsx               # Root component & state management
│   ├── index.css             # Global styles & CSS variables
│   └── main.jsx              # App entry point (React 19 createRoot)
├── index.html                # HTML template
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
└── .gitignore                # Git ignore rules
```

---

## 🧩 Component Breakdown

### `App.jsx` — Root Component

The central hub of the application. It:

- Holds **all application state** (friends list, selected friend, bill/expense values, form visibility).
- Defines the **initial friends data** with pre-set balances.
- Contains the `handleSplitBill` function that **updates a friend's balance** immutably.
- Passes state and setter functions down to child components via **prop drilling**.

### `Friends.jsx` — Sidebar Container

Manages the left sidebar area. It:

- Renders the **list of friend cards** by mapping over the data array.
- Handles **friend selection logic** — toggling selection, resetting form fields when switching friends.
- Toggles between the **"Add Friend" button** and the **add-friend form**.
- Shows a **"Close" button** when the add-friend form is open.

### `FriendList.jsx` — Friend Card

Renders a **single friend item** in the list. It:

- Displays the friend's **avatar**, **name**, and **balance status** with color coding.
- Shows a **"Select" / "Close"** button that toggles the bill-splitting form.
- Applies the `.selected` CSS class to **highlight** the currently selected friend.

### `FormAddFriend.jsx` — Add Friend Form

A form to add new friends. It:

- Accepts **name** and **image URL** inputs with controlled components.
- Validates that both fields are filled before submission.
- Adds the new friend to the list with `id: Date.now()` and `balance: 0`.
- Resets the form fields after successful submission.
- Follows React's **immutability principle** by spreading the previous state.

### `FormSplitBill.jsx` — Bill Splitting Form

The core feature form. It:

- Displays only when a friend is **selected** and the add-friend form is **closed**.
- Shows the selected friend's name in the form header.
- Calculates the **friend's expense automatically** (`bill - yourExpense`).
- Provides a **dropdown** to choose who is paying (you or the friend).
- On submission, calculates the balance change:
  - If **you pay**: `friendExpense` is added to the friend's balance.
  - If **friend pays**: `-yourExpense` is subtracted from the friend's balance.
- Resets selection after submission.

### `Button.jsx` — Reusable Button

A simple, reusable button component that:

- Accepts `children` (label text), `onClick` handler, and an optional `value` prop.
- Applies the `.button` CSS class with **hover transitions**.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Fady-Wagih-Hares/Eat--N-Split.git
   cd Eat--N-Split
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to the URL shown in the terminal (usually `http://localhost:5173`).

---

## 📜 Available Scripts

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Starts the Vite development server with HMR      |
| `npm run build`    | Builds the app for production                    |
| `npm run preview`  | Previews the production build locally             |
| `npm run lint`     | Runs ESLint to check for code quality issues      |

---

## 🔧 How It Works

### State Management Flow

```
App (State Owner)
├── friends list (data)
├── selected friend (deferentId)
├── bill form values (bill, yourExpense, isPaying)
├── add friend form data (addFriend)
└── form visibility toggle (openAdd)
    │
    ├──▶ Friends (Sidebar)
    │     ├── FriendList × N (Friend Cards)
    │     ├── FormAddFriend (Add Form)
    │     └── Button (Toggle Add/Close)
    │
    └──▶ FormSplitBill (Bill Form)
```

### Bill Splitting Logic

1. User enters the **total bill** and **their own expense**.
2. The **friend's expense** is auto-calculated: `friendExpense = bill - yourExpense`.
3. User selects **who is paying** from the dropdown.
4. On submission:
   - If **"You"** are paying → the friend owes you → `balance += friendExpense`
   - If the **friend** is paying → you owe them → `balance -= yourExpense`
5. The balance update is reflected **immediately** in the friend list.

---

## 📱 Responsive Design

The app uses **CSS Grid** with media queries to provide an optimal experience across devices:

| Breakpoint   | Layout                                                    |
| ------------ | --------------------------------------------------------- |
| **> 900px**  | Two-column grid (sidebar 34rem + form 44rem)              |
| **≤ 900px**  | Single-column, max-width 50rem, centered                  |
| **≤ 600px**  | Full-width, simplified grids, full-width buttons          |

### CSS Design System

The app uses **CSS custom properties** (variables) for a consistent orange-themed color palette:

```css
:root {
  --color-lightest: #fff4e6;  /* Background highlights */
  --color-light: #ffe8cc;     /* Input borders */
  --color-medium: #ffa94d;    /* Button backgrounds */
  --color-dark: #ff922b;      /* Hover states & focus */
}
```

---

## 📄 License

This project is part of [Jonas Schmedtmann's Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/). It is intended for **educational purposes**.

---

<p align="center">
  Made with React & Vite
</p>

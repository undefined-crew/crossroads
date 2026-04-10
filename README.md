# Crossroads — The Life Sandbox

Crossroads is an interactive comic-panel web app that teaches real-world life skills through branching AI-driven scenarios. Users describe a real-life situation: a rent dispute, a surprise bill, or a salary negotiation, and the app generates an illustrated comic story with branching choices. Each decision leads to a different outcome panel, showing exactly what happens and why the smart move was the smart move. Pre-built scenarios are also available covering 20+ common situations young adults face.

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or Atlas)
- Firebase project with Google OAuth enabled
- Google Gemini API key

### Installation

```bash
git clone https://github.com/undefined-crew/crossroads.git
cd crossroads
npm install
```

### Environment Variables

Create a `.env.local`:

```env
# MongoDB
MONGODB_URI=

# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
FIREBASE_ADMIN_PRIVATE_KEY=
FIREBASE_ADMIN_CLIENT_EMAIL=

# Gemini
GEMINI_API_KEY=
```

### Run

```bash
npm run dev
```

---

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a separate branch (git checkout -b your-branch-name)
3. Commit your changes (git commit -m "your commit message")
4. Push to your branch (git push origin your-branch-name)
5. Open a Pull Request

Please open an issue first for any significant changes.

---

## Team

| Name | GitHub |
|---|---|
| Shaurya | [@Shaurya9524](https://github.com/Shaurya9524) |
| Shubham | [@itzshubhamdev](https://github.com/itzshubhamdev) |
| Naman | [@Ethereal-Eclipse](https://github.com/Ethereal-Eclipse) |
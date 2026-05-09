# Secret Santa Form

## Run locally

1. Install dependencies with `npm install`.
2. Start the server with `npm start`.
3. Open `http://localhost:3000` in your browser.

## Backend

The form submits to `POST /submit`. Submitted entries are stored in memory for the current server session, and you can inspect them at `GET /api/submissions`.

## Notes

The UI lives in `index.html` and `improve.css`.


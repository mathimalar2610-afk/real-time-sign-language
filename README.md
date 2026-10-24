# Real-Time Sign Language Conversation

Phase 1 creates the Flask backend and the React frontend for a local two-way communication prototype. The UI is rendered by the React `App` component in `static/js/script.js`.

## Requirements

- Windows
- Python 3.12.10 or compatible Python 3.12

## Run Phase 1

Open PowerShell in this folder and run:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
py -m pip install -r requirements.txt
py app.py
```

Open http://127.0.0.1:5000 in a browser. The page should show the project title, camera placeholder, recognition panel, sign representation panel, conversation area, language selector, and status indicator.

The React UI is loaded from public CDNs in this first prototype, so an internet connection is required to render the React layer. The Flask server and project data remain local. A later phase can add a bundled frontend if offline use is required.

## Phase scope

This phase intentionally does not access the webcam, microphone, MediaPipe, or a machine-learning model. Confirm that the page loads before beginning Phase 2.

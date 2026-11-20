export function createWebIntegration() {
  return {
    "slug": "letters",
    "policy": "document-owner",
    "kind": "private-documents",
    "directory": "public",
    "assets": [
      "/app.js",
      "/app.css"
    ],
    "directoryEnv": "PRAXIS_LETTERS_DIR",
    "mountTarget": "/run/praxis-documents/letters",
    "privateConfigKey": "letters"
  };
}

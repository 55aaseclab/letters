import { createStackIntegration } from './stack.mjs';
import { localCompose } from './local-compose.mjs';
export function createDeploymentIntegration() { return {
  stack: createStackIntegration(),
  localCompose,
  "volumes": [
    "letters"
  ],
  "runtime": {},
  "businessBindings": {},
  "initialFiles": [],
  "privateDocuments": {
    "directory": "/data/letters/documents",
    "environment": "PRAXIS_LETTERS_DIR"
  }
}; }

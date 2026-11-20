// Source-only local installation recipe. Preserve volume identities during upgrades.
export const localCompose = {
  "services": {},
  "volumes": {
    "letters-data": {}
  },
  "initializeVolumes": [],
  "webVolumes": []
};

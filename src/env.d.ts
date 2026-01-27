/// <reference types="astro/client" />

// Allow importing JSON files without TypeScript treating them as `{}`.
declare module "*.json" {
  const value: any;
  export default value;
}
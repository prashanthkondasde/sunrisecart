export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // MFE SOURCE FILES
    // shared catalog
    "../catalog-mfe/src/**/*.{js,ts,jsx,tsx}",
    "../product-mfe/src/**/*.{js,ts,jsx,tsx}",
   // "../cart-mfe/src/**/*.{js,ts,jsx,tsx}",
    
    // shared ui
    "../shared-ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

import nextra from "nextra";

const withNextra = nextra({
  // ... Other Nextra config options
  search: { codeblocks: false },
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
  output: "export",
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  basePath: process.env.PAGES_BASE_PATH,
});

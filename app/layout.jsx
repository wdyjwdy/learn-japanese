import { Layout, Navbar } from "nextra-theme-docs";
import { Head, Search } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./styles.css";
import { House } from "lucide-react";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = <Navbar logo={<House />} />;

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          editLink={null}
          feedback={{ content: null }}
          navigation={false}
          sidebar={{
            toggleButton: false,
            defaultMenuCollapseLevel: 1,
          }}
          toc={{ backToTop: false, title: "TOC" }}
          darkMode={false}
          search={
            <Search
              placeholder="Search"
              className="searchbox"
              emptyResult={
                <p>
                  <span>只能搜标题</span>
                  <br />
                  <span>只能顺序匹配</span>
                </p>
              }
            />
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

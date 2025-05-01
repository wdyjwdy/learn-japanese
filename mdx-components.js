import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    blockquote: Example,
  };
}

function Example({ children }) {
  const data = children[1].props.children;
  console.log("child", children);
  const list = data.split("\n").map((x) => x.split("#"));
  console.log("list", list);
  return (
    <div className="example">
      {list.map((item) => (
        <p key={item}>
          <span className="jp">{item[0]}</span>
          <span className="cn">{item[1]}</span>
        </p>
      ))}
    </div>
  );
}

import { useMDXComponents as getThemeComponents } from "nextra-theme-docs"; // nextra-theme-blog or your custom theme
import React from "react";

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components,
    blockquote: Example,
    h1: H1,
    h2: H2,
  };
}

function H1({ children }) {
  return <h1 data-pagefind-body>{children}</h1>;
}

function H2({ children, id }) {
  return <h2 id={id}>{children}</h2>;
}

function Example({ children }) {
  const list = children
    .filter((x) => typeof x === "object")
    .map((x) => x.props.children.split("\n").map((x) => x.split("#")));
  return (
    <div className="example">
      {list.map((group, index) => (
        <React.Fragment key={group}>
          {index !== 0 && <br />}
          {group.map((item) => (
            <p key={item}>
              <span className="jp">{item[0]}</span>
              <span className="cn">{item[1]}</span>
            </p>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

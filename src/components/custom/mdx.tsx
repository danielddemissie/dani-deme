import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import { CodeBlock } from "./code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children, id }) => (
      <h1
        id={id}
        className="scroll-m-20 text-4xl font-black tracking-tight mb-4 mt-8"
      >
        {children}
      </h1>
    ),
    h2: ({ children, id }) => (
      <h2
        id={id}
        className="scroll-m-20 text-3xl font-black tracking-tight mb-3 mt-8 pb-2"
      >
        {children}
      </h2>
    ),
    h3: ({ children, id }) => (
      <h3
        id={id}
        className="scroll-m-20 text-2xl font-black tracking-tight mb-3 mt-6"
      >
        {children}
      </h3>
    ),
    h4: ({ children, id }) => (
      <h4
        id={id}
        className="scroll-m-20 text-xl font-black tracking-tight mb-2 mt-4"
      >
        {children}
      </h4>
    ),
    h5: ({ children, id }) => (
      <h5
        id={id}
        className="scroll-m-20 text-lg font-black tracking-tight mb-2 mt-4"
      >
        {children}
      </h5>
    ),
    h6: ({ children, id }) => (
      <h6
        id={id}
        className="scroll-m-20 text-base font-black tracking-tight mb-2 mt-4"
      >
        {children}
      </h6>
    ),

    p: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6 text-foreground">
        {children}
      </p>
    ),

    a: ({ href, children }) => {
      const isExternal = href?.startsWith("http");
      const Component = isExternal ? "a" : Link;

      return (
        <Component
          href={href || "#"}
          className="font-medium text-blue-500 underline underline-offset-4 transition-colors hover:text-menu-foreground"
          {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </Component>
      );
    },

    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 text-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,

    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-border pl-4 text-menu-foreground">
        {children}
      </blockquote>
    ),

    pre: ({ children }) => {
      const codeElement = children as any;
      const code = codeElement?.props?.children;
      const className = codeElement?.props?.className;
      const filename = codeElement?.props?.filename;

      return (
        <CodeBlock className={className} filename={filename}>
          {code}
        </CodeBlock>
      );
    },
    code: ({ children, className, ...props }) => {
      const isInline = !className;

      if (isInline) {
        return (
          <code
            className="relative rounded bg-secondary-background px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-main-foreground border border-border"
            {...props}
          >
            {children}
          </code>
        );
      }

      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },

    img: ({ src, alt }) => (
      <span className="block my-6">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={800}
          height={400}
          className="rounded-base w-full h-auto"
        />
      </span>
    ),

    hr: () => <hr className="my-8 border-border" />,

    table: ({ children }) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-secondary-background">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="[&_tr:last-child]:border-0">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="border-b border-border transition-colors hover:bg-secondary-background/50">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </td>
    ),

    ...components,
  };
}

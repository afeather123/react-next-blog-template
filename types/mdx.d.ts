declare module '*.mdx' {
    let MDXComponent: (props: any) => JSX.Element
    export default MDXComponent
    export const metadata: {
      title: string,
      createdAt: Date,
      tags: string[]
    }
  }
  
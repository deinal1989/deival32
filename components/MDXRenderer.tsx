import { MDXRemote } from 'next-mdx-remote';

export default function MDXRenderer({ source }) {
  return <MDXRemote {...source} />;
}

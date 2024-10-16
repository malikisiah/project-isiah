import { MDXRemote } from 'next-mdx-remote/rsc';
import { supabase } from '@/database';
import { ArticleLayout } from '@/components/ArticleLayout';

export const revalidate = 0;

export default async function Page({ params }: { params: { slug: string } }) {
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', params.slug)
    .single();

  if (!article || !article.content) {
    return <div>Post not found</div>;
  }

  return (
    <ArticleLayout article={article}>
      <MDXRemote source={article.content} />
    </ArticleLayout>
  );
}

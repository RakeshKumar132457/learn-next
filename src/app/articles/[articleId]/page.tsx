'use client'
import Link from "next/link";
import React, { use } from "react";

type Props = {
  params: Promise<{
    articleId: string;
  }>;
  searchParams?: Promise<{
    lang: string;
  }>;
};

const Articles = ({ params, searchParams }: Props) => {
  const resolvedParams = use(params);
  const resovledSearchParams = searchParams ? use(searchParams) : undefined;
  return (
    <>
      <h1>
        News article {resolvedParams.articleId} in{" "}
        {resovledSearchParams?.lang || "en"}
      </h1>
      <p>Reading in lang</p>
      <div>
        <Link href={`/articles/${resolvedParams.articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${resolvedParams.articleId}?lang=fr`}>French</Link>
        <Link href={`/articles/${resolvedParams.articleId}?lang=es`}>Spanish</Link>
      </div>
    </>
  );
};

export default Articles;

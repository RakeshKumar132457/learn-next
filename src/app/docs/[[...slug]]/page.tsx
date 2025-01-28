import React, { use } from "react";

const Document = ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const resolvedSlugs = use(params);
  if (!resolvedSlugs?.slug) {
    return <div>Main doc page</div>;
  }
  return <div>Url formed: {resolvedSlugs.slug.join("/")}</div>;
};

export default Document;

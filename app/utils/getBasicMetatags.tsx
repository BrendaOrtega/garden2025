export type GetBasicMetaTagsTypes = {
  title?: string;
  description?: string;
  image?: string;
  twitterCard?: "summary" | "summary_large_card";
};

export default function getBasicMetaTags({
  title = "Brenda González Ortega | Product Designer",
  description = "Let's talk!",
  image = "https://easybits-dev.fly.storage.tigris.dev/6814ed40681c31b087c02c3a/metaImage_LaWXMUl4t8i6bG51UuG0s.webp",
  twitterCard = "summary",
}: GetBasicMetaTagsTypes) {
  return [
    { title },
    { name: "description", content: description },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:url",
      content: "www.brendago.design",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:image",
      content: image,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:image",
      content: image,
    },
    {
      name: "twitter:url",
      content: "www.brendago.design",
    },
    {
      name: "twitter:card",
      content: twitterCard,
    },
  ];
}

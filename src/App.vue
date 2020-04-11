<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    const title = "Edward Hails - Software Engineer";
    const description =
      "I'm Edward Hails; a BSc Computer Scientist, Software Engineer & avid tea drinker.";

    return {
      title: title,
      meta: [
        { key: "description", name: "description", content: description },
        {
          name: "og:title",
          key: "og:title",
          content: title,
          template: (chunk) => `${chunk} - Onfe`
        },
        { name: "og:type", key: "og:type", content: "website" },
        { name: "og:description", key: "og:description", content: description },
        { name: "og:url", key: "og:url", content: "https://onfe.uk" },
        {
          name: "og:image",
          key: "og:image",
          content: "https://onfe.uk/onfe-og-default.png"
        },
        { name: "twitter:card", key: "twitter:card", content: "summary" },
        {
          name: "twitter:image",
          key: "twitter:image",
          content: "https://onfe.uk/onfe-twitter-default.png"
        }
      ]
    };
  }
};
</script>

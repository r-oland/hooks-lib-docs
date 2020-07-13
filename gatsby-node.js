exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  return createPage({
    ...page,

    context: {
      ...page.context,
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pages = await graphql(`
    {
      allSanityHooks {
        nodes {
          name
        }
      }
    }
  `);

  if (pages.errors) {
    throw pages.errors;
  }

  const hooks = pages.data.allSanityHooks.nodes || [];

  hooks.forEach((edge) => {
    const slug = edge.name.toLowerCase();
    const path = `/${slug}`;

    createPage({
      path,
      component: require.resolve("./src/templates/Hook.tsx"),
      context: { slug: slug, hook: edge.name },
    });
  });
};

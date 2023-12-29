import type { GatsbyNode } from 'gatsby';
import express from 'express';

export const onCreateDevServer: GatsbyNode['onCreateDevServer'] = ({ app }) => {
  app.use(express.static('public'));
};

export const onCreatePage: GatsbyNode['onCreatePage'] = async ({
  page,
  actions: { createPage, deletePage },
}) => {
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      builtAt: new Date().toISOString(),
    },
  });
};

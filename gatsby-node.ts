import type { CreateDevServerArgs } from 'gatsby';
import express from 'express';

exports.onCreateDevServer = ({ app }: CreateDevServerArgs) => {
  app.use(express.static('public'));
};

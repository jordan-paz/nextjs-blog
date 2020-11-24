import client from 'sanity-client';
import _ from 'lodash';

export async function getAllPostSlugs() {
  const query = '*[_type == "post"]';
  const allPosts = await client.fetch(query);
  return _.map(allPosts, ({ slug }) => slug.current);
}

export async function getPost(slug = '') {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}

export async function getAllPosts() {
  const query = `*[_type == "post"] { title, publishedAt, 'slug': slug.current }`;
  return await client.fetch(query);
}

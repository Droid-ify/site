async function addRecords() {
  const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
  const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);

  const documents = await index({
    // The following options are optional. You can customize them to fit your needs.
    // See https://github.com/leifoolsen/docusaurus-search-local#options for more information.
    docsDir: 'docs',
    siteDir: 'build',
    language: 'en',
    indexBlog: true,
    indexDocs: true,
    indexPages: true,
    indexSearch: true,
    indexVersion: true,
  });

  console.log('Documents:', documents);

  await index.saveObjects(documents, { autoGenerateObjectIDIfNotExist: true });

  console.log('Records added to Algolia search index.');
}
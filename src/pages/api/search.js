const {
    SearchClient,
    AzureKeyCredential,
  } = require("@azure/search-documents");
const client = new SearchClient(
    process.env.SEARCH_ENDPOINT,
    process.env.SEARCH_INDEX,
    new AzureKeyCredential(process.env.SEARCH_KEY)
    );


export default async function handler(request, response) {
    var url = new URL(request.url, `http://${request.rawHeaders['Host']}`);
    var query = url.searchParams.get('q');
    const search = await client.search(query);

    var results = new Array();
    
    for await (const result of search.results) {
            results.push({
            "name": result.document.metadata_storage_name,
            "author": result.document.metadata_author,
            "contentType": result.document.metadata_storage_content_type,
            "size": result.document.metadata_storage_size,
            "created": result.document.metadata_creation_date,
            "lastModified": result.document.metadata_storage_last_modified
            });
        };

    response.status(200).json({
        "count": search.count,
        "results": results
    })
}

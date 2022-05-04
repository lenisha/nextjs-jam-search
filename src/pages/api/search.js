export default function handler(request, response) {
    var url = new URL(request.url, `http://${request.rawHeaders['Host']}`);
    var query = url.searchParams.get('q')
    response.status(200).json({ search: query })
}

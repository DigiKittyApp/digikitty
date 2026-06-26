import http from 'node:http'

const cats = [
  {
    id: 1,
    name: 'Miso',
    healthScore: 86,
    nextCare: 'Dental cleaning due in 18 days',
  },
  {
    id: 2,
    name: 'Luna',
    healthScore: 72,
    nextCare: 'Senior bloodwork due this month',
  },
]

const server = http.createServer((request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*')
  response.setHeader('Content-Type', 'application/json')

  if (request.url === '/api/cats') {
    response.end(JSON.stringify({ cats }))
    return
  }

  if (request.url === '/api/documents') {
    response.end(
      JSON.stringify({
        documents: [
          'Rabies certificate',
          'Annual exam summary',
          'Dental x-rays',
        ],
      }),
    )
    return
  }

  response.statusCode = 404
  response.end(JSON.stringify({ error: 'Not found' }))
})

server.listen(3001, () => {
  console.log('Kitty API running at http://localhost:3001')
})

document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = params['pi']

  let db = coDesConnect('https://projeto-codes-2020-1.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.nav-buttons', context)
    context = data['portfolio'][value2]['projetos'][value]
    coDesReplace('.container-1', context)
    context = data['portfolio'][value2]['projetos'][value]['membros']
    coDesReplace('.components-list', context)
    context = data['portfolio'][value2]['projetos'][value]['materiais']
    coDesReplace('.categorias', context)
  })
})

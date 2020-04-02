document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = document.querySelector('.categorias-description-title')
  value2.href = 'projeto.html?pi='+value+'&key={{@key}}'

  let db = coDesConnect('https://projeto-codes-2020-1.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.nav-buttons', context)
    context = data['portfolio'][value]
    coDesReplace('.container-1', context)
    coDesReplace('.categorias',context)
  })
})

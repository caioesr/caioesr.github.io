document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://projeto-codes-2020-1.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.nav-buttons', context)
    coDesReplace('.categorias',context)
  })
})

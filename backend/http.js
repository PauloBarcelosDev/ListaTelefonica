const router = require('./router');
const app = router(3412);
let operadoras = [
  {nome: "Oi", codigo: 014, categoria: "celular", preco:2},
  {nome: "Vivo", codigo: 015, categoria: "celular", preco:3},
  {nome: "Tim", codigo: 045, categoria: "celular", preco:1},
  {nome: "Embratel", codigo: 045, categoria: "fixo", preco:2},
  {nome: "Gvt", codigo: 045, categoria: "fixo", preco:4},
];
let contatos = [
  {nome: "Pedro", telefone: "99988877", data: new Date(), operadora: { nome: "Oi", codigo: 14, categoria: "ccelular"}},
  {nome: "Paulo", telefone: "99988887", data: new Date(),  operadora: { nome: "Vivo", codigo: 15, categoria: "ccelular"}},
  {nome: "Lucas", telefone: "99988777",  data: new Date(), operadora: { nome: "Tim", codigo: 41, categoria: "ccelular"}},
];
app.interceptor(function (req,res, next){
  res.setHeader('Acess0Control-Allow-Origin', '*' );
  res.setHeader('Acess0Control-Allow-Headers', 'Content-Type' );
  next();
});
app.interceptor(function (req,res, next){
  res.setHeader('Content-Type', 'aplication/json;charset=UTF-8' );
  next();
});
app.interceptor(function(req,res,next){
  res.set
});
app.get('/operadoras', function(req,res){
  res.write(JSON.stringify(operadoras));
  res.end();
});
app.get('/contatos', function(req,res){
  res.write(JSON.stringify(contatos));
  res.end();
});

app.post('/contatos', function(req,res){
  var contato = req.body;
  contatos.push(JSON.parse(contato));
  res.end();
});
app.options('/contatos', function(req,res){
  res.end();
});
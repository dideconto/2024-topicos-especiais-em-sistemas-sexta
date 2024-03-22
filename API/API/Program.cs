

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

List<Produto> produtos = new List<Produto>();
produtos.Add(new Produto("Celular", "IOS"));
produtos.Add(new Produto("Celular", "Android"));
produtos.Add(new Produto("Televisão", "LG"));
produtos.Add(new Produto("Notebook", "Avell"));

//EndPoints - Funcionalidades
//GET: http://localhost:5225/
app.MapGet("/", () => "Minha primeira API em C# com watch");

//GET: http://localhost:5225/api/produto/listar
app.MapGet("/api/produto/listar", () => 
    produtos);

//POST: http://localhost:5225/api/produto/cadastrar
app.MapPost("/api/produto/cadastrar", () => 
    "Cadastro de produtos");

app.Run();

record Produto(string Nome, string Descricao);

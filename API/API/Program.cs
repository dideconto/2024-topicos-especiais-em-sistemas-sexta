using API.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

Produto produto = new Produto();
// produto.setNome("Bolacha");
produto.Nome = "Bolacha";
// Console.WriteLine(produto.getNome());
Console.WriteLine(produto.Nome);

List<Produto> produtos = new List<Produto>();
produtos.Add(new Produto("Celular", "IOS", 4000));
produtos.Add(new Produto("Celular", "Android", 2500));
produtos.Add(new Produto("Televisão", "LG", 2000));
produtos.Add(new Produto("Notebook", "Avell", 5000));

//EndPoints - Funcionalidades
//GET: http://localhost:5225/
app.MapGet("/", () => "Minha primeira API em C# com watch");

//GET: http://localhost:5225/api/produto/listar
app.MapGet("/api/produto/listar", () => 
    produtos);

//GET: http://localhost:5225/api/produto/buscar/id_do_produto
app.MapGet("/api/produto/buscar/{id}", (string id) => 
{
    foreach (Produto produtoCadastrado in produtos)
    {
        if(produtoCadastrado.Id == id)
        {
            return Results.Ok(produtoCadastrado);
        }
    }
    // Produto não encontrado
    return Results.NotFound("Produto não encontrado!");
});

//POST: http://localhost:5225/api/produto/cadastrar
app.MapPost("/api/produto/cadastrar", () => 
    "Cadastro de produtos");

app.Run();
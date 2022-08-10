/* $( document ).ready(function() {
    alert("Jquery funcionando");
}); */
$(() => {
  const pessoas = $.getJSON("pessoas.json", function () {
    console.log("Carregando pessoas.json");
  }).done(function (data) {
    console.log("Terminou pessoas.json");
    console.log(data);
    $('#myTable').DataTable({
      data: data,
      columns: [
        { data: 'cpf' },
        { data: 'nome' },
        { data: 'idade' },
        { data: 'cidade' },
        { data: 'estado' }
      ],
      responsive: true,
      colReorder: true,
      "language": {
        "decimal":        "",
        "emptyTable":     "Não existem registros para exibir.",
        "info":           "Exibindo _START_ até _END_ de _TOTAL_ registros",
        "infoEmpty":      "Exibindo 0 até 0 de 0 registros",
        "infoFiltered":   "(Fitrado a partir de _MAX_ registros)",
        "infoPostFix":    "",
        "thousands":      ",",
        "lengthMenu":     "Exibir _MENU_ registros",
        "loadingRecords": "Carregando...",
        "processing":     "Processando...",
        "search":         "Buscar:",
        "zeroRecords":    "Nenhum regsitro encontrado",
        "paginate": {
          "first":      "Primeiro",
          "last":       "Último",
          "next":       "Próximo",
          "previous":   "Anterior"
        }
      }
    });
  });

  $("#botao").click(() => {
    const n1 = _.parseInt($("#numero1").val());
    const n2 = _.parseInt($("#numero2").val());
    const soma = n1 + n2;
    $("#numero3").val(soma);
  });
});
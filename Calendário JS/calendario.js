var data = new Date();

var mes = data.getMonth();

var ano = data.getFullYear();

var primeiro_dia = new Date(ano, mes,1);
//var ultimo_dia = new Date(ano, mes+1,0);

var c = [];

var meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

window.onload = calendario;

function mesAnterior() {
    mes = mes-1;
    document.getElementById('mes_atual').innerHTML = meses[mes];
}

function mesProximo() {
    mes = mes+1;
    document.getElementById('mes_atual').innerHTML = meses[mes];
}

function calendario() {
    var i = primeiro_dia.getDay();
    //var ultimo = ultimo_dia.getDate();

    switch (i) {
        case 0:
            d=1;
            break;
        case 1:
            d=0;
            break;
        case 2:
            d=(-1);
            break;
        case 3:
            d=(-2);
            break;
        case 4:
            d=(-3);
            break;
        case 5:
            d=(-4);
            break;
        default:
            d=(-5);
            break;
    }

    
    //for(i=0; i<42; i++) {
        for(l=0; l<7; l++) {
            var dia = new Date(ano, mes,d);
            c.push('<button class="btn btn-default botao_dia" type="button">'+dia.getDate()+'</button>');
            d++;
        }
    //}
    
    /* for(i=0; i<42; i++) {
        var dia = new Date(ano, mes,d);
        c.push('<button class="btn btn-default botao_dia" type="button">'+dia.getDate()+'</button>');
        d++;
    } */

    calendario.innerHTML = c.join(' ');
    //console.log(c.A);
}

document.getElementById('mes_atual').innerHTML = meses[mes];
var calendario = document.getElementById('calendario');
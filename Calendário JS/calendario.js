var data = new Date();

var mes = data.getMonth();

var ano = data.getFullYear();

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

window.onload = calendarioJS;

function mesAnterior() {
    mes = mes-1;
    document.getElementById('mes_atual').innerHTML = meses[mes];
    calendarioJS(mes);
}

function mesProximo() {
    mes = mes+1;
    document.getElementById('mes_atual').innerHTML = meses[mes];
    calendarioJS(mes);
}

function calendarioJS() {
    var m = mes;
    var primeiro_dia = new Date(ano, m,1);
    var ultimo_dia = new Date(ano, m+1,0);
    var i = primeiro_dia.getDay();

    switch (i) {
        case 0:
            d=1;
            t=35;
            break;
        case 1:
            d=0;
            t=35;
            break;
        case 2:
            d=(-1);
            t=35;
            break;
        case 3:
            d=(-2);
            t=35;
            break;
        case 4:
            d=(-3);
            t=35;
            break;
        case 5:
            d=(-4);
            t=35;
            break;
        default:
            d=(-5);
            t=42;
            break;
    }

    c = [];

    for(l=0; l<t; l++) {
        var dia = new Date(ano, m,d);

        if(dia < primeiro_dia || dia > ultimo_dia) {
            c.push('<button class="btn btn-default botao_dia_extra" type="button">'+dia.getDate()+'</button>');
            d++;
        } else {
            c.push('<button class="btn btn-default botao_dia" type="button">'+dia.getDate()+'</button>');
            d++;
        }
    }
    
    calendario.innerHTML = c.join(' ');

    document.getElementById('calendario');
}

document.getElementById('mes_atual').innerHTML = meses[mes];

var ta = document.getElementById("ta")
var tb = document.getElementById("tb")
var tc = document.getElementById("tc")
var td = document.getElementById("td")
var te = document.getElementById("te")
var tf = document.getElementById("tf")
var tg = document.getElementById("tg")
var th = document.getElementById("th")
var ti = document.getElementById("ti")
var tj = document.getElementById("tj")
var tk = document.getElementById("tk")
var tl = document.getElementById("tl")
var tm = document.getElementById("tm")
var tn = document.getElementById("tn")
var to = document.getElementById("to")
var tp = document.getElementById("tp")
var tq = document.getElementById("tq")
var tr = document.getElementById("tr")
var ts = document.getElementById("ts")
var tt = document.getElementById("tt")
var tu = document.getElementById("tu")
var tv = document.getElementById("tv")
var tw = document.getElementById("tw")
var tx = document.getElementById("tx")
var ty = document.getElementById("ty")
var tz = document.getElementById("tz")
var answer = document.querySelector('.game__answer')
var question = document.querySelector('.game__question')
var ntentativas = document.getElementById("tentativas")
var forca = document.querySelector('.forca__img')
var backloser = document.querySelector('.main__maxwindow')
var loser = document.querySelector('.maxwindow__end')
var menu = document.querySelector('.main__menu')
var backmenu = document.querySelector('.maxwindow--menu')
var closenmenu = document.querySelector('.right__icon__closemenu')
var openmenu = document.querySelector('.right__icon__menu')
var backwin = document.querySelector('.main__maxwindow--win')
var winner = document.querySelector('.maxwindow__win')

var win = function () {
    backwin.classList.add('active')
    setTimeout(() => {
        winner.classList.add('active')
    }, 1);
}

var youlose = function () {
    backloser.classList.add('active')
    setTimeout(() => {
        loser.classList.add('active')
    }, 1);
}

var startgame = function () {
    let myArray = [1, 2, 3, 4, 5];
    let rand = Math.floor(Math.random() * myArray.length);
    let level = myArray[rand];

    if (level == 1) {
        scrvanswer1()
    }
    if (level == 2) {
        scrvanswer2()
    }
    if (level == 3) {
        scrvanswer3()
    }
    if (level == 4) {
        scrvanswer4()
    }
    if (level == 5) {
        scrvanswer5()
    }
}

function close_window() {
    if (confirm("Deseja fechar esta página?")) {
        window.close();
    }
}

function restart() {
    ta.classList.remove('incorrect')
    tb.classList.remove('incorrect')
    tc.classList.remove('incorrect')
    td.classList.remove('incorrect')
    te.classList.remove('incorrect')
    tf.classList.remove('incorrect')
    tg.classList.remove('incorrect')
    th.classList.remove('incorrect')
    ti.classList.remove('incorrect')
    tj.classList.remove('incorrect')
    tk.classList.remove('incorrect')
    tl.classList.remove('incorrect')
    tm.classList.remove('incorrect')
    tn.classList.remove('incorrect')
    to.classList.remove('incorrect')
    tp.classList.remove('incorrect')
    tq.classList.remove('incorrect')
    tr.classList.remove('incorrect')
    ts.classList.remove('incorrect')
    tt.classList.remove('incorrect')
    tu.classList.remove('incorrect')
    tv.classList.remove('incorrect')
    tw.classList.remove('incorrect')
    tx.classList.remove('incorrect')
    ty.classList.remove('incorrect')
    tz.classList.remove('incorrect')

    ta.classList.remove("correct")
    tb.classList.remove("correct")
    tc.classList.remove("correct")
    td.classList.remove("correct")
    te.classList.remove("correct")
    tf.classList.remove("correct")
    tg.classList.remove("correct")
    th.classList.remove("correct")
    ti.classList.remove("correct")
    tj.classList.remove("correct")
    tk.classList.remove("correct")
    tl.classList.remove("correct")
    tm.classList.remove("correct")
    tn.classList.remove("correct")
    to.classList.remove("correct")
    tp.classList.remove("correct")
    tq.classList.remove("correct")
    tr.classList.remove("correct")
    ts.classList.remove("correct")
    tt.classList.remove("correct")
    tu.classList.remove("correct")
    tv.classList.remove("correct")
    tw.classList.remove("correct")
    tx.classList.remove("correct")
    ty.classList.remove("correct")
    tz.classList.remove("correct")

    forca.setAttribute('src', 'assets/img/Frame 1 (1).png');

    winner.classList.remove('active')
    setTimeout(() => {
        backwin.classList.remove('active')
    }, 2000);

    loser.classList.remove('active')
    setTimeout(() => {
        backloser.classList.remove('active')
    }, 2000);

    startgame()
}

function menutoggle() {
    closenmenu.classList.toggle('active')
    openmenu.classList.toggle('active')
    if (backmenu.classList.contains('active')) {
        setTimeout(() => {
            backmenu.classList.toggle('active')
        }, 500);
        menu.classList.toggle('active')
    }
    else {
        backmenu.classList.toggle('active')
        setTimeout(() => {
            menu.classList.toggle('active')
        }, 1);
    }
}

function scrvanswer1() {
    var restantes = 6
    question.textContent = "Cientista Famoso"
    ntentativas.textContent = restantes
    answer.innerHTML = '<p class="answer__letra" id="e1">E</p><p class="answer__letra" id="i1">I</p><p class="answer__letra" id="n1">N</p><p class="answer__letra" id="s1">S</p><p class="answer__letra" id="t1">T</p><p class="answer__letra" id="e2">E</p><p class="answer__letra" id="i2">I</p><p class="answer__letra" id="n2">N</p>';

    let e1 = document.getElementById('e1')
    let e2 = document.getElementById("e2")
    let i1 = document.getElementById("i1")
    let i2 = document.getElementById("i2")
    let n1 = document.getElementById("n1")
    let n2 = document.getElementById("n2")
    let s1 = document.getElementById("s1")
    let t1 = document.getElementById("t1")

    ta.onclick = function () {
        ta.classList.add('incorrect')
        redpoints()
    }
    tb.onclick = function () {
        tb.classList.add('incorrect')
        redpoints()
    }
    tc.onclick = function () {
        tc.classList.add('incorrect')
        redpoints()
    }
    td.onclick = function () {
        td.classList.add('incorrect')
        redpoints()
    }
    tf.onclick = function () {
        tf.classList.add('incorrect')
        redpoints()
    }
    tg.onclick = function () {
        tg.classList.add('incorrect')
        redpoints()
    }
    th.onclick = function () {
        th.classList.add('incorrect')
        redpoints()
    }
    tj.onclick = function () {
        tj.classList.add('incorrect')
        redpoints()
    }
    tk.onclick = function () {
        tk.classList.add('incorrect')
        redpoints()
    }
    tl.onclick = function () {
        tl.classList.add('incorrect')
        redpoints()
    }
    tm.onclick = function () {
        tm.classList.add('incorrect')
        redpoints()
    }
    to.onclick = function () {
        to.classList.add('incorrect')
        redpoints()
    }
    tp.onclick = function () {
        tp.classList.add('incorrect')
        redpoints()
    }
    tq.onclick = function () {
        tq.classList.add('incorrect')
        redpoints()
    }
    tr.onclick = function () {
        tr.classList.add('incorrect')
        redpoints()
    }
    tu.onclick = function () {
        tu.classList.add('incorrect')
        redpoints()
    }
    tv.onclick = function () {
        tv.classList.add('incorrect')
        redpoints()
    }
    tw.onclick = function () {
        tw.classList.add('incorrect')
        redpoints()
    }
    tx.onclick = function () {
        tx.classList.add('incorrect')
        redpoints()
    }
    ty.onclick = function () {
        ty.classList.add('incorrect')
        redpoints()
    }
    tz.onclick = function () {
        tz.classList.add('incorrect')
        redpoints()
    }

    ts.onclick = function () {
        s1.classList.add("correct")
        ts.classList.add("correct")
        if (ts.classList.contains('correct') && te.classList.contains('correct') && ti.classList.contains('correct') && tn.classList.contains('correct') && tt.classList.contains('correct')) {
            win()
        }
    }
    tt.onclick = function () {
        t1.classList.add("correct")
        tt.classList.add("correct")
        if (ts.classList.contains('correct') && te.classList.contains('correct') && ti.classList.contains('correct') && tn.classList.contains('correct') && tt.classList.contains('correct')) {
            win()
        }
    }
    tn.onclick = function () {
        n1.classList.add("correct")
        n2.classList.add("correct")
        tn.classList.add("correct")
        if (ts.classList.contains('correct') && te.classList.contains('correct') && ti.classList.contains('correct') && tn.classList.contains('correct') && tt.classList.contains('correct')) {
            win()
        }
    }
    te.onclick = function () {
        e1.classList.add("correct")
        e2.classList.add("correct")
        te.classList.add("correct")
        if (ts.classList.contains('correct') && te.classList.contains('correct') && ti.classList.contains('correct') && tn.classList.contains('correct') && tt.classList.contains('correct')) {
            win()
        }
    }
    ti.onclick = function () {
        i1.classList.add("correct")
        i2.classList.add("correct")
        ti.classList.add("correct")
        if (ts.classList.contains('correct') && te.classList.contains('correct') && ti.classList.contains('correct') && tn.classList.contains('correct') && tt.classList.contains('correct')) {
            win()
        }
    }
    function redpoints() {
        restantes = restantes - 1
        ntentativas.textContent = restantes
        if (restantes == 5) {
            forca.setAttribute('src', 'assets/img/Frame 2 (5).png');
        }
        if (restantes == 4) {
            forca.setAttribute('src', 'assets/img/Frame 2 (4).png');
        }
        if (restantes == 3) {
            forca.setAttribute('src', 'assets/img/Frame 2 (3).png');
        }
        if (restantes == 2) {
            forca.setAttribute('src', 'assets/img/Frame 2 (2).png');
        }
        if (restantes == 1) {
            forca.setAttribute('src', 'assets/img/Frame 2 (1).png');
        }
        if (restantes == 0) {
            forca.setAttribute('src', 'assets/img/Frame 2.png');
            youlose()
        }
    }
}

function scrvanswer2() {
    var restantes = 6
    question.textContent = "Órgão Humano"
    ntentativas.textContent = restantes
    answer.innerHTML = '<p class="answer__letra" id="c1">C</p><p class="answer__letra" id="e1">É</p><p class="answer__letra" id="r1">R</p><p class="answer__letra" id="e2">E</p><p class="answer__letra" id="b1">B</p><p class="answer__letra" id="r2">R</p><p class="answer__letra" id="o1">O</p>';

    let e1 = document.getElementById('e1')
    let e2 = document.getElementById("e2")
    let c1 = document.getElementById("c1")
    let r2 = document.getElementById("r2")
    let r1 = document.getElementById("r1")
    let b1 = document.getElementById("b1")
    let o1 = document.getElementById("o1")

    ta.onclick = function () {
        ta.classList.add('incorrect')
        redpoints()
    }
    tb.onclick = function () {
        b1.classList.add("correct")
        tb.classList.add("correct")
        if (te.classList.contains('correct') && tc.classList.contains('correct') && tr.classList.contains('correct') && tb.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    tc.onclick = function () {
        c1.classList.add("correct")
        tc.classList.add("correct")
        if (te.classList.contains('correct') && tc.classList.contains('correct') && tr.classList.contains('correct') && tb.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    td.onclick = function () {
        td.classList.add('incorrect')
        redpoints()
    }
    tf.onclick = function () {
        tf.classList.add('incorrect')
        redpoints()
    }
    tg.onclick = function () {
        tg.classList.add('incorrect')
        redpoints()
    }
    th.onclick = function () {
        th.classList.add('incorrect')
        redpoints()
    }
    tj.onclick = function () {
        tj.classList.add('incorrect')
        redpoints()
    }
    tk.onclick = function () {
        tk.classList.add('incorrect')
        redpoints()
    }
    tl.onclick = function () {
        tl.classList.add('incorrect')
        redpoints()
    }
    tm.onclick = function () {
        tm.classList.add('incorrect')
        redpoints()
    }
    to.onclick = function () {
        o1.classList.add("correct")
        to.classList.add("correct")
        if (te.classList.contains('correct') && tc.classList.contains('correct') && tr.classList.contains('correct') && tb.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    tp.onclick = function () {
        tp.classList.add('incorrect')
        redpoints()
    }
    tq.onclick = function () {
        tq.classList.add('incorrect')
        redpoints()
    }
    tr.onclick = function () {
        r1.classList.add("correct")
        r2.classList.add("correct")
        tr.classList.add("correct")
        if (te.classList.contains('correct') && tc.classList.contains('correct') && tr.classList.contains('correct') && tb.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    tu.onclick = function () {
        tu.classList.add('incorrect')
        redpoints()
    }
    tv.onclick = function () {
        tv.classList.add('incorrect')
        redpoints()
    }
    tw.onclick = function () {
        tw.classList.add('incorrect')
        redpoints()
    }
    tx.onclick = function () {
        tx.classList.add('incorrect')
        redpoints()
    }
    ty.onclick = function () {
        ty.classList.add('incorrect')
        redpoints()
    }
    tz.onclick = function () {
        tz.classList.add('incorrect')
        redpoints()
    }

    ts.onclick = function () {
        ts.classList.add('incorrect')
        redpoints()
    }
    tt.onclick = function () {
        tt.classList.add('incorrect')
        redpoints()
    }
    tn.onclick = function () {
        tn.classList.add('incorrect')
        redpoints()
    }
    te.onclick = function () {
        e1.classList.add("correct")
        e2.classList.add("correct")
        te.classList.add("correct")
        if (te.classList.contains('correct') && tc.classList.contains('correct') && tr.classList.contains('correct') && tb.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    ti.onclick = function () {
        ti.classList.add('incorrect')
        redpoints()
    }
    function redpoints() {
        restantes = restantes - 1
        ntentativas.textContent = restantes
        if (restantes == 5) {
            forca.setAttribute('src', 'assets/img/Frame 2 (5).png');
        }
        if (restantes == 4) {
            forca.setAttribute('src', 'assets/img/Frame 2 (4).png');
        }
        if (restantes == 3) {
            forca.setAttribute('src', 'assets/img/Frame 2 (3).png');
        }
        if (restantes == 2) {
            forca.setAttribute('src', 'assets/img/Frame 2 (2).png');
        }
        if (restantes == 1) {
            forca.setAttribute('src', 'assets/img/Frame 2 (1).png');
        }
        if (restantes == 0) {
            forca.setAttribute('src', 'assets/img/Frame 2.png');
            youlose()
        }
    }
}

function scrvanswer3() {
    var restantes = 6
    question.textContent = "Esporte"
    ntentativas.textContent = restantes
    answer.innerHTML = '<p class="answer__letra" id="e1">E</p><p class="answer__letra" id="s1">S</p><p class="answer__letra" id="g1">G</p><p class="answer__letra" id="r1">R</p><p class="answer__letra" id="i1">I</p><p class="answer__letra" id="m1">M</p><p class="answer__letra" id="a1">A</p>';

    let e1 = document.getElementById('e1')
    let s1 = document.getElementById("s1")
    let g1 = document.getElementById("g1")
    let r1 = document.getElementById("r1")
    let i1 = document.getElementById("i1")
    let m1 = document.getElementById("m1")
    let a1 = document.getElementById("a1")

    ta.onclick = function () {
        a1.classList.add("correct")
        ta.classList.add("correct")
        if (te.classList.contains('correct') && ts.classList.contains('correct') && tg.classList.contains('correct') && tr.classList.contains('correct') && ti.classList.contains('correct') && tm.classList.contains('correct') && ta.classList.contains('correct')) {
            win()
        }
    }
    tb.onclick = function () {
        tb.classList.add('incorrect')
        redpoints()
    }
    tc.onclick = function () {
        tc.classList.add('incorrect')
        redpoints()
    }
    td.onclick = function () {
        td.classList.add('incorrect')
        redpoints()
    }
    tf.onclick = function () {
        tf.classList.add('incorrect')
        redpoints()
    }
    tg.onclick = function () {
        g1.classList.add("correct")
        tg.classList.add("correct")
        if (te.classList.contains('correct') && ts.classList.contains('correct') && tg.classList.contains('correct') && tr.classList.contains('correct') && ti.classList.contains('correct') && tm.classList.contains('correct') && ta.classList.contains('correct')) {
            win()
        }
    }
    th.onclick = function () {
        th.classList.add('incorrect')
        redpoints()
    }
    tj.onclick = function () {
        tj.classList.add('incorrect')
        redpoints()
    }
    tk.onclick = function () {
        tk.classList.add('incorrect')
        redpoints()
    }
    tl.onclick = function () {
        tl.classList.add('incorrect')
        redpoints()
    }
    tm.onclick = function () {
        m1.classList.add("correct")
        tm.classList.add("correct")
        if (te.classList.contains('correct') && ts.classList.contains('correct') && tg.classList.contains('correct') && tr.classList.contains('correct') && ti.classList.contains('correct') && tm.classList.contains('correct') && ta.classList.contains('correct')) {
            win()
        }
    }
    to.onclick = function () {
        to.classList.add('incorrect')
        redpoints()
    }
    tp.onclick = function () {
        tp.classList.add('incorrect')
        redpoints()
    }
    tq.onclick = function () {
        tq.classList.add('incorrect')
        redpoints()
    }
    tr.onclick = function () {
        r1.classList.add("correct")
        tr.classList.add("correct")
        if (te.classList.contains('correct') && ts.classList.contains('correct') && tg.classList.contains('correct') && tr.classList.contains('correct') && ti.classList.contains('correct') && tm.classList.contains('correct') && ta.classList.contains('correct')) {
            win()
        }
    }
    tu.onclick = function () {
        tu.classList.add('incorrect')
        redpoints()
    }
    tv.onclick = function () {
        tv.classList.add('incorrect')
        redpoints()
    }
    tw.onclick = function () {
        tw.classList.add('incorrect')
        redpoints()
    }
    tx.onclick = function () {
        tx.classList.add('incorrect')
        redpoints()
    }
    ty.onclick = function () {
        ty.classList.add('incorrect')
        redpoints()
    }
    tz.onclick = function () {
        tz.classList.add('incorrect')
        redpoints()
    }

    ts.onclick = function () {
        s1.classList.add("correct")
        ts.classList.add("correct")
        if (te.classList.contains('correct') && ts.classList.contains('correct') && tg.classList.contains('correct') && tr.classList.contains('correct') && ti.classList.contains('correct') && tm.classList.contains('correct') && ta.classList.contains('correct')) {
            win()
        }
    }
    tt.onclick = function () {
        tt.classList.add('incorrect')
        redpoints()
    }
    tn.onclick = function () {
        tn.classList.add('incorrect')
        redpoints()
    }
    te.onclick = function () {
        e1.classList.add("correct")
        te.classList.add("correct")
        if (te.classList.contains('correct') && ts.classList.contains('correct') && tg.classList.contains('correct') && tr.classList.contains('correct') && ti.classList.contains('correct') && tm.classList.contains('correct') && ta.classList.contains('correct')) {
            win()
        }
    }
    ti.onclick = function () {
        i1.classList.add("correct")
        ti.classList.add("correct")
        if (te.classList.contains('correct') && ts.classList.contains('correct') && tg.classList.contains('correct') && tr.classList.contains('correct') && ti.classList.contains('correct') && tm.classList.contains('correct') && ta.classList.contains('correct')) {
            win()
        }
    }
    function redpoints() {
        restantes = restantes - 1
        ntentativas.textContent = restantes
        if (restantes == 5) {
            forca.setAttribute('src', 'assets/img/Frame 2 (5).png');
        }
        if (restantes == 4) {
            forca.setAttribute('src', 'assets/img/Frame 2 (4).png');
        }
        if (restantes == 3) {
            forca.setAttribute('src', 'assets/img/Frame 2 (3).png');
        }
        if (restantes == 2) {
            forca.setAttribute('src', 'assets/img/Frame 2 (2).png');
        }
        if (restantes == 1) {
            forca.setAttribute('src', 'assets/img/Frame 2 (1).png');
        }
        if (restantes == 0) {
            forca.setAttribute('src', 'assets/img/Frame 2.png');
            youlose()
        }
    }
}


function scrvanswer4() {
    var restantes = 6
    question.textContent = "Doce"
    ntentativas.textContent = restantes
    answer.innerHTML = '<p class="answer__letra" id="r1">R</p><p class="answer__letra" id="a1">A</p><p class="answer__letra" id="p1">P</p><p class="answer__letra" id="a2">A</p><p class="answer__letra" id="d1">D</p><p class="answer__letra" id="u1">U</p><p class="answer__letra" id="r2">R</p><p class="answer__letra" id="a3">A</p>';

    let r1 = document.getElementById('r1')
    let a1 = document.getElementById("a1")
    let p1 = document.getElementById("p1")
    let a2 = document.getElementById("a2")
    let d1 = document.getElementById("d1")
    let u1 = document.getElementById("u1")
    let r2 = document.getElementById("r2")
    let a3 = document.getElementById("a3")

    ta.onclick = function () {
        a1.classList.add("correct")
        a2.classList.add("correct")
        a3.classList.add("correct")
        ta.classList.add("correct")
        if (ta.classList.contains('correct') && tr.classList.contains('correct') && tp.classList.contains('correct') && td.classList.contains('correct') && tu.classList.contains('correct')) {
            win()
        }
    }
    tb.onclick = function () {
        tb.classList.add('incorrect')
        redpoints()
    }
    tc.onclick = function () {
        tc.classList.add('incorrect')
        redpoints()
    }
    td.onclick = function () {
        td.classList.add("correct")
        d1.classList.add("correct")
        if (ta.classList.contains('correct') && tr.classList.contains('correct') && tp.classList.contains('correct') && td.classList.contains('correct') && tu.classList.contains('correct')) {
            win()
        }
    }
    tf.onclick = function () {
        tf.classList.add('incorrect')
        redpoints()
    }
    tg.onclick = function () {
        tg.classList.add('incorrect')
        redpoints()
    }
    th.onclick = function () {
        th.classList.add('incorrect')
        redpoints()
    }
    tj.onclick = function () {
        tj.classList.add('incorrect')
        redpoints()
    }
    tk.onclick = function () {
        tk.classList.add('incorrect')
        redpoints()
    }
    tl.onclick = function () {
        tl.classList.add('incorrect')
        redpoints()
    }
    tm.onclick = function () {
        tm.classList.add('incorrect')
        redpoints()
    }
    to.onclick = function () {
        to.classList.add('incorrect')
        redpoints()
    }
    tp.onclick = function () {
        p1.classList.add("correct")
        tp.classList.add("correct")
        if (ta.classList.contains('correct') && tr.classList.contains('correct') && tp.classList.contains('correct') && td.classList.contains('correct') && tu.classList.contains('correct')) {
            win()
        }
    }
    tq.onclick = function () {
        tq.classList.add('incorrect')
        redpoints()
    }
    tr.onclick = function () {
        tr.classList.add("correct")
        r1.classList.add("correct")
        r2.classList.add("correct")
        if (ta.classList.contains('correct') && tr.classList.contains('correct') && tp.classList.contains('correct') && td.classList.contains('correct') && tu.classList.contains('correct')) {
            win()
        }
    }
    tu.onclick = function () {
        tu.classList.add("correct")
        u1.classList.add("correct")
        if (ta.classList.contains('correct') && tr.classList.contains('correct') && tp.classList.contains('correct') && td.classList.contains('correct') && tu.classList.contains('correct')) {
            win()
        }
    }
    tv.onclick = function () {
        tv.classList.add('incorrect')
        redpoints()
    }
    tw.onclick = function () {
        tw.classList.add('incorrect')
        redpoints()
    }
    tx.onclick = function () {
        tx.classList.add('incorrect')
        redpoints()
    }
    ty.onclick = function () {
        ty.classList.add('incorrect')
        redpoints()
    }
    tz.onclick = function () {
        tz.classList.add('incorrect')
        redpoints()
    }

    ts.onclick = function () {
        ts.classList.add('incorrect')
        redpoints()
    }
    tt.onclick = function () {
        tt.classList.add('incorrect')
        redpoints()
    }
    tn.onclick = function () {
        tn.classList.add('incorrect')
        redpoints()
    }
    te.onclick = function () {
        te.classList.add('incorrect')
        redpoints()
    }
    ti.onclick = function () {
        ti.classList.add('incorrect')
        redpoints()
    }
    function redpoints() {
        restantes = restantes - 1
        ntentativas.textContent = restantes
        if (restantes == 5) {
            forca.setAttribute('src', 'assets/img/Frame 2 (5).png');
        }
        if (restantes == 4) {
            forca.setAttribute('src', 'assets/img/Frame 2 (4).png');
        }
        if (restantes == 3) {
            forca.setAttribute('src', 'assets/img/Frame 2 (3).png');
        }
        if (restantes == 2) {
            forca.setAttribute('src', 'assets/img/Frame 2 (2).png');
        }
        if (restantes == 1) {
            forca.setAttribute('src', 'assets/img/Frame 2 (1).png');
        }
        if (restantes == 0) {
            forca.setAttribute('src', 'assets/img/Frame 2.png');
            youlose()
        }
        
    }
}

function scrvanswer5() {
    var restantes = 6
    question.textContent = "Super-herói"
    ntentativas.textContent = restantes
    answer.innerHTML = '<p class="answer__letra" id="m1">M</p><p class="answer__letra" id="u1">U</p><p class="answer__letra" id="l1">L</p><p class="answer__letra" id="h1">H</p><p class="answer__letra" id="e1">E</p><p class="answer__letra" id="r1">R</p><p class="answer__letra fixed">-</p><p class="answer__letra" id="g1">G</p><p class="answer__letra" id="a1">A</p><p class="answer__letra" id="t1">T</p><p class="answer__letra" id="o1">O</p>';

    let m1 = document.getElementById('m1')
    let u1 = document.getElementById("u1")
    let l1 = document.getElementById("l1")
    let h1 = document.getElementById("h1")
    let e1 = document.getElementById("e1")
    let r1 = document.getElementById("r1")
    let g1 = document.getElementById("g1")
    let a1 = document.getElementById("a1")
    let t1 = document.getElementById("t1")
    let o1 = document.getElementById("o1")

    ta.onclick = function () {
        a1.classList.add("correct")
        ta.classList.add("correct")
        if (tm.classList.contains('correct') && tu.classList.contains('correct') && tl.classList.contains('correct') && th.classList.contains('correct') && te.classList.contains('correct') && tr.classList.contains('correct') && tg.classList.contains('correct') && ta.classList.contains('correct') && tt.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    tb.onclick = function () {
        tb.classList.add('incorrect')
        redpoints()
    }
    tc.onclick = function () {
        tc.classList.add('incorrect')
        redpoints()
    }
    td.onclick = function () {
        td.classList.add('incorrect')
        redpoints()
    }
    tf.onclick = function () {
        tf.classList.add('incorrect')
        redpoints()
    }
    tg.onclick = function () {
        g1.classList.add("correct")
        tg.classList.add("correct")
        if (tm.classList.contains('correct') && tu.classList.contains('correct') && tl.classList.contains('correct') && th.classList.contains('correct') && te.classList.contains('correct') && tr.classList.contains('correct') && tg.classList.contains('correct') && ta.classList.contains('correct') && tt.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    th.onclick = function () {
        h1.classList.add("correct")
        th.classList.add("correct")
        if (tm.classList.contains('correct') && tu.classList.contains('correct') && tl.classList.contains('correct') && th.classList.contains('correct') && te.classList.contains('correct') && tr.classList.contains('correct') && tg.classList.contains('correct') && ta.classList.contains('correct') && tt.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    tj.onclick = function () {
        tj.classList.add('incorrect')
        redpoints()
    }
    tk.onclick = function () {
        tk.classList.add('incorrect')
        redpoints()
    }
    tl.onclick = function () {
        l1.classList.add("correct")
        tl.classList.add("correct")
        if (tm.classList.contains('correct') && tu.classList.contains('correct') && tl.classList.contains('correct') && th.classList.contains('correct') && te.classList.contains('correct') && tr.classList.contains('correct') && tg.classList.contains('correct') && ta.classList.contains('correct') && tt.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    tm.onclick = function () {
        m1.classList.add("correct")
        tm.classList.add("correct")
        if (tm.classList.contains('correct') && tu.classList.contains('correct') && tl.classList.contains('correct') && th.classList.contains('correct') && te.classList.contains('correct') && tr.classList.contains('correct') && tg.classList.contains('correct') && ta.classList.contains('correct') && tt.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    to.onclick = function () {
        o1.classList.add("correct")
        to.classList.add("correct")
        if (tm.classList.contains('correct') && tu.classList.contains('correct') && tl.classList.contains('correct') && th.classList.contains('correct') && te.classList.contains('correct') && tr.classList.contains('correct') && tg.classList.contains('correct') && ta.classList.contains('correct') && tt.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    tp.onclick = function () {
        tp.classList.add('incorrect')
        redpoints()
    }
    tq.onclick = function () {
        tq.classList.add('incorrect')
        redpoints()
    }
    tr.onclick = function () {
        r1.classList.add("correct")
        tr.classList.add("correct")
        if (tm.classList.contains('correct') && tu.classList.contains('correct') && tl.classList.contains('correct') && th.classList.contains('correct') && te.classList.contains('correct') && tr.classList.contains('correct') && tg.classList.contains('correct') && ta.classList.contains('correct') && tt.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    tu.onclick = function () {
        u1.classList.add("correct")
        tu.classList.add("correct")
        if (tm.classList.contains('correct') && tu.classList.contains('correct') && tl.classList.contains('correct') && th.classList.contains('correct') && te.classList.contains('correct') && tr.classList.contains('correct') && tg.classList.contains('correct') && ta.classList.contains('correct') && tt.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    tv.onclick = function () {
        tv.classList.add('incorrect')
        redpoints()
    }
    tw.onclick = function () {
        tw.classList.add('incorrect')
        redpoints()
    }
    tx.onclick = function () {
        tx.classList.add('incorrect')
        redpoints()
    }
    ty.onclick = function () {
        ty.classList.add('incorrect')
        redpoints()
    }
    tz.onclick = function () {
        tz.classList.add('incorrect')
        redpoints()
    }

    ts.onclick = function () {
        ts.classList.add('incorrect')
        redpoints()
    }
    tt.onclick = function () {
        t1.classList.add("correct")
        tt.classList.add("correct")
        if (tm.classList.contains('correct') && tu.classList.contains('correct') && tl.classList.contains('correct') && th.classList.contains('correct') && te.classList.contains('correct') && tr.classList.contains('correct') && tg.classList.contains('correct') && ta.classList.contains('correct') && tt.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    tn.onclick = function () {
        tn.classList.add('incorrect')
        redpoints()
    }
    te.onclick = function () {
        e1.classList.add("correct")
        te.classList.add("correct")
        if (tm.classList.contains('correct') && tu.classList.contains('correct') && tl.classList.contains('correct') && th.classList.contains('correct') && te.classList.contains('correct') && tr.classList.contains('correct') && tg.classList.contains('correct') && ta.classList.contains('correct') && tt.classList.contains('correct') && to.classList.contains('correct')) {
            win()
        }
    }
    ti.onclick = function () {
        ti.classList.add('incorrect')
        redpoints()
    }
    function redpoints() {
        restantes = restantes - 1
        ntentativas.textContent = restantes
        if (restantes == 5) {
            forca.setAttribute('src', 'assets/img/Frame 2 (5).png');
        }
        if (restantes == 4) {
            forca.setAttribute('src', 'assets/img/Frame 2 (4).png');
        }
        if (restantes == 3) {
            forca.setAttribute('src', 'assets/img/Frame 2 (3).png');
        }
        if (restantes == 2) {
            forca.setAttribute('src', 'assets/img/Frame 2 (2).png');
        }
        if (restantes == 1) {
            forca.setAttribute('src', 'assets/img/Frame 2 (1).png');
        }
        if (restantes == 0) {
            forca.setAttribute('src', 'assets/img/Frame 2.png');
            youlose()
        }
    }
}

window.onload = startgame()
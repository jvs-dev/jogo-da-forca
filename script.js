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
var myArray = [1, 2, 3, 4, 5];
var rand = Math.floor(Math.random() * myArray.length);
var level = myArray[rand];

var win = function () {
    backwin.classList.add('active')
    setTimeout(() => {
        winner.classList.add('active')
    }, 1);
}

if (level == 1) {
    scrvanswer1()
}
if (level == 2) {
    scrvanswer2()
}
if (level == 3) {
    scrvanswer3()
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
            backloser.classList.add('active')
            setTimeout(() => {
                loser.classList.add('active')
            }, 1);
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
            backloser.classList.add('active')
            setTimeout(() => {
                loser.classList.add('active')
            }, 1);
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
            backloser.classList.add('active')
            setTimeout(() => {
                loser.classList.add('active')
            }, 1);
        }
    }
}
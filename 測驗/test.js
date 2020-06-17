var btnA = 0, btnB = 0, btnC = 0, btnD = 0;
function chosen(no) {
    var Acolor = document.getElementById('optionA');
    var Bcolor = document.getElementById('optionB');
    var Ccolor = document.getElementById('optionC');
    var Dcolor = document.getElementById('optionD');
    switch (no) {
        case 'A':
            Acolor.style.backgroundImage = 'url("按鈕hover＿測驗選項長版.png")';
            Bcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Ccolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Dcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            if (btnA == 0)
                btnA = 1;
            else
                btnA = 0;
            break;
        case 'B':
            Acolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Bcolor.style.backgroundImage = 'url("按鈕hover＿測驗選項長版.png")';
            Ccolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Dcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            if (btnB == 0)
                btnB = 1;
            else
                btnB = 0;
            break;
        case 'C':
            Acolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Bcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Ccolor.style.backgroundImage = 'url("按鈕hover＿測驗選項長版.png")';
            Dcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            if (btnC == 0)
                btnC = 1;
            else
                btnC = 0;
            break;
        case 'D':
            Acolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Bcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Ccolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Dcolor.style.backgroundImage = 'url("按鈕hover＿測驗選項長版.png")';
            if (btnD == 0)
                btnD = 1;
            else
                btnD = 0;
            break;
    }

}
var btnE = 0, btnF = 0, btnG = 0, btnH = 0;
function chosen2(no) {
    var Ecolor = document.getElementById('optionE');
    var Fcolor = document.getElementById('optionF');
    var Gcolor = document.getElementById('optionG');
    var Hcolor = document.getElementById('optionH');
    switch (no) {
        case 'E':
            Ecolor.style.backgroundImage = 'url("按鈕hover＿測驗選項長版.png")';
            Fcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Gcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Hcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            if (btnE == 0)
                btnE = 1;
            else
                btnE = 0;
            break;
        case 'F':
            Ecolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Fcolor.style.backgroundImage = 'url("按鈕hover＿測驗選項長版.png")';
            Gcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Hcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            if (btnF == 0)
                btnF = 1;
            else
                btnF = 0;
            break;
        case 'G':
            Ecolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Fcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Gcolor.style.backgroundImage = 'url("按鈕hover＿測驗選項長版.png")';
            Hcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            if (btnG == 0)
                btnG = 1;
            else
                btnG = 0;
            break;
        case 'H':
            Ecolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Fcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Gcolor.style.backgroundImage = 'url("按鈕＿測驗選項長版.png")';
            Hcolor.style.backgroundImage = 'url("按鈕hover＿測驗選項長版.png")';
            if (btnH == 0)
                btnH = 1;
            else
                btnH = 0;
            break;
    }

}
function unFinished() {
    var ss = document.getElementById('submit');
    //var sas=querySelector('[href="answer生活.html"]');
    //sas.href = ' ';
    
}



function finished(){
    var submit = document.getElementById('submit');
    if (btnA + btnB + btnC + btnD + btnE + btnF + btnG + btnH == 2) {
        document.getElementById("submit").disabled = false;
    }
}

function chosenBad(no) {
    var btncolor = document.getElementById('option'+no);
    //var t = window.getComputedStyle(btncolor, ":hover");
    if (btnA + btnB + btnC + btnD == 0) {
        btncolor.style.backgroundColor = '#757fa4';
        switch (no) {
            case 'A':
                btnA = 1
                break;
            case 'B':
                btnB = 1
                break;
            case 'C':
                btnC = 1
                break;
            case 'D':
                btnD = 1
                break;
        }
    }
    else {
        btncolor.style.backgroundColor = '#fef378';
        switch (no) {
            case 'A':
                btnA = 0;
                break;
            case 'B':
                btnB = 0;
                break;
            case 'C':
                btnC = 0;
                break;
            case 'D':
                btnD = 0;
                break;
        }
        //t.backgroundColor = '#f4efae';
    }
}


function chosenBad2(no) {
    var btncolor = document.getElementById('option' + no);
    //var t = window.getComputedStyle(btncolor, ":hover");
    if (btnE + btnF + btnG + btnH == 0) {
        btncolor.style.backgroundColor = '#757fa4';
        switch (no) {
            case 'E':
                btnE = 1
                break;
            case 'F':
                btnF = 1
                break;
            case 'G':
                btnG = 1
                break;
            case 'H':
                btnH = 1
                break;
        }
    }
    else {
        btncolor.style.backgroundColor = '#fef378';
        switch (no) {
            case 'E':
                btnE = 0;
                break;
            case 'F':
                btnF = 0;
                break;
            case 'G':
                btnG = 0;
                break;
            case 'H':
                btnH = 0;
                break;
        }
        //t.backgroundColor = '#f4efae';
    }
}
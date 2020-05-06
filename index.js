function calc() {
    let input0 = parseInt($('#input0').val());
    let input1 = parseInt($('#input1').val());
    let input2 = parseInt($('#input2').val());
    let input3 = parseInt($('#input3').val());
    let input4 = parseInt($('#input4').val());
    let input5 = parseInt($('#input5').val());
    let input6 = parseInt($('#input6').val());
    let input7 = parseInt($('#input7').val());
    let input8 = parseInt($('#input8').val());
    let input9 = parseInt($('#input9').val());
    let input10 = parseInt($('#input10').val());
    let total = input0 + input1 + input2 + input3 + input4 + input5 + input6 + input7 + input8 + input9 + input10;
    let bad = input0 + input1 + input2 + input3 + input4 + input5 + input6;
    let good = input9 + input10;
    let badPercent = bad / total * 100;
    let goodPercent = good / total * 100;
    let result = goodPercent - badPercent;
    $('#total').html(total);
    $('#badPercent').html(badPercent);
    $('#goodPercent').html(goodPercent);
    $('#result').html(result);
}
$(() => {
    $("main button.bibi").click(function () {
        $(this).blur()
        count(1)
        axios.post('/')
    })

    function count(plus = false) {
        let count = parseInt($("main .counter").attr('bibi-count'))
        if (plus) count += plus
        updateData(count)
    }

    function updateData(count) {
        let startNumber = parseInt($("main .counter").attr('bibi-count'))
        $("main .counter").attr('bibi-count', count)
        countNum($("main .counter"), startNumber, count)
        //$("main .counter").text(count.toLocaleString('en-US'))
    }
    setInterval(async () => {
        let counterData = await axios('/count')
        if (counterData.statusText = "OK")
            if (parseInt($("main .counter").attr('bibi-count')) < counterData.data)
                updateData(counterData.data)
    }, 1000 * 10)
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
        loadJS('/javascripts/konamibibi.js')
    });
    cheet('c o i n 3 x', function () {
        $("main button.bibi").text('幣幣 ❤️')
    });
})

function loadJS(js) {
    s = document.createElement('script');
    s.src = js
    document.getElementsByTagName('body')[0].appendChild(s);
}

function countNum($el, from, to) {
    if (to - from < 5) {
        $el.text(to.toLocaleString('en-US'))
    } else {
        $({
            countNum: from
        }).animate({
            countNum: to
        }, {
            duration: 500,
            easing: 'linear',
            step: function () {
                $el.text(Math.floor(this.countNum).toLocaleString('en-US'))
            },
            complete: function () {
                $el.text(this.countNum.toLocaleString('en-US'))
            }
        });
    }
}
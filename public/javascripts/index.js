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
        $("main .counter").attr('bibi-count', count)
        $("main .counter").text(count.toLocaleString('en-US'))
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
})

function loadJS(js) {
    s = document.createElement('script');
    s.src = js
    document.getElementsByTagName('body')[0].appendChild(s);
}
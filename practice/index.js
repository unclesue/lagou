{/* <script>
    ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
    console.log(a); // 10
    console.log(b); // 20
    console.log(rest); // {c: 30, d: 40}
</script> */}

const url = "http://23.36.250.247:8002/api/duogui/reserveSynergy/getCityOrArea?userId=398"
const req = new XMLHttpRequest()
const x = req.open(url)
x.send(null)
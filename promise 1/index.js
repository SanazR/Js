< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >

    <
    head charset = "utf-8" >
    <
    title > title < /title> <
    /head>

<
body >
    <
    script >
    var Keep;
Keep = true;

Promise = new Promise(function(resolve, reject) {
    if (Keep) {
        resolve("The man likes keeping his word");
    } else {
        reject("The man doesn't want to keep his word");
    }
});

console.log(Promise); <
/script> <
/body> <
/html>
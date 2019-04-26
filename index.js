const fetch = require("node-fetch");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

fetch('https://www.google.com/')
    .then(res => res.text())
    .then((body) => {
        //console.log(body);
        let dom = new JSDOM(body);
        console.log(dom.window.document.getElementById('tsf'))
        // let content = dom.window.document.getElementById('searchform');
        // console.log(content)
    });

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

// const dom = new JSDOM(``, {
//     url: "https://www.google.com/",
//     referrer: "https://www.google.com/",
//     contentType: "text/html",
//     includeNodeLocations: true,
//     storageQuota: 10000000
// });

// console.log(dom.window.document.body)
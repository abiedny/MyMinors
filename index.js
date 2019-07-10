let possibleTables = document.getElementsByClassName("subreqTitle");

creditHeaders = Array.from(possibleTables).filter(table => {
    const reg = /\d{1,3} total credits including transfer work/;
    return reg.match(table.innerHTML);
});

let courses = Array.from(creditHeaders[0].nextElementSibling.nextElementSibling.children[1].children);
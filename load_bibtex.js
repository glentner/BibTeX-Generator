/*
 *  Contact Google Scholar and open a new tab for BibTeX entry.
 */

function cite_bibtex() {
        var title  = document.getElementsByTagName("h1")[0].innerHTML.split(" ");
        var search = title.join("+")
        url= "http://scholar.google.se/scholar?hl=en&q=${" + search + "}";
        var win = window.open(url, '_blank');
        win.focus();
}

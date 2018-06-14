var ClozeCard = function(text, cloze){
    if ( text.indexOf(cloze) !== -1){
        this.cloze = cloze,
        this.partial = text.replace(cloze, "..."),
        this.fullText = text
    }

    else{
        console.log('"' + text + '"' + " does not contian the cloze " + '"' + cloze + '"')
    }
    
}

module.exports = ClozeCard;
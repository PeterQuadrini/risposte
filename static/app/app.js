

function chiedi() {
    let cmp = document.getElementById("scritta")
    let loader = document.getElementById("loader")
    let index = Math.floor(Math.random() * IT.length);
    let phrase = IT[index]
    cmp.innerHTML = phrase
    loader.style.display = 'inline-block'
    cmp.style.display = 'none'
    setTimeout(() => {  
        cmp.style.display = 'inline-block'
        loader.style.display = 'none'
        
    }, 3000);
}

const IT = [
'Forse più avanti',
'Rimuovi le tue incertezze',
'Riconsidera il tuo atteggiamento',
'Prova una soluzione meno ovvia',
'Tienilo per te',
'Ti costerà',
'Avrai bisogno di saperne di più',
'Impegnandoti otterrai dei buoni risultati',
'In questo momento no',
'Non ti ricapiterà un opportunità simile',
'Qualsiasi cosa tu faccia durerà a lungo',
'Gli esiti potrebbero essere sorprendenti',
'Se ti farai aiutare otterai quello che vuoi',
'È sicuro',
'Sii audace',
'Dubitane',
'Non ti importa realmente',
'Sii più consapevole dei tuoi limiti',
'I risultati saranno incredibili',
'Sposta il tuo obbiettivo',
'Sii versatile',
'Non ti accontentare',
'Sii concreto',
'Non ti angosciare',
'Elenca i pro e i contro',
'Occupati subito di ciò che ti sta a cuore',
'Creerà confusione',
'Ora puoi',
'È un buon momento per fare progetti',
'Goditi l esperienza',
'Non scommetterci',
'Assapora questo momento',
'Lasciati guidare da qualcun altro',
'Conta fino a dieci e rifai la domanda',
'Non indugiare',
'Non sarai deluso',
'Si',
'No',
'Chissà...'
]

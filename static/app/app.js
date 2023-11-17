

function chiedi() {
    let cmp = document.getElementById("scritta")
    let loader = document.getElementById("loader")
    let index = Math.floor(Math.random() * IT.length);
    let phrase = IT[index]
    //cmp.innerHTML = phrase
    cmp.innerHTML = 'Rimuovi le tue incertezze'
    loader.style.display = 'inline-block'
    cmp.style.display = 'none'
    setTimeout(() => {  
        cmp.style.display = 'inline-block'
        loader.style.display = 'none'
        
    }, 3000);
}

function chiedi2() {
    let cmp = document.getElementById("scritta")
    let cmp2 = document.getElementById("scritta2")
    let cmp3 = document.getElementById("scritta3")
    let loader = document.getElementById("loader")
    let loader2 = document.getElementById("loader2")
    let loader3 = document.getElementById("loader3")
    cmp.innerHTML = 'Continua sulla strada che hai scelto'
    cmp2.innerHTML = 'La vita ti sta preparando qualcosa di grande'
    cmp3.innerHTML = 'Lavora su te stesso'
    //cmp.innerHTML = "Qualsiasi cosa tu faccia durera' a lungo"
    loader.style.display = 'inline-block'
    loader2.style.display = 'inline-block'
    loader3.style.display = 'inline-block'
    cmp.style.display = 'none'
    cmp2.style.display = 'none'
    cmp3.style.display = 'none'
    setTimeout(() => {  
        cmp.style.display = 'inline-block'
        cmp2.style.display = 'inline-block'
        cmp3.style.display = 'inline-block'
        loader.style.display = 'none'
        loader2.style.display = 'none'
        loader3.style.display = 'none'
        
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

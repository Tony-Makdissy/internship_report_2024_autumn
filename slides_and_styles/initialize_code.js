// List of slide files
var slides = ['setup_theme.html',
    'title.html',
    'igem_bettencourt.html',
    'lubritect.html',
    'vircap.html',
    // 'protein_design_difficulty.html',
    // 'computers_can_predict.html',
    'rfdiffusion.html',
    'manual_steps.html',
    'hdock.html',
    'pipeline.html',
    'results.html',
    'future_steps.html',
    'end.html'
];

// Function to load a slide file
function loadSlide(filename) {
    return fetch('slides_and_styles/' + filename)
        .then(response => response.text());
}

// Load all slide files
Promise.all(slides.map(loadSlide))
    .then(contents => {
        // Insert the slide content into the slides div
        document.getElementById('external-slides').innerHTML = contents.join('');

        Reveal.initialize({
            hash: true,
            slideNumber: true,
            autoPlayMedia: true,
            transition: 'convex', // none/fade/slide/convex/concave/zoom
            // Learn about plugins: https://revealjs.com/plugins/
            plugins: [RevealMarkdown, RevealHighlight, RevealNotes]
        });

    });


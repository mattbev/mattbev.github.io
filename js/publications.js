function generateBibliography(publication_types, section_title) {
    // $.getJSON('../assets/documents/publications.json', function (data) {
    //     var publications = [];
    //     $.each(data, function (i, f) {
    //         if (publication_types.includes(f.publication_type)) {
    //             publications.push([f.title, f.authors, f.venue, String(f.year), f.notes, f.links]);
    //         }
    //     });
    //     publications.sort(function (a, b) { return a[3].localeCompare(b[3]); });
    //     publications.reverse();

    //     var publications_html = [];


    //     publications.forEach(function (pub) {
    //         var title = '<p><b>' + pub[0] + '.</b></p>';
    //         var authors = '<p>' + pub[1] + '.<p>';

    //         var venue_year_notes_links = '<p>';
    //         if (pub[2] != null) {
    //             venue_year_notes_links = venue_year_notes_links + pub[2] + ', ';
    //         }
    //         venue_year_notes_links = venue_year_notes_links + pub[3] + '.';
    //         if (pub[4] != null) {
    //             venue_year_notes_links = venue_year_notes_links + ' <span class="spotlight">' + pub[4] + '</span>.'
    //         }
    //         venue_year_notes_links = venue_year_notes_links + '</p>';
    //         if (pub[5] != null) {
    //             venue_year_notes_links = venue_year_notes_links + '<p>';
    //             pub[5].forEach(function (link) {
    //                 venue_year_notes_links = venue_year_notes_links + '[' + link + '] ';
    //             });
    //             venue_year_notes_links = venue_year_notes_links + '</p>';
    //         }

    //         publications_html.push('<li>' + title + authors + venue_year_notes_links + '</li>');
    //     });
    //     $("<ol/>", {
    //         "class": "publication",
    //         html: publications_html.join("")
    //     }).appendTo("body");
    //     return publications_html;

    // });


    // $.getJSON( '../assets/documents/publications.json', function( data ) {
    //     var items = [];
    //     $.each( data, function( i, f ) {
    //       items.push( "<li id='" + i + "'>" + f.title + "</li>" );
    //     });

    //     $( "<ul/>", {
    //       "class": "my-new-list",
    //       html: items.join( "" )
    //     }).appendTo( "body" );
    //   });
}


// class PublicationsList extends HTMLElement {
//     constructor() {
//         super();
//     }

//     connectedCallback() {
//         this.innerHTML = "";



//         $.getJSON('../assets/documents/publications.json', function (data) {
//             const publication_sections = {
//                 "Journal Publications": {
//                     "types": ["Journal"],
//                     "entries": []
//                 },
//                 "Conference Publications": {
//                     "types": ["Conference"],
//                     "entries": []
//                 },
//                 "Workshop and Symposium Publications": {
//                     "types": ["Workshop", "Symposium"],
//                     "entries": []
//                 },
//                 "Theses": {
//                     "types": ["Thesis"],
//                     "entries": []
//                 },
//                 "Patents": {
//                     "types": ["Patent"],
//                     "entries": []
//                 },
//                 "Preprints and Papers Under Review": {
//                     "types": ["Preprint"],
//                     "entries": []
//                 },
//                 "Software": {
//                     "types": ["Software"],
//                     "entries": []
//                 }
//             }

//             var innerHTML = [];
//             for (const [section_title, section_data] of Object.entries(publication_sections)) {
//                 alert(section_title);
//                 $.each(data, function (i, f) {
//                     if (section_data.types.includes(f.publication_type)) {
//                         section_data.entries.push([f.title, f.authors, f.venue, String(f.year), f.notes, f.links]);
//                     }
//                 });
//                 section_data.entries.sort(function (a, b) { return a[3].localeCompare(b[3]); });
//                 section_data.entries.reverse();
//                 innerHTML.push('<div class="row">');
//                 innerHTML.push('<h2>' + section_title + '</h2>');
//                 // innerHTML.push('<ol reversed class="publication">')
//                 // section_data.entries.forEach(function (pub) {
//                 //     var title = '<p><b>' + pub[0] + '.</b></p>';
//                 //     var authors = '<p>' + pub[1] + '.<p>';

//                 //     var venue_year_notes_links = '<p>';
//                 //     if (pub[2] != null) {
//                 //         venue_year_notes_links = venue_year_notes_links + pub[2] + ', ';
//                 //     }
//                 //     venue_year_notes_links = venue_year_notes_links + pub[3] + '.';
//                 //     if (pub[4] != null) {
//                 //         venue_year_notes_links = venue_year_notes_links + ' <span class="spotlight">' + pub[4] + '</span>.'
//                 //     }
//                 //     venue_year_notes_links = venue_year_notes_links + '</p>';
//                 //     if (pub[5] != null) {
//                 //         venue_year_notes_links = venue_year_notes_links + '<p>';
//                 //         pub[5].forEach(function (link) {
//                 //             venue_year_notes_links = venue_year_notes_links + '[' + link + '] ';
//                 //         });
//                 //         venue_year_notes_links = venue_year_notes_links + '</p>';
//                 //     }

//                 //     innerHTML.push('<li>' + title + authors + venue_year_notes_links + '</li>');
//                 // });
//                 innerHTML.push('</div>');
//                 // $.html(innerHTML.join(""));
//             }
//             // alert(innerHTML);
//             // this.innerHTML = innerHTML;
//         });

//     }

// }

// customElements.define('publicationslist-component', PublicationsList);





$.getJSON('../assets/documents/publications.json', function (data) {
    const publication_sections = {
        "Journal Publications": {
            "types": ["Journal"],
        },
        "Conference Publications": {
            "types": ["Conference"],
        },
        "Workshop and Symposium Publications": {
            "types": ["Workshop", "Symposium"],
        },
        "Theses": {
            "types": ["Thesis"],
        },
        "Patents": {
            "types": ["Patent"],
        },
        "Preprints and Papers Under Review": {
            "types": ["Preprint"],
        },
        "Software": {
            "types": ["Software"],
        }
    }

    for (const [section_title, section_data] of Object.entries(publication_sections)) {
        var innerHTML = [];
        // alert(section_title);
        var entries = [];
        $.each(data, function (i, f) {
            if (section_data.types.includes(f.publication_type)) {
                entries.push([f.title, f.authors, f.venue, String(f.year), f.notes, f.links]);
            }
        });
        entries.sort(function (a, b) { return a[3].localeCompare(b[3]); });
        entries.reverse();


        innerHTML.push('<div class="row">');
        innerHTML.push('<h2>' + section_title + '</h2>');
        innerHTML.push('<ol reversed class="publication">')
        entries.forEach(function (pub) {
            var title = '<p><b>' + pub[0] + '.</b></p>';
            var authors = '<p>' + pub[1] + '.<p>';

            var venue_year_notes_links = '<p>';
            if (pub[2] != null) {
                venue_year_notes_links = venue_year_notes_links + pub[2] + ', ';
            }
            venue_year_notes_links = venue_year_notes_links + pub[3] + '.';
            if (pub[4] != null) {
                venue_year_notes_links = venue_year_notes_links + ' <span class="spotlight">' + pub[4] + '</span>.'
            }
            venue_year_notes_links = venue_year_notes_links + '</p>';
            if (pub[5] != null) {
                venue_year_notes_links = venue_year_notes_links + '<p>';
                pub[5].forEach(function (link) {
                    venue_year_notes_links = venue_year_notes_links + '[' + link + '] ';
                });
                venue_year_notes_links = venue_year_notes_links + '</p>';
            }

            innerHTML.push('<li>' + title + authors + venue_year_notes_links + '</li>');
        });
        innerHTML.push('</ol>');
        innerHTML.push('</div>');
        innerHTML = innerHTML.join("");

        $('#publications-container').append(innerHTML);

        // alert(innerHTML)
    }
});

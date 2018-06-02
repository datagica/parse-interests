const parse = require('./index')
test('matching in all the text', () => Promise.all(
  [{
    input: "danse, cuisine, musique, voyages",
    expected: [{
        "ngram": "danse",
        "value": {
          "id": "dance",
          "label": {
            "en": "Dance",
            "fr": "Danse"
          },
          "aliases": {
            "fr": [
              "danse",
              "danse classique",
              "danse orientale",
              "rock 4 temps",
              "rock 6 temps",
              "rock 4 et 6 temps",
              "rock 6 et 4 temps",
              "danseur",
              "danseuse",
              "danseur étoile",
              "danseuse étoile",
              "danseuse de ballet",
              "danse irlandaise",
              "danse latine",
              "danses latines",
              "danse moderne"
            ],
            "es": [
              "tango",
              "salsa",
              "capoeira",
              "quebrada",
              "merengue",
              "cueca",
              "plena",
              "jarabe",
              "joropo",
              "marinera",
              "cumbia"
            ],
            "en": [
              "dance",
              "dancing",
              "breakdance",
              "rock and roll",
              "african dance",
              "ballet",
              "classical ballet",
              "ballet dancer",
              "dancer",
              "swing",
              "irish dance",
              "latin dance",
              "folk dance",
              "zouk",
              "dancesport",
              "modern dance",
              "lindy hop",
              "tap dance",
              "oriental dance"
            ]
          },
          "category": "music"
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 0,
          "begin": 0,
          "end": 5
        }
      },
      {
        "ngram": "cuisine",
        "value": {
          "id": "cooking",
          "label": {
            "en": "Cooking",
            "fr": "Cuisine"
          },
          "aliases": [
            "to cook",
            "cook",
            "cooking",
            "cuisine",
            "pastries",
            "pâtisserie",
            "patisserie",
            "cuisiner",
            "cuisinier",
            "cuisinière",
            "cuisiniere",
            "faire la cuisine",
            "faire à manger",
            "cooking course",
            "cooking courses",
            "cours de cuisine"
          ],
          "category": "cooking"
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 2,
          "begin": 7,
          "end": 14
        }
      },
      {
        "ngram": "musique",
        "value": {
          "id": "music-listening",
          "label": {
            "en": "Music listening",
            "fr": "Ecouter de la musique"
          },
          "aliases": {
            "en": [
              "music",
              "music listening",
              "listening to music",
              "vinyls",
              "hi-fi",
              "sono",
              "sound system",
              "vinyl record",
              "vinyl records",
              "vinyl collection",
              "gramophones",
              "phonographs",
              "33 rpm",
              "45 rpm",
              "78 rpm"
            ],
            "fr": [
              "musique",
              "collectionne des vinyles",
              "collectionne des vinyls",
              "collectionner des vinyles",
              "collectionner des vinyls",
              "vinyles",
              "écouter de la musique",
              "écouter des disques",
              "audiophile"
            ]
          },
          "category": "distraction"
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 4,
          "begin": 16,
          "end": 23
        }
      },
      {
        "ngram": "voyages",
        "value": {
          "id": "travel",
          "label": {
            "en": "Travel",
            "fr": "Voyage"
          },
          "aliases": {
            "fr": [
              "voyage",
              "voyages",
              "voyager",
              "voyage culturel",
              "voyages culturels",
              "voyages en inde",
              "voyages en europe",
              "voyages en asie"
            ],
            "en": [
              "travel",
              "travels",
              "traveler",
              "travelling",
              "cultural travel",
              "cultural travels"
            ]
          },
          "category": "culture"
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 6,
          "begin": 25,
          "end": 32
        }
      }
    ]

  }].map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))

test('correctly detect the best block using delimiters', () => Promise.all(
  [{
    input: "J'ai patati patata des hobbies et loisirs sur cool musique point com. intérêts et activités: guitare, photographie, voyages",
    expected: [{
        "ngram": "musique",
        "value": {
          "id": "music-listening",
          "label": {
            "en": "Music listening",
            "fr": "Ecouter de la musique"
          },
          "aliases": {
            "en": [
              "music",
              "music listening",
              "listening to music",
              "vinyls",
              "hi-fi",
              "sono",
              "sound system",
              "vinyl record",
              "vinyl records",
              "vinyl collection",
              "gramophones",
              "phonographs",
              "33 rpm",
              "45 rpm",
              "78 rpm"
            ],
            "fr": [
              "musique",
              "collectionne des vinyles",
              "collectionne des vinyls",
              "collectionner des vinyles",
              "collectionner des vinyls",
              "vinyles",
              "écouter de la musique",
              "écouter des disques",
              "audiophile"
            ]
          },
          "category": "distraction"
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 9,
          "begin": 51,
          "end": 58
        }
      },
      {
        "ngram": "guitare",
        "value": {
          "id": "guitar",
          "label": {
            "en": "Guitar",
            "fr": "Guitare"
          },
          "aliases": {
            "en": [
              "guitar playing",
              "playing guitar",
              "guitar",
              "acoustic guitar",
              "electric guitar",
              "bass guitar",
              "classical guitar",
              "flamenco",
              "flamenco guitar"
            ],
            "fr": [
              "de la basse",
              "guitare éléctrique",
              "guitare electrique",
              "guitare",
              "jazz manouche",
              "guitare flamenco",
              "guitare classique"
            ]
          },
          "category": "musical-instruments"
        },
        "score": 1,
        "position": {
          "sentence": 1,
          "word": 4,
          "begin": 93,
          "end": 100
        }
      },
      {
        "ngram": "photographie",
        "value": {
          "id": "photography",
          "label": {
            "en": "Photography",
            "fr": "Photographie"
          },
          "aliases": {
            "en": [
              "photography",
              "animal photography"
            ],
            "fr": [
              "photographie",
              "photographie animale"
            ]
          },
          "category": "arts"
        },
        "score": 1,
        "position": {
          "sentence": 1,
          "word": 6,
          "begin": 102,
          "end": 114
        }
      },
      {
        "ngram": "voyages",
        "value": {
          "id": "travel",
          "label": {
            "en": "Travel",
            "fr": "Voyage"
          },
          "aliases": {
            "fr": [
              "voyage",
              "voyages",
              "voyager",
              "voyage culturel",
              "voyages culturels",
              "voyages en inde",
              "voyages en europe",
              "voyages en asie"
            ],
            "en": [
              "travel",
              "travels",
              "traveler",
              "travelling",
              "cultural travel",
              "cultural travels"
            ]
          },
          "category": "culture"
        },
        "score": 1,
        "position": {
          "sentence": 1,
          "word": 8,
          "begin": 116,
          "end": 123
        }
      }
    ]
  }].map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))

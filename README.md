# Parse Interests

If an interest is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-interests

## Usage

Example:

```javascript
await parse('I like cooking and karate.')
```

Output:

```json
    [
      {
        "ngram": "cooking",
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
        "ngram": "karate",
        "value": {
          "id": "karate",
          "label": {
            "en": "Karate",
            "fr": "Karate"
          },
          "aliases": {
            "en": [
              "karate"
            ],
            "fr": [
              "karaté"
            ]
          },
          "category": "martial-arts"
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 4,
          "begin": 19,
          "end": 25
        }
      }
    ]
```

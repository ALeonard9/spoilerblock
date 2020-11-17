# spoilerblock

Users of [the Coppermind](https://coppermind.net) (or any MediaWiki fandom site) can hide paragraphs containing spoilers of particular books.

## How to implement

> **Note**: You need the ability to create pages on the Coppermind in order for this to work! If you do not already have these permissions, please follow the steps [here](https://coppermind.net/wiki/Help:Getting_Started){:target="_blank"}.

- Step 1: Navigate to your common.js page at https://coppermind.net/wiki/User:YOURUSERNAME/common.js
- Step 2: Create Source
- Step 3: Paste in common.js code and save
- Step 4: Navigate to your common.css page at https://coppermind.net/wiki/User:YOURUSERNAME/common.css
- Step 5: Create Source
- Step 6: Paste in common.css code and save
- Step 7: Refresh your browser

## Blocking spoilers for multiple books

In order to block more than one book, you'll need to add a comma and copy the RegEx within the Selector. Here is an example:
`var spoilers = document.querySelectorAll('\*[id^="cite_ref-Dawnshard"], \*[id^="cite_ref-Oath"]');`

## ADVANCED: Coppermind Structure

Annotations use the superscript data type ('sup' ) to denote references.

```html
<sup id="cite_ref-Dawnshard_.28novella.29-6-chapter_1-0" class="reference" title=""><a href="#cite_note-Dawnshard_.28novella.29-6-chapter-1">[1]</a></sup>
```

The id contains the name of the book, chapter, etc.

The spoilerblock html would search through all DOM elements looking for "cite_ref-BOOK" and change the style to a new class called "spoiler". The spoiler class has a black background and black text, which is removed when hovered over.


## Example of hidden text

![alt text](https://github.com/ALeonard9/spoilerblock/raw/main/mockup_hidden.png "Example of hidden text.")

## Example of revealed text (by hovering over)

![alt text](https://github.com/ALeonard9/spoilerblock/raw/main/mockup_revealed.png "Example of revealed text.")

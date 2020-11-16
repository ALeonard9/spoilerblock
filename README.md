# spoilerblock

Blocks sentences containing spoilers on fandom wikis.

## Coppermind Structure

Annotations use the superscript data type ('sup' ) to denote references.

```
<sup id="cite_ref-Dawnshard_.28novella.29-6-chapter_1-0" class="reference" title=""><a href="#cite_note-Dawnshard_.28novella.29-6-chapter-1">[1]</a></sup>
```

The id contains the name of the book, chapter, etc.

The spoilerblock html would search through all DOM elements looking for "cite_ref-<Book>" and change the style to a new class called "spoiler". The spoiler class has a black background and black text, which is removed when hovered over.

## Example of hidden text

![alt text](https://github.com/ALeonard9/spoilerblock/raw/main/mockup_hidden.png "Example of hidden text.")

## Example of revealed text (by hovering over)

![alt text](https://github.com/ALeonard9/spoilerblock/raw/main/mockup_revealed.png "Example of revealed text.")

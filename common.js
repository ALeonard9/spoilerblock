  // Collect all citations containing Rhythm
  // TODO: Dawnshard is hard coded. Would replace with any unread books.
  var spoilers = document.querySelectorAll('\*[id^="cite_ref-Rhythm"]');

  // Add the spoiler class to the parent element of all citations
  spoilers.forEach(function (userItem) {
    userItem.parentElement.classList.add("spoiler");
  });

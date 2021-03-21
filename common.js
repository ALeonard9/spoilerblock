  // This example is set up to block anything related to Rhythm of War. If you'd like to block something different, this line would change. There is an example for blocking multiple books on the README.
  var spoilers = document.querySelectorAll('\*[id^="cite_ref-Rhythm"]');

  // Add the spoiler class to the parent element of all citations
  spoilers.forEach(function (userItem) {
    userItem.parentElement.classList.add("spoiler");
  });

// this is content_scripts' javascript file having the power of manipulating DOM of the current TAB

function renderReadingTime(article) {
  // If we weren't provided an article, we don't need to render anything.
  if (!article) {
    return;
  }

  const unitTimeWords = 200
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / unitTimeWords);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.id = "reading-time-badge";
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime < 1 ? "less than 1" : readingTime}min read`;

  //Adding the badge to the article if date is mentioned then before the date otherwise after the main-heading
  const heading = article.querySelector("h1");
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading)?.insertAdjacentElement("afterend", badge);
}

renderReadingTime(document.querySelector("article"));
